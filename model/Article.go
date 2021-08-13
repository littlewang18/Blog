package model

import (
	"Blog/utils/errmsg"


	"github.com/jinzhu/gorm"
)

type Article struct {
	Category Category `gorm:"foreignkey:Cid"`
	gorm.Model
	Title   string `gorm:"type:varchar(20); not null " json:"title"`
	Cid     int    `gorm:"type:int;         not null " json:"cid"`
	Desc    string `gorm:"type:varchar(200);         " json:"desc"`
	Context string `gorm:"type:longtext;             " json:"context"`
	Img     string `gorm:"type:varchar(100); 		 " json:"img"`
}


//添加文章
func CreateArticle(data *Article) int {
	var cate Category
	err := db.Create(&data).Error
	db.Where("id = ?", data.Cid).First(&cate)
	db.Model(&cate).Update("Count", cate.Count+1)
	if err != nil {
		return errmsg.ERROR
	}
	return errmsg.SUCCSE
}

//删除文章
func DeleteArticle(id int) int {
	var art Article
	var cate Category
	db.Where("id = ?", id).First(&art)
	db.Where("id = ?", art.Cid).First(&cate)
	err := db.Where("id = ?", id).Delete(&art).Error
	db.Model(&cate).Update("Count", cate.Count-1)

	if err != nil {
		return errmsg.ERROR
	}
	return errmsg.SUCCSE
}


//编辑文章信息
func EditArticle(id int, data *Article) int {
	var maps = make(map[string]interface{})

	maps["title"] = data.Title
	maps["cid"] = data.Cid
	maps["desc"] = data.Desc
	maps["context"] = data.Context
	maps["img"] = data.Img

	err := db.Model(&Article{}).Where("id = ?", id).Update(maps).Error
	if err == nil {
		return errmsg.ERROR
	}
	return errmsg.SUCCSE
}


//查询文章列表
func GetArticle(title string, pageSize int, pageNum int) ([]Article, int, int) {
	var articlelist []Article
	var total int

	if title == "" {
		err = db.Preload("Category").Offset((pageNum - 1) * pageSize).Limit(pageSize).Find(&articlelist).Error
		db.Model(&articlelist).Count(&total)
	}else {
		err = db.Where("title LIKE ? ", title+"%").Find(&articlelist) .Count(&total).Error
	}
	if err != nil && err != gorm.ErrRecordNotFound {
		return nil, errmsg.ERROR, 0
	}
	return articlelist, errmsg.SUCCSE, total
}


//查询单个文章
func GetArtInfo(id int) (Article, int) {
	var art Article
	err := db.Preload("Category").Where("id = ?", id).First(&art).Error
	if err != nil {
		return art, errmsg.ERROR_ARTICLE_NOT_EXIT
	}
	return art, errmsg.SUCCSE
}


//查询分类下的所有文章
func GetCateArt(id int, pageSize int, pageNum int) ([]Article, int, int) {
	var cateArticle []Article
	var total int
	err := db.Preload("Category").Offset((pageNum-1)*pageSize).Limit(pageSize).Where("cid = ?", id).Find(&cateArticle).Error
	db.Model(&cateArticle).Count(&total)
	if err != nil {
		return nil, errmsg.ERROR_CATE_NOT_EXIST, 0
	}
	return cateArticle, errmsg.SUCCSE, total
}
