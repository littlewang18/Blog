package middleware

import (
	"fmt"
	"math"
	"os"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/sirupsen/logrus"
)


func Loggoer() gin.HandlerFunc{
	filePath :=  "log/log.log"
	scr, err :=  os.OpenFile(filePath, os.O_RDWR|os.O_CREATE, 0755)
	if err != nil {
		fmt.Println("err:", err)
	}

	Logger := logrus.New()

	Logger.Out = scr



	return func(c *gin.Context) {
		startTime := time.Now()
		c.Next()
		stopTime  := time.Since(startTime)
		spendTime := fmt.Sprintf("%d ms", int(math.Ceil(float64(stopTime.Nanoseconds()) / 1000000.0)))
		hostName, err := os.Hostname()
		if err != nil {
			hostName = "unknown"
		}
		statusCode := c.Writer.Status()
		clientIp   := c.ClientIP()
		userAgent  := c.Request.UserAgent()
		dataSize   := c.Writer.Size()
		if dataSize < 0 {
			dataSize = 0
		}
		method     := c.Request.Method
		path       := c.Request.RequestURI

		entry := Logger.WithFields(logrus.Fields{
			"HostName" :  hostName,
			"Status"   :  startTime,
			"SpendTime":  spendTime,
			"Ip"       :  clientIp,
			"Method"   :  method,
			"Path"	   :  path,
			"DateSize" :  dataSize,
			"Agent"    :  userAgent,
		})
		if len(c.Errors) > 0 {
			entry.Error(c.Errors.ByType(gin.ErrorTypePrivate).String())
		}
		if statusCode >= 500 {
			entry.Error()
		}else if statusCode >= 400 {
			entry.Warn()
		}else {
			entry.Info()
		}
	}
}