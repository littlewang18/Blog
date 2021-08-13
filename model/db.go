package model

import (
	"Blog/utils"
	"fmt"
	"time"

	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/mysql"
)


var db *gorm.DB
var err error


func InitDb() {

  	db, err = gorm.Open(utils.Db, fmt.Sprintf("%s:%s@tcp(%s:%s)/%s?charset=utf8mb4&parseTime=True&loc=Local",
		utils.DbUser,
		utils.DbPassWord,
		utils.DbHost,
		utils.DbPort,
		utils.DbName,
	))

	if err != nil {
		fmt.Println("连接数据库失败，请检查参数：",err)
	}

	db.SingularTable(true)

	// SetMaxIdleCons 设置连接池中的最大闲置连接数。
	db.DB().SetMaxIdleConns(10)

	// SetMaxOpenCons 设置数据库的最大连接数量。
	db.DB().SetMaxOpenConns(100)

	// SetConnMaxLifetiment 设置连接的最大可复用时间。
	db.DB().SetConnMaxLifetime(10 * time.Second)


	db.AutoMigrate(&User{}, &Article{}, &Category{}, &Picture{})
}