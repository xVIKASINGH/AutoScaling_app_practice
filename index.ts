import express from 'express';

const app=express();



app.get("/",(req,res)=>{
    res.send("Hello World");
})



app.get("/health",(req,res)=>{
    res.send("ok");})

app.get("/check",(req,res)=>{
  let i=0;
  for( i=0;i<=1000000000;i++){
    i++;
  }
  res.send({value:i,message:"check completed"})
})




app.listen(3000,()=>{
    console.log("server is running on port 3000");
});