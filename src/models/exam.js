import { Schema, model } from "mongoose"
const { Types } = Schema

const Exam = new Schema({
  name: {
    type: Types.String,
    required: true
  }
})

export default model("Exam", Exam)
