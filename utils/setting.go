package utils

import (
	"fmt"

	"gopkg.in/ini.v1"
)


var(
	AppMode		 string
	HttpPort	 string
	JwtKey       string

	Db           string
	DbHost		 string
	DbPort		 string
	DbUser		 string
	DbPassWord	 string
	DbName		 string

	AccessKey	 string
	SecretKey	 string
	Bucket		 string
	QiniuSever   string
)

func init(){
	file, err := ini.Load("config/config.ini")
	if err != nil {
		fmt.Println("配置文件读取错误，请检查: " ,err)
	}

	LoadServer(file)
	LoadData(file)
	LoadQiniu(file)

}

func LoadServer(file *ini.File) {
	AppMode  = file.Section("server").Key("AppMode").MustString("debug")
	HttpPort = file.Section("server").Key("HttpPort").MustString("8080")
	JwtKey   = file.Section("server").Key("JwtKey").MustString("dsai231jm")
}

func LoadData(file *ini.File) {
	Db          = file.Section("database").Key("Db").MustString("debug")
	DbHost	    = file.Section("database").Key("DbHost").MustString("localhost")
	DbPort	    = file.Section("database").Key("DbPort").MustString("3306")
	DbUser	    = file.Section("database").Key("DbUser").MustString("blog")
	DbPassWord  = file.Section("database").Key("DbPassWord").MustString("admin")
	DbName	    = file.Section("database").Key("DbName").MustString("blog")
}

func LoadQiniu(file *ini.File) {
	AccessKey   = 	file.Section("qiniu").Key("AccessKey").String()
	SecretKey	=	file.Section("qiniu").Key("SecretKey").String()
	Bucket	 	=	file.Section("qiniu").Key("Bucket").String()
	QiniuSever	=	file.Section("qiniu").Key("QiniuSever").String()
}