const express = require("express");
const bodyParser = require("body-parser");
const mysql=require('mysql');
const app=express();


app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

const db=mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'',
  database:'groups',
})

db.connect((err)=>
{
  if(err)
  {
    console.log(err);
  }
  else
  {
    console.log("Database Connected successfully");
  }
});

app.get("/", function(req, res){
    db.query("Select * from friends",(err,rows,fields)=>{
        if(!err)
        res.render("AddFriend")
        else
        console.log(err);
    })
  });


  app.post("/AddFriend",function(req,res)
  {
    const {data}=req.body;
  })


  app.listen(3000, function() {
    console.log("Server started on port 3000");
  });