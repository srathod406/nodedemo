var express=require('express')
var mongoose=require('mongoose')
var bodyParser=require('body-parser')
var router= require('./router')
mongoose.connect("mongodb://localhost:27017/cie2").then(()=>{console.log("DB Connected")

var app=express();
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.json())
app.use('/api',router);
app.listen(process.env.PORT,()=>{
    console.log("Srerver Started at 5000");
})

}).catch((err)=>{
    console.log(err);
})


