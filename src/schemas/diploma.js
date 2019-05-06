import { gql } from "apollo-server"

export default gql`
  type Diploma {
    id: ID!
    name: String!
  }

  input DiplomaInput {
    name: String!
  }
`
