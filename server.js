const express = require("express")
const path = require("path")
//const notefn = require("./assets/js/index")


const app = express()
const PORT = process.env.PORT||3030




app.use(express.urlencoded({ extended: true }));
app.use(express.json());


const notes = []


app.get("/", (_,res)=>{
    res.sendFile(path.join(__dirname,"index.html"))
})

app.get("/notes", (_,res)=>{
    res.sendFile(path.join(__dirname,"notes.html"))
})


app.get("/api/notes", (_,res)=>{
    res.json(notes)
})
app.get("/assets/css/styles.css", (_,res)=>{
    res.sendFile(path.join(__dirname,"assets/css/styles.css"))
})
app.get("/assets/js/index.js", (_,res)=>{
    res.sendFile(path.join(__dirname,"assets/js/index.js"))
})
app.post("/api/notes", (req,res)=>{
    const savedNote = req.body

    notes.push(savedNote)
    res.sendStatus(200)
})

app.delete("/api/notes/:id", (req,res)=>{
    const note = notes.find(c => c.id === parseInt(req.params.id));
    if (!note) return res.status(404).send('This note was not found');
    const index = notes.indexOf(note);
    notes.splice(index,1);})

app.listen(PORT,()=>{
    console.log("NotePad 2.0")
    console.log("-----------------")
    console.log("Written by Fullmetal")
})