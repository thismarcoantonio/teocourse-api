import { gql } from "apollo-server"

export default gql`
  type User {
    id: String
    name: String
    email: String
  }

  input CreateUserInput {
    name: String!
    email: String!
    password: String!
  }

  type Query {
    user(id: ID!): User!
    users: [User!]
  }

  type Mutation {
    login(email: String!, password: String!): String!
    createUser(input: CreateUserInput!): User!
  }
`
