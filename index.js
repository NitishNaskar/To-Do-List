const express=require("express");
const app=express();
const port=8000;
const db=require('./config/mongoose');
const Contact=require('./models/todolist');

app.set("view engine","ejs");
app.use(express.static("assets"));

app.get('/',function(req,res){
    return res.render("index",{
    });
})

app.listen(port,function(err){
    if(err){
        console.log("Some error in this surver >> ",err);
        return;
    }

    console.log("OK ! your server is running ......");
});