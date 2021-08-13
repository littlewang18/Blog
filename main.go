package main

import (
	"Blog/model"
	"Blog/routers"
)



func main() {

	model.InitDb()
	routers.InitRouter()

}