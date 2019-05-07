import Model from "../models/student"
import ClassModel from "../models/class"
import { toDate } from "../utils/generateDate"

class Student {
  retrieve(id) {
    return Model.findById(id)
  }

  getAll() {
    return Model.find()
  }

  async create({ classCode, baptizedDate, birthDate, ...input }) {
    const classroom = await ClassModel.findOne({ code: classCode })
    return Model.create({
      ...input,
      baptizedDate: toDate(baptizedDate),
      birthDate: toDate(birthDate),
      class: classroom._id
    })
  }
}

export default new Student()
