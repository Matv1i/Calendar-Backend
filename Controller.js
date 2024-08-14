import EventModel from "./Models/Event.js"

export const createEvent = async (req, res) => {
  try {
    const { id, name, color, date, timeStart, timeEnd } = req.body

    const newEvent = new EventModel({
      id,
      name,
      color,
      date,
      timeStart,
      timeEnd,
    })
    const savedEvent = await newEvent.save()
    res.json(savedEvent)
  } catch (err) {
    console.error(err)
    res.status(500).json({
      message: "Failed to create Event",
    })
  }
}

export const getEvents = async (req, res) => {
  try {
    const events = await EventModel.find()

    res.json(events)
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: "Failed to get events" })
  }
}

export const editEvent = async (req, res) => {
  try {
    const eventId = req.body.id
    await EventModel.updateOne(
      { id: eventId },
      {
        name: req.body.name,
        color: req.body.color,
        date: req.body.date,
        timeStart: req.body.timeStart,
        timeEnd: req.body.timeEnd,
      }
    )
    res.json({ success: true })
  } catch (e) {
    console.error(e)
    res.status(500).json({ message: "Can't update it" })
  }
}
export const deleteEvent = async (req, res) => {
  try {
    const eventId = req.params.id
    const doc = await EventModel.deleteOne({ id: eventId })
    if (!doc) {
      return res.status(404).json({ message: "Post not found" })
    }
    res.json({ success: true })
  } catch (e) {
    console.error(e)
    res.status(500).json({ message: "Can't delete it" })
  }
}
