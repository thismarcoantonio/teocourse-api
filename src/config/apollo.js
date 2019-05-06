import { join } from "path"
import { ApolloServer } from "apollo-server"
import { isProduction } from "../utils/constants"
import { fileLoader, mergeResolvers, mergeTypes } from "merge-graphql-schemas"
import { AuthenticatedDirective } from "../schemas/authenticated"

const typeDefs = fileLoader(join(__dirname, "../schemas"))
const resolvers = fileLoader(join(__dirname, "../resolvers"))
const schemaDirectives = { auth: AuthenticatedDirective }
const context = ({ req }) => ({ headers: req.headers })

// TODO: Search about cache and instrospection
export default new ApolloServer({
  typeDefs: mergeTypes(typeDefs),
  resolvers: mergeResolvers(resolvers),
  schemaDirectives,
  context,
  playground: !isProduction
})
