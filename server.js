  const express = require("express");
const bodyParser = require("body-parser");
  const app = express();


app.use(bodyParser.urlencoded({extended:true}));

  app.get("/",function(request,response){
    console.log(request);
        response.sendFile(__dirname+"/index.html");
  });

app.post("/",function(req,res){

  console.log(req.body);
  var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
      var num3 = num1+num2;
  res.send("Hi: "+ num3);
});

app.get("/bmi",function(req,res){

  res.sendFile(__dirname+"/bmi.html");
})

app.post("/bmi",function(req,res){

  var h = Number(req.body.h);
  var w = Number(req.body.w);

  var calc = w/(h*h);
  res.send ("BMI IS: "+calc);
})
  app.listen(4000,function(){
    console.log("Server is running on PORT 4000")
  });
