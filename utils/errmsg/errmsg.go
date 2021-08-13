package errmsg

const(
	SUCCSE = 200
	ERROR  = 500


	//code 1000 用户
	ERROR_USERNAME_USED    = 1001
	ERROR_PASSWORD_WRONG   = 1002
	ERROR_USER_NOT_EXIT    = 1003
	ERROR_TOKEN_EXIST      = 1004
	ERROR_TOKEN_RUNTIME    = 1005
	ERROR_TOKEN_WRONG      = 1006
	ERROR_TOKEN_TYPE_WRONG = 1007
	ERROR_USER_ROLE_1      = 1008

	//code 2000分类错误
	ERROR_CATENAME_USED    = 2001
	ERROR_CATE_NOT_EXIST   = 2002

	//code 3000文章错误
	ERROR_ARTICLE_NOT_EXIT = 3001


	//code 4000图片错误
	ERROR_PICT_USED        = 4001
	ERROR_PICT_NOT_EXIT    = 4002
)


var codeMsg = map[int]string {
	SUCCSE  				: "OK",
	ERROR   				: "FAIL",
	ERROR_USERNAME_USED 	: "用户名已存在",
	ERROR_PASSWORD_WRONG	: "密码错误",
	ERROR_USER_NOT_EXIT		: "用户不存在",
	ERROR_TOKEN_EXIST		: "TOKEN不存在",
	ERROR_TOKEN_RUNTIME		: "TOKEN已过期",
	ERROR_TOKEN_WRONG		: "TOKEN错误",
	ERROR_TOKEN_TYPE_WRONG  : "TOKEN格式错误",
	ERROR_CATENAME_USED   	: "分类已存在",
	ERROR_CATE_NOT_EXIST    : "该分类不存在",
	ERROR_ARTICLE_NOT_EXIT  : "该文章不存在",
	ERROR_USER_ROLE_1 		: "该用户无权限",
	ERROR_PICT_USED			: "图片名已存在",
	ERROR_PICT_NOT_EXIT		: "图片不存在",
}


func GetErrmsg(code int)string {
	return codeMsg[code]
}