import mongoose from "mongoose"

export const EventSchema = new mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  date: { type: Date, required: true },
  timeStart: { type: String, required: true },
  timeEnd: { type: String, required: true },
  color: { type: String, required: true },
})

export default mongoose.model("Event", EventSchema)
