import express from 'express'
import { PORT } from '../constants/environments'
import router from "./router"

const app = express()

app.use(express.json())
app.use("/api/", router)

app.listen(PORT, async () => {
  console.log(`🔥 Server started at http://localhost:${PORT}`)
})
