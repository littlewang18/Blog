package v1

import (
	"Blog/model"
	"Blog/utils/errmsg"
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
)


//添加分类
func AddCategory(c *gin.Context) {
	var data model.Category
	_ = c.ShouldBindJSON(&data)
	code = model.CheckCategory(data.Name)
	if code == errmsg.SUCCSE {
		model.CreateCategory(&data)
	}
	if code == errmsg.ERROR_CATENAME_USED{
		code = errmsg.ERROR_CATENAME_USED
	}

	c.JSON(http.StatusOK, gin.H{
		"status":  code,
		"data":    data,
		"message": errmsg.GetErrmsg(code),
	})
}

//删除分类
func DeleteCategory(c *gin.Context) {
	id, _ := strconv.Atoi(c.Param("id"))

	code = model.DeleteCategory(id)

	c.JSON(http.StatusOK, gin.H{
		"status":  code,
		"message": errmsg.GetErrmsg(code),
	})

}

//编辑分类名
func EditCategory(c *gin.Context) {
	var data model.Category
	id, _ := strconv.Atoi(c.Param("id"))
	_ = c.ShouldBind(&data)
	code = model.CheckCategory(data.Name)
	if code == errmsg.SUCCSE {
		model.EditCategory(id, &data)
	}
	if code == errmsg.ERROR_CATENAME_USED{
		c.Abort()
	}

	c.JSON(http.StatusOK, gin.H{
		"status":  code,
		"message": errmsg.GetErrmsg(code),
	})
}

//查询分类列表
func GetCategory(c *gin.Context) {
	pageSize, _ := strconv.Atoi(c.Query("pagesize"))
	pageNum, _ := strconv.Atoi(c.Query("pagenum"))

	if pageSize == 0 {
		pageSize = -1
	}
	if pageNum == 0 {
		pageNum = -1
	}
	data, total := model.GetCategory(pageSize, pageNum)
	code = errmsg.SUCCSE

	c.JSON(http.StatusOK, gin.H{
		"status" :  code,
		"data"   :  data,
		"total"  :  total,
		"message": errmsg.GetErrmsg(code),
	})
}
