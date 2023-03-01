const bodyParser = require("body-parser");
const express = require("express");
var app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.get('/',function(req,res){
    res.sendFile(__dirname+"/index.html");
});
app.post('/index.html',function(req,res){
    var num1 = Number(req.body.n1);
    var num2 = Number(req.body.n2);
    var kg = Number(req.body.weight);
    var m = Number(req.body.height);
    var calculation = "<h1 style = 'color:lightblue'>"+"The addition of "+num1+" and "+num2+" is "+(num1+num2)+"\n";
    var bmi_calculation = "<h1 style = 'color:lightgreen'>"+"The BMI value by respective with your height "+m+" and weight "+kg+" is "+(kg/(m*m));
    res.send(calculation+bmi_calculation);
});
app.listen(3000,function(){
     console.log("Welcome to Home Page");
});