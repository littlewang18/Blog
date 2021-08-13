package middleware

import (
	"time"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func Cors() gin.HandlerFunc {

	return cors.New(
		cors.Config{
			AllowAllOrigins: true,
			AllowMethods: []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
			AllowHeaders: []string{"*"},
			ExposeHeaders: []string{"Context-length", "Authorization", "Content-Type"},
			AllowCredentials: true,
			MaxAge: 12 * time.Hour,
		})

}
