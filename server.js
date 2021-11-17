const express=require("express")
const app=express()
const port=5000

const home=require("./config//index3")


app.use(express.json())
app.use("/",home)

app.get("/",(req,res)=>{
    res.send("server connecting")
})

app.listen(port,()=>{
    console.log(`server connecting port no  ${port}`);
})