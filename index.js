const express=require('express');
const path=require('path');
const Contact = require("./src/contact");
require("./src/conn");
const app=express();



// start
const {MongoClient} = require('mongodb');
const { Collection } = require("mongoose");
const url = 'mongodb://localhost/27017';
const databaseName = "portfolio";
const client = new MongoClient(url);

// end




const static_path =path.join(__dirname,'views');
app.use((express.static(static_path )));
app.set('view engine','ejs');
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.set("views",static_path);


app.get("",(req,res)=>{
    res.render('in');
});
app.get("/about",(req,res)=>{
    res.render('about');
});

app.post("",async(req,res)=>{
    try{
        const addingcontactData = new Contact(req.body)
        console.log(req.body);
        addingcontactData.save();
        res.redirect("/");
    } catch(err){
        res.send(err);
    }
 });

app.listen(3000);
