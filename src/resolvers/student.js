import StudentController from "../controllers/Student"

export default {
  Query: {
    student: (root, { id }) => StudentController.retrieve(id),
    students: StudentController.getAll
  },
  Mutation: {
    createStudent: (root, { input }) => {
      return StudentController.create(input)
    }
  }
}
