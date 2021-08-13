package v1

import (
	"Blog/model"
	"Blog/utils/errmsg"
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
)

//添加图片
func AddPicture(c *gin.Context) {
	var data model.Picture
	_ = c.ShouldBindJSON(&data)

	code = model.CreatePicture(&data)

	c.JSON(http.StatusOK, gin.H{
		"status":  code,
		"message": errmsg.GetErrmsg(code),
	})
}


//删除图片
func DeletePicture(c *gin.Context) {
	id, _ := strconv.Atoi(c.Param("id"))
	code = model.DeletePicture(id)

	c.JSON(http.StatusOK, gin.H{
		"status":  code,
		"message": errmsg.GetErrmsg(code),
	})
}


//编辑图片
func EditPicture(c *gin.Context) {
	var data model.Picture
	id, _ := strconv.Atoi(c.Param("id"))
	_ = c.ShouldBind(&data)

	model.EditPicture(id, &data)
	code = errmsg.SUCCSE

	c.JSON(http.StatusOK, gin.H{
		"status":  code,
		"message": errmsg.GetErrmsg(code),
	})
}


//查询图片列表
func GetPicture(c *gin.Context) {
	Name := c.Query("name")
	pageSize, _ := strconv.Atoi(c.Query("pagesize"))
	pageNum, _ := strconv.Atoi(c.Query("pagenum"))

	if pageSize == 0 {
		pageSize = -1
	}
	if pageNum == 0 {
		pageNum = -1
	}

	data, code, total := model.GetPicture(Name, pageSize, pageNum)

	c.JSON(http.StatusOK, gin.H{
		"status":  code,
		"data":    data,
		"total":   total,
		"message": errmsg.GetErrmsg(code),
	})
}
