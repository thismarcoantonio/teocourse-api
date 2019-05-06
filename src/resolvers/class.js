import ClassController from "../controllers/Class"

export default {
  Query: {
    class: async (root, { id }) => {
      const data = await ClassController.retrieve(id)
      return data || {}
    },
    classes: async () => {
      const data = await ClassController.getAll()
      return data
    }
  },
  Mutation: {
    createClass: async (root, { input }) => {
      const data = await ClassController.save(input)
      return data
    },
    deleteClass: async (root, { id }) => {
      const data = await ClassController.delete(id)
      return data
    }
  }
}
