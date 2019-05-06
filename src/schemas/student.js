import { gql } from "apollo-server"

export default gql`
  type Student {
    id: ID!
    name: String!
    email: String!
    phone: String
    cpf: String
    rg: String
    civilState: String
    birthDate: String
    address: String
    area: String
    city: String
    state: String
    cep: String
    scholarity: String
    church: String
    role: String
    baptized: String
    baptizedDate: String
  }

  input StudentInput {
    name: String!
    email: String!
    phone: String
    cpf: String!
    rg: String
    civilState: String
    birthDate: String!
    address: String
    area: String
    city: String
    state: String
    cep: String
    scholarity: String
    church: String
    role: String
    baptized: String
    baptizedDate: String
    classCode: String!
  }

  type Query {
    student(id: ID!): Student!
    students: [Student]!
  }

  type Mutation {
    createStudent(input: StudentInput!): Student!
  }
`
