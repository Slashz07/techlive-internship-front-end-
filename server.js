const express = require("express")
const { stat } = require("fs")
const path = require("path")
const app = express()
const router = require("./router")
app.set("view engine", "ejs")

let staticPath = path.join(__dirname, "public")
app.use(express.static(staticPath))

app.use(router)


app.listen(8000, () => {
  console.log("server is listening at : http://localhost:8000")
})