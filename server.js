const express = require("express")
const path = require("path")

const app = express()
const PORT = process.env.PORT||3030

const htmlRoute = "/routes/"

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.listen(PORT,()=>{
    console.log("NotePad 2.0")
    console.log("-----------------")
    console.log("Written by Fullmetal")
})