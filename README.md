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



## 项目总结

时间过得好快，从开始真的做这个差不多一个月过去了，还有很多的功能没有实现，也才部署了一半，但这也算是学习路上的一个重要的里程碑吧，一个人从后端写到前端，学到的真的很多，以前一直都在学习，实践却很少，这次的实践巩固了很多知识，，也了解到了很多以前不知道的内容，遇到了很多难题，一个一个的解决了，让我最感到难受的是前端的设计，每次设计出来的页面总是感到不行，一共做了4个版本的前端展示页面，最后决定了这一款，这个问题其中让我学的最多的是CSS，以前看CSS总是走马观花，就了解了功能，写个小demo就算学会了，但是在实践中才真的明白了很多样式的问题。这个项目也是我第一次的把go的gin框架和前端的react框架结合在了一起，也是算是第一次去写这种前后端全栈的项目，不得不说全栈需要的知识储备是十分巨大的，同时也发现了对于运维知识方面有很大的漏洞，这个需要去在以后学习。很多技术和框架都是第一次使用，使用过程有很多问题，也一一解决了，站在现在回首过去，一步一步的构建了这个项目，每天都在一点点进步。

