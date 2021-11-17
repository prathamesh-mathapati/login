
const knex=require("../config/index")

exports.insertdata=(req,res)=>{
    console.log(req.body);
    knex("test").insert(req.body).then((data)=>{
        res.send('data insert')
    }).catch((err)=>{
        res.send(err)
    })
}