const {insertdata}=require("../config/index1")
const express=require("express")
const route=express.Router()

route.post("/",insertdata)


module.exports=route