package v1

import (
	"Blog/middleware"
	"Blog/model"
	"Blog/utils/errmsg"
	"net/http"

	"github.com/gin-gonic/gin"
)


func Login(c *gin.Context) {
	var data model.User
	var token string
	var code int
	c.ShouldBindJSON(&data)

	code = model.CheckLogin(data.Username, data.Password)

	if code == errmsg.SUCCSE {
		token, code  = middleware.SetToken(data.Username)
	}
	c.JSON(http.StatusOK, gin.H{
		"status" : code,
		"message": errmsg.GetErrmsg(code),
		"token"  : token,
	})
}