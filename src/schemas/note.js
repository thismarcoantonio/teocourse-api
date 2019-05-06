import { gql } from "apollo-server"

export default gql`
  type Note {
    id: ID!
    value: Int!
  }

  input NoteInput {
    value: String!
    student: ID!
    exam: ID!
  }
`
