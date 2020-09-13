  const express = require("express");

  const app = express();

  app.get("/",function(request,response){
    console.log(request);
    response.send("Hello");
  });


  app.listen(4000,function(){
    console.log("Server is running on PORT 3000")
  });
