
const express = require("express")
const usersController = require("./Components/Controllers/UserController")
const studentController = require("./Components/Controllers/studentController")
const instructorController = require("./Components/Controllers/instructorController")
const FWDController = require("./Components/Controllers/FWDController")
const app = express()
app.use(express.json())
app.use("/users",usersController)
app.use("/students",studentController)
app.use("/instructors",instructorController)
app.use("/FWD",FWDController)
module.exports = app