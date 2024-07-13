const express = require("express")
const router = express.Router()
// const path=require("path")
// let viewPath = path.join(__dirname, "views")


router.get("/", (req, res) => {
  res.render(`index`, { title: "Home"})
})


router.get("/about", (req, res) => {
  res.render(`about`, { title: "about", age: 20 })
})

module.exports=router