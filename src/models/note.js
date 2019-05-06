import { Schema, model } from "mongoose"
const { Types } = Schema

const Note = new Schema({
  value: {
    type: Types.Number,
    required: true
  },
  student: {
    type: Types.ObjectId,
    ref: "Student",
    required: true
  },
  exam: {
    type: Types.ObjectId,
    ref: "Exam",
    required: true
  }
})

export default model("Note", Note)
