import { gql } from "apollo-server"

export default gql`
  type Class {
    id: ID!
    name: String!
    address: String
    area: String
    city: String
    state: String
    code: String
  }

  input ClassInput {
    name: String!
    address: String
    area: String
    city: String
    state: String
  }

  type Query {
    class(id: ID!): Class!
    classes: [Class!]
    validateCode(code: String!): Class! @auth
  }

  type Mutation {
    createClass(input: ClassInput!): Class! @auth
    deleteClass(id: ID!): Boolean! @auth
  }
`
