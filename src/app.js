import dotenv from "dotenv"
import datasource from "./config/datasource"
import server from "./config/apollo"

dotenv.config()

datasource()
  .once("open", async () => {
    const { url } = await server.listen({ port: process.env.PORT || 3000 })
    console.info("🚀 Server ready at", url)
  })
