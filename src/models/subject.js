import { Schema, model } from "mongoose"
const { Types } = Schema

const Subject = new Schema({
  name: {
    type: Types.String,
    required: true
  },
  description: {
    type: Types.String
  },
  exams: [{
    type: Types.ObjectId,
    ref: "Exam"
  }]
})

export default model("Subject", Subject)
