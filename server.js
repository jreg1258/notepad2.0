const express = require("express")
const path = require("path")

const app = express()
const PORT = process.env.PORT||3030

const htmlRoute = path.join(__dirname,"/routes","/")


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get("/", (_,res)=>{
    res.sendFile(htmlRoute+"index.html")
})

app.listen(PORT,()=>{
    console.log("NotePad 2.0")
    console.log("-----------------")
    console.log("Written by Fullmetal")
})