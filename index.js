const knex=require("knex")({
    client :"mysql",
    connection:{
        host:"localhost",
        user:"root" ,
        password:'Prathamesh@123',
        database:"crud" 
    }
})

knex.schema.createTable("test",(table)=>{
    table.increments("id")
    table.string("name")
    table.string("email")
    table.string("password")
}).then(()=>{
    console.log("table create ");
}).catch(()=>{
    console.log("table  already created ");
})

module.exports=knex
