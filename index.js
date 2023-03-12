const express = require("express")
const connect = require("./utils/db")
const app = new express()
const port = process.env.PORT || 5000

require("dotenv").config()

connect()

const blogRoute = require("./routes/blog")
app.use("/blogs", blogRoute)

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})