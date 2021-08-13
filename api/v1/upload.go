package v1

import (
	"Blog/model"
	"Blog/utils/errmsg"
	"net/http"

	"github.com/gin-gonic/gin"
)


func Upload(c *gin.Context) {
	file, fileHeader, _ := c.Request.FormFile("file")

	fileSize := fileHeader.Size

	url, code := model.UpLoadFile(file, fileSize)

	c.JSON(http.StatusOK, gin.H{
		"status" : code,
		"message": errmsg.GetErrmsg(code),
		"url" : url,
	})
}