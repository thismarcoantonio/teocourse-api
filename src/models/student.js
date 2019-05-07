import { Schema, model } from "mongoose"
const { Types } = Schema

const Student = new Schema({
  name: {
    type: Types.String,
    required: true
  },
  email: {
    type: Types.String,
    index: true,
    unique: true,
    required: true
  },
  phone: {
    type: Types.String
  },
  cpf: {
    type: Types.String,
    required: true,
    unique: true
  },
  rg: {
    type: Types.String
  },
  civilState: {
    type: Types.String
  },
  birthDate: {
    type: Types.Date,
    required: true
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
  cep: {
    type: Types.String
  },
  scholarity: {
    type: Types.String
  },
  church: {
    type: Types.String
  },
  role: {
    type: Types.String
  },
  baptized: {
    type: Types.Boolean
  },
  baptizedDate: {
    type: Types.Date
  },
  class: {
    type: Types.ObjectId,
    ref: "Class",
    required: true
  },
  subjects: [{
    type: Types.ObjectId,
    ref: "Subject"
  }],
  diplomas: [{
    type: Types.ObjectId,
    ref: "Diploma"
  }]
})

export default model("Student", Student)
