import UserController from "../controllers/User"

export default {
  Query: {
    user: (root, { id }) => UserController.retrieve(id),
    users: UserController.getAll
  },
  Mutation: {
    login: (root, data) => {
      return UserController.login(data)
    },
    createUser: (root, { input }) => {
      return UserController.create(input)
    }
  }
}
