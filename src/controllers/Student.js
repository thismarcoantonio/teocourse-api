import Model from "../models/student"
import ClassModel from "../models/class"

class Student {
  retrieve(id) {
    return Model.findById(id)
  }

  getAll() {
    return Model.find()
  }

  async create({ classCode, ...input }) {
    const classroom = await ClassModel.findOne({ code: classCode })
    const student = await Model.create({ ...input, class: classroom._id })
    return student
  }
}

export default new Student()
