var express=require('express')
var mongoose=require('mongoose')
var bodyParser=require('body-parser')
var router= require('./router')


var app=express();
app.use('/api',router);
app.listen(process.env.PORT,()=>{
    console.log("Srerver Started");
})