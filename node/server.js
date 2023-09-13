const express = require("express")
const app = express()
const PORT = 5000;

app.get("/",(req,res)=>{
    res.send("THE WELCOME THE GUVE B49 BATCH ")
})
app.get("/williams",(req,res)=>{
    res.send("sacsjacbjaskcbjfhkejfjefkej!!!!!!")
})

app.listen(PORT,() =>{
    console.log(" the server is working!!!!",PORT)
})
