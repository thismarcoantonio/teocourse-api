import { connect, connection } from "mongoose"
import dotenv from "dotenv"
dotenv.config()

function datasource() {
  connect(process.env.DATABASE_URL, { useNewUrlParser: true })
    .then(() => {
      console.info("Connected at port 27701")
    })
    .catch(console.error)

  return connection
}

export default datasource
