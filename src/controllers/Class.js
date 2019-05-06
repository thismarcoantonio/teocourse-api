import Model from "../models/class"
import generateCode from "../utils/generateCode"

class Class {
  retrieve(id) {
    return Model.findById(id)
  }

  getAll() {
    return Model.find()
  }

  save(input) {
    return Model.create({ ...input, code: generateCode() })
  }

  async delete(id) {
    const deletedClass = await Model.deleteOne({ _id: id })
    return !!deletedClass.deletedCount
  }
}

export default new Class()
