const express = require("express")
const app = express();
const fsPromises = require("fs");

app.get("/", (req,res) => {
    res.send("Endpoint HOME api funcionando ")
})


app.get("/koders", async (req,res) => {
    const bd = await fsPromises.readFile("./koders.json", "utf8")
    console.log("DB", db);
    const parserDB = JSON.parse(db)
    res.json(parseDB);
})

app.listen(8080, () => {
    console.log("nuestro servidor esta encendido 1")
})
