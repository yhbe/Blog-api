const express = require("express")
const connect = require("./utils/db")
const cors = require("cors")
const app = new express()
const port = process.env.PORT || 5000

require("dotenv").config()

connect()

app.use(cors())

//handle incoming JSON data
app.use(express.json())

const blogRoute = require("./routes/blog")
app.use("/blogs", blogRoute)

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})