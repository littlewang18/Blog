package model

import (
	"Blog/utils"
	"Blog/utils/errmsg"
	"context"
	"mime/multipart"

	"github.com/qiniu/go-sdk/v7/auth/qbox"
	"github.com/qiniu/go-sdk/v7/storage"
)


var AccessKey  = utils.AccessKey
var SecretKey  = utils.SecretKey
var Bucket	   = utils.Bucket
var Imgurl     = utils.QiniuSever

func UpLoadFile(file multipart.File, fileSize int64) (string, int) {
	putPolicy := storage.PutPolicy{
		Scope: Bucket,
	}
	mac := qbox.NewMac(AccessKey, SecretKey)
	upToken := putPolicy.UploadToken(mac)

	cfg := storage.Config{
		Zone: &storage.ZoneHuabei,
		UseCdnDomains: false,
		UseHTTPS: false,
	}

	putExtra := storage.PutExtra{}


	formUploader := storage.NewFormUploader(&cfg)

	ret := storage.PutRet{}


	err := formUploader.PutWithoutKey(context.Background(), &ret, upToken, file, fileSize, &putExtra)
	if err != nil {
		return "", errmsg.ERROR
	}
	url := Imgurl + ret.Key
	return url, errmsg.SUCCSE
}