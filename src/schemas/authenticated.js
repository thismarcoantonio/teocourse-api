import { gql, SchemaDirectiveVisitor } from "apollo-server"
import { verify } from "jsonwebtoken"

export default gql`
  directive @auth on FIELD_DEFINITION
`

export class AuthenticatedDirective extends SchemaDirectiveVisitor {
  visitFieldDefinition(field) {
    const { resolve } = field

    field.resolve = async function(root, input, context) {
      const token = context.headers.authorization.replace("Bearer ", "")
      const secret = process.env.JWT_SECRET

      return verify(token, secret, (err, decoded) => {
        if (err) {
          throw new Error(err)
        }
        resolve(decoded)
      })
    }
  }
}
