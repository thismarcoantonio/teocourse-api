import dotenv from "dotenv"
import datasource from "./config/datasource"
import server from "./config/apollo"

dotenv.config()

datasource()
  .once("open", async () => {
    const { url } = await server.listen()
    console.info("🚀 Server ready at", url)
  })
