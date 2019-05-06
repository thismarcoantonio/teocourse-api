import { connect, connection } from "mongoose"

function datasource() {
  connect(process.env.DATABASE_URL, { useNewUrlParser: true })
  connection.once("open", () => {
    console.info("Connected at port 27701")
  })

  return connection
}

export default datasource
