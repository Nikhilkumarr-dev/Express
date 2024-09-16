const express = require('express');

const app = express();



function isOldEnoughMiddleware(req,res,next)
{
  const age = req.query.age;
  if(age>=14)
    {
      next();
    }else{
      res.json({
        msg:"sorry not age yet",
      });
    }
  }
  
  app.use(isOldEnoughMiddleware);

app.get("/ride",function(req,res){
  res.json({
    msg:"You have a succesfuull ride"
  })
  
})
app.get("/ride1",function(req,res){
  res.json({
    msg:"You have a succesfuull ride"
  })
})


  app.listen(1111);
  