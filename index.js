const express = require('express')

const app = express();
app.get('/',(req,res)=>{
    res.json({success:true})
})


app.listen(1000,()=>{
    console.log("Server Started")
})