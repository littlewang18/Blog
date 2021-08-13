package model

import (
	"Blog/utils/errmsg"

	"github.com/jinzhu/gorm"
)

type Picture struct {
	ID    uint   `gorm:"primary_key; auto_increment " json:"id"`
	Name  string `gorm:"type:varchar(20); not null  " json:"name"`
	Img   string `gorm:"type:varchar(100); 			" json:"img"`
}



//新增图片
func CreatePicture(data *Picture) int {
	err := db.Create(&data).Error
	if err != nil {
		return errmsg.ERROR
	}
	return errmsg.SUCCSE
}


//删除图片
func DeletePicture(id int) int {
	var pic Picture
	err := db.Where("id = ?", id).Delete(&pic).Error
	if err != nil {
		return errmsg.ERROR
	}
	return errmsg.SUCCSE
}


//编辑图片信息
func EditPicture(id int, data *Picture) int {
	var maps = make(map[string]interface{})
	maps["img"] = data.Img
	err := db.Model(&Picture{}).Where("id = ?", id).Update(maps).Error
	if err == nil {
		return errmsg.ERROR
	}
	return errmsg.SUCCSE
}


//查询图片
func GetPicture(name string, pageSize int, pageNum int) ([]Picture, int, int) {
	var piclist []Picture
	var total int
	if name == "" {
		err = db.Offset((pageNum - 1) * pageSize).Limit(pageSize).Find(&piclist).Error
		db.Model(&piclist).Count(&total)
	}else {
		err = db.Where("name LIKE ? ", name+"%").Find(&piclist).Count(&total).Error
	}
	if err != nil && err != gorm.ErrRecordNotFound {
		return nil, errmsg.ERROR, 0
	}
	return piclist, errmsg.SUCCSE, total
}