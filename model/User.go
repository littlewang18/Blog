package model

import (
	"Blog/utils/errmsg"
	"encoding/base64"
	"log"

	"github.com/jinzhu/gorm"
	"golang.org/x/crypto/scrypt"
)


type User struct {
	gorm.Model
	Username   string 	`gorm:"type:varchar(20); not null" json:"username" validate:"required,max=10,min=1" label:"用户名"`
	Password   string	`gorm:"type:varchar(20); not null" json:"password" validate:"required,max=20,min=6" label:"密码"`
	Role	   int		`gorm:"type:int; DEFAULT:2"        json:"role"     validate:"required,gte=2"        label:"权限"`
}

//查询用户是否存在
func CheckUser(name string)(code int){
	var user User
	db.Select("id").Where("username = ?", name).First(&user)
	if user.ID > 0{
		return errmsg.ERROR_USERNAME_USED
	}
	return errmsg.SUCCSE
}


//添加用户
func CreateUser(data *User) int {
	err := db.Create(&data).Error
	if err != nil {
		return errmsg.ERROR
	}
	return errmsg.SUCCSE
}


//删除用户
func DeleteUser(id int) int {
	var user User
	err := db.Where("id = ?", id).Delete(&user).Error
	if err != nil {
		return errmsg.ERROR
	}
	return errmsg.SUCCSE
}

//查询单个用户
func GetUser(id int) (User, int) {
	var user User
	err = db.Where("id = ?", id).First(&user).Error
	if err != nil && err != gorm.ErrRecordNotFound {
		return user, errmsg.ERROR
	}
	return user, errmsg.SUCCSE
}



//查询用户列表
func GetUsers(username string, pageSize int, pageNum int) ([] User, int){
	var users[]User
	var total int

	if username == "" {
		err = db.Offset((pageNum-1)*pageSize).Limit(pageSize).Find(&users).Error
		db.Model(&users).Count(&total)
	}else {
		err = db.Where("username LIKE ? ", username+"%").Find(&users) .Count(&total).Error
	}

	if err != nil && err != gorm.ErrRecordNotFound {
		return nil, 0
	}
	return users, total
}

//编辑用户信息
func EditUser(id int, data *User) int {
	var maps = make(map[string]interface{})
	maps["username"] = data.Username
	maps["role"] = data.Role
	err := db.Model(&User{}).Where("id = ?", id).Update(maps).Error
	if err == nil {
		return errmsg.ERROR
	}
	return errmsg.SUCCSE
}


//加密
func (u *User)BeforeSave(){
	u.Password = ScryptPw(u.Password)
}

//加密算法
func ScryptPw(passsword string) string {
	const KeyLen = 8
	salt := []byte{12,13,15,62,65,9,14,51}
	HashPw, err := scrypt.Key([]byte(passsword), salt, 16384, 8, 1, KeyLen)
	if err != nil {
		log.Fatal(err)
	}
	fpw := base64.StdEncoding.EncodeToString(HashPw)
	return fpw
}


//登录验证
func CheckLogin(username string, password string) int {
	var user User

	db.Where("username = ?", username).First(&user)
	if user.ID == 0 {
		return errmsg.ERROR_USER_NOT_EXIT
	}
	if ScryptPw(password) != user.Password {
		return errmsg.ERROR_PASSWORD_WRONG
	}
	if user.Role != 1 {
		return errmsg.ERROR_USER_ROLE_1
	}
	return errmsg.SUCCSE
}


