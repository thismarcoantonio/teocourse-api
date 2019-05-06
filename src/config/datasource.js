import { connect, connection } from "mongoose"

function datasource() {
  connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    user: process.env.DATABASE_USER,
    pass: process.env.DATABASE_PASSWORD
  })
  connection.once("open", () => {
    console.info("Connected at port 27701")
  })

  return connection
}

export default datasource
