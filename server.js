const express = require("express")
const app = express()

app.get("/", (req, res) =>{
  console.log("Here")
  res.status(500).send("Hi")
  res.status(500).json({message: "Error"})
  res.download("server.js")
  res.render("index")
  //res.sendStatus(500)
 //res.send("Hi")
})
app.listen(3000)