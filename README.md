#  Blog(持续更新中）

gin+react制作一个博客

目录结构

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

##  实现功能

1. 用户，文章管理
2. 前端页面展示
3. 后台页面管理
4. 用户密码加密存储
5. 七牛云上传图片
6. JWT 认证
7. 跨域 cors 设置

## 项目预览

![image-20210813200908634](http://qxb2o0r7y.hb-bkt.clouddn.com/Foq6RP9Jfc1T3pEqtR8cMmk6lz-P)

![image-20210813200933227](http://qxb2o0r7y.hb-bkt.clouddn.com/FqHH1uVrCkn01Vtg3-nNY_B-eAOe)

![image-20210813200949188](http://qxb2o0r7y.hb-bkt.clouddn.com/FvWKgXZkhPstBsRSy4MYsgAqxblH)

![image-20210813201009831](http://qxb2o0r7y.hb-bkt.clouddn.com/FsbcL6pBxGhe10nJ0g2QUZjPWWl2)

![image-20210813201035560](http://qxb2o0r7y.hb-bkt.clouddn.com/Fi4rKdaF4obFWHURPqHW9IYRVs6S)

![image-20210813201208257](http://qxb2o0r7y.hb-bkt.clouddn.com/Fiq0ULSDjqXCyDfr9Xg1Ght8MOFk)

![image-20210813201310668](http://qxb2o0r7y.hb-bkt.clouddn.com/FhG6sCAej_6S2Pv30_GtLIxSSMDq)

![image-20210813201328886](http://qxb2o0r7y.hb-bkt.clouddn.com/FhZV8VeCn4qdEEKU7our258uP5pk)

![image-20210813201357213](http://qxb2o0r7y.hb-bkt.clouddn.com/FpSpGEi-8EgsIahEoS3yqhWp_1Pt)



##项目进展
