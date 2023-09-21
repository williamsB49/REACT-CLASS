const express = require("express")
const app = express()
const PORT = 5000;

app.get("/",(req,res)=>{
    res.send("THE WELCOME THE GUVE B49 BATCH williams williams williams")
})
app.get("/williams",(req,res)=>{
    res.send("sacsjacbjaskcbjfhkejfjefkej!!!!!!")
})
app.get("/abi",(req,res)=>{
    res.send("WELCOME THE API THE NODE MODAL WILLIAMS WILLIAMS")
})


app.listen(PORT,() =>{
    console.log(" the server is working!!!!",PORT)
});