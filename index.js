import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import cors from "cors"

import * as Controller from "./Controller.js"

const app = express()
app.use(cors())
const PORT = 5000
dotenv.config()
const key = process.env.DATA_BASE_KEY

mongoose
  .connect(key)
  .then(() => console.log("Databse is connected"))
  .catch((err) => console.log("Database isnt connected"))
app.use(express.json())

app.post("/events", Controller.createEvent)
app.get("/events", Controller.getEvents)
app.patch("/events", Controller.editEvent)
app.delete("/events/:id", Controller.deleteEvent)
app.listen(PORT, (err) => {
  if (err) {
    console.log(err)
  }
  console.log("Server Ok")
})
