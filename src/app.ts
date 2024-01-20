import express from 'express'
import { PORT } from '../constants/environments'

const app = express()

app.use(express.json())

app.listen(PORT, async () => {
  console.log(`🔥 Server started at http://localhost:${PORT}`)
})
