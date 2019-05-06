import Model from "../models/user"
import { sign } from "jsonwebtoken"

class Class {
  retrieve(id) {
    return Model.findById(id)
  }

  getAll() {
    return Model.find()
  }

  create(input) {
    return Model.create(input)
  }

  async login({ email, password }) {
    const user = await Model.findOne({ email })
    if (!user) throw new Error("User not found")

    const passwordMatch = await user.comparePassword(password)
    if (!passwordMatch) throw new Error("Provided password is wrong")

    const ONE_WEEK = 60 * 60 * 24 * 7
    const secret = process.env.JWT_SECRET
    return sign({ id: user._id }, secret, { expiresIn: ONE_WEEK })
  }

  async delete(id) {
    const deletedClass = await Model.deleteOne({ _id: id })
    return !!deletedClass.deletedCount
  }
}

export default new Class()
