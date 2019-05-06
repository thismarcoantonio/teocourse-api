import { Schema, model } from "mongoose"
const { Types } = Schema

const Diploma = new Schema({
  name: {
    type: Types.String,
    required: true
  }
})

export default model("Diploma", Diploma)
