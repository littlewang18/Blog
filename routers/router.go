package routers

import (
	v1 "Blog/api/v1"
	"Blog/middleware"
	"Blog/utils"


	"github.com/gin-contrib/multitemplate"
	"github.com/gin-gonic/gin"
)


func createMyRender() multitemplate.Renderer {
	p := multitemplate.NewRenderer()
	p.AddFromFiles("admin", "View/admin/index.html")
	p.AddFromFiles("front", "View/blog/index.html")
	return p
}


func InitRouter() {
	gin.SetMode(utils.AppMode)
	r := gin.New()
	r.HTMLRender = createMyRender()
	r.Use(middleware.Loggoer())
	r.Use(gin.Recovery())
	r.Use(middleware.Cors())

	r.Static("/static", "./View/blog/static")
	r.StaticFile("/favicon.ico", "/View/blog/favicon.ico")

	r.GET("/", func(c *gin.Context) {
		c.HTML(200, "front", nil)
	})




	auth := r .Group("api/v1")
	auth.Use(middleware.JwtToken())
	{
		//User
		auth.PUT("user/:id", v1.EditUser)
		auth.DELETE("user/:id", v1.DeleteUser)


		//Category
		auth.POST("category/add", v1.AddCategory)
		auth.PUT("category/:id", v1.EditCategory)
		auth.DELETE("category/:id", v1.DeleteCategory)

		//article
		auth.POST("article/add", v1.AddArticle)
		auth.PUT("article/:id", v1.EditArticle)
		auth.DELETE("article/:id", v1.DeleteArticle)

		//上传文件
		auth.POST("upload", v1.Upload)

		//图片
		auth.POST("picture/add", v1.AddPicture)
		auth.PUT("picture/:id", v1.EditPicture)
		auth.DELETE("picture/:id", v1.DeletePicture)
	}

	pub := r.Group("api/v1")
	{
		//Login
		pub.POST("login", v1.Login)

		//User
		pub.POST("user/add", v1.AddUser)
		pub.GET("users", v1.GetUsers)
		pub.GET("user/:id", v1.GetUser)

		//Category
		pub.GET("category", v1.GetCategory)

		//article
		pub.GET("article", v1.GetArticle)
		pub.GET("article/info/:id", v1.GetArtInfo)
		pub.GET("article/list/:id", v1.GetCateArt)

		//picture
		pub.GET("picture", v1.GetPicture)
	}




	r.Run(utils.HttpPort)

}