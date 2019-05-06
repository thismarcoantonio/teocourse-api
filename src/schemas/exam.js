import { gql } from "apollo-server"

export default gql`
  type Exam {
    id: ID!
    name: String!
  }

  input ExamInput {
    name: String!
  }
`
