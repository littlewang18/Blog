package model

import (
	"Blog/utils/errmsg"

	"github.com/jinzhu/gorm"
)

type Category struct {
	ID    uint   `gorm:"primary_key; auto_increment " json:"id"`
	Name  string `gorm:" type:varchar(20); not null " json:"name"`
	Count int    `gorm:"int;  		              " json:"count"`
}

//查询分类是否存在
func CheckCategory(name string) (code int) {
	var cate Category
	db.Select("id").Where("name = ?", name).First(&cate)
	if cate.ID > 0 {
		return errmsg.ERROR_CATENAME_USED
	}
	return errmsg.SUCCSE
}

//新增分类
func CreateCategory(data *Category) int {
	err := db.Create(&data).Error
	if err != nil {
		return errmsg.ERROR
	}
	return errmsg.SUCCSE
}

//删除分类
func DeleteCategory(id int) int {
	var cate Category
	err := db.Where("id = ?", id).Delete(&cate).Error
	if err != nil {
		return errmsg.ERROR
	}
	return errmsg.SUCCSE
}


//查询分类列表
func GetCategory(pageSize int, pageNum int) ([]Category, int) {
	var cate []Category
	var total int
	db.Model(&cate).Count(&total)
	err := db.Offset((pageNum - 1) * pageSize).Limit(pageSize).Find(&cate).Error
	if err != nil && err != gorm.ErrRecordNotFound {
		return nil, 0
	}
	return cate, total
}

//编辑分类信息
func EditCategory(id int, data *Category) int {
	var maps = make(map[string]interface{})
	maps["name"] = data.Name
	err := db.Model(&Category{}).Where("id = ?", id).Update(maps).Error
	if err == nil {
		return errmsg.ERROR
	}
	return errmsg.SUCCSE
}
