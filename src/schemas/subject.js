import { gql } from "apollo-server"

export default gql`
  type Subject {
    id: ID!
    name: String!
    description: String
    exams: [Exam!]
  }

  input SubjectInput {
    name: String!
    description: String
    exams: [ExamInput!]
  }
`
