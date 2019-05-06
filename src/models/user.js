import { Schema, model } from "mongoose"
import { compare, hash, genSalt } from "bcrypt"
const { Types } = Schema

async function hashPassword(next) {
  if (!this.isModified("password")) return next()

  const SALT_ROUNDS = 8
  const salt = await genSalt(SALT_ROUNDS)
  const hashPassword = await hash(this.password, salt)

  this.password = hashPassword
  next()
}

const User = new Schema({
  name: {
    type: Types.String,
    required: true
  },
  email: {
    type: Types.String,
    required: true,
    unique: true
  },
  password: {
    type: Types.String,
    required: true
  }
})

User.pre("save", hashPassword)
User.pre("update", hashPassword)

User.methods.comparePassword = function(password) {
  return compare(password, this.password)
}

export default model("User", User)
