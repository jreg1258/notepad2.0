const express = require("express")
const path = require("path")
//const notefn = require("./assets/js/index")


const app = express()
const PORT = process.env.PORT||3030

const htmlRoute = path.join(__dirname,"/routes","/")


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const notes = []


app.get("/", (_,res)=>{
    res.sendFile(htmlRoute+"index.html")
})

app.get("/notes", (_,res)=>{
    res.sendFile(htmlRoute+"notes.html")
})

app.get("/api/notes", (_,res)=>{
    res.json()
})

app.post("/api/notes", (req,res)=>{
    const savedNote = req.body

    notes.push(savedNote)
    res.send(200)
})

app.listen(PORT,()=>{
    console.log("NotePad 2.0")
    console.log("-----------------")
    console.log("Written by Fullmetal")
})