import { gql, SchemaDirectiveVisitor, AuthenticationError } from "apollo-server"
import { verify } from "jsonwebtoken"

export default gql`
  directive @auth on FIELD_DEFINITION
`

export class AuthenticatedDirective extends SchemaDirectiveVisitor {
  visitFieldDefinition(field) {
    const { resolve } = field

    field.resolve = async function(...args) {
      const result = await resolve.apply(this, args)
      const { authorization } = args[2].headers

      if (!authorization) {
        throw new AuthenticationError("User not authenticated")
      }

      const token = authorization.replace("Bearer ", "")
      const secret = process.env.JWT_SECRET

      return verify(token, secret, (err, decoded) => {
        if (err) throw new AuthenticationError(err)
        resolve(decoded)

        return result
      })
    }
  }
}
