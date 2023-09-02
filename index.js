const express = require('express')
const app = express()

app.get("/",(req,res)=>{
    res.send('AWS')
})

app.listen(80,()=>{
    console.log(`Port Started on localhost:80 / default http port`);
})