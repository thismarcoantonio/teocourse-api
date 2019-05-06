import { Schema, model } from "mongoose"
const { Types } = Schema

const Class = new Schema({
  name: {
    type: Types.String,
    required: true
  },
  code: {
    type: Types.String,
    index: true,
    required: true,
    unique: true
  },
  address: {
    type: Types.String
  },
  area: {
    type: Types.String
  },
  city: {
    type: Types.String
  },
  state: {
    type: Types.String
  },
  students: [{
    type: Types.ObjectId,
    ref: "Student"
  }],
  subjects: [{
    type: Types.ObjectId,
    ref: "Subject"
  }]
})

export default model("Class", Class)
