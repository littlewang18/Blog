# Blog
gin+React Blog

> 文件目录如下

``` 
Blog
+__View   		 前端React代码
|	+React  	 前端react 代码
|	|	|_admin  博客后台界面
|	|	|_blog   博客显示界面
|   |
|	|_admin      打包后文件
|	|_blog       打包后文件
+_api
|	+v1          后端接口
|
+_config         后端配置
|
+__log           日志
|
+__middleware     中间件
|	|_cors.go     跨域配置
|	|_jwt.go      token配置
|	|_logger.go   日志配置
|
+__model  		  数据库模型
|
|——routers        路由组
|
|__utils          错误处理，模型检测等 
```

后端配置如下

```ini

[server]			#基础配置
AppMode = debug				
HttpPort = :8080
JwtKey = dsai231jm



[database]			#数据库配置
Db = mysql
DbHost = 127.0.0.1
DbPort = 3306
DbUser = blog
DbPassWord = admin123
DbName = blog


[qiniu]				#七牛云上传图片配置
AccessKey  = 
SecretKey  = 
Bucket     = 
QiniuSever = 
```
