require("dotenv").config();
import express from "express"
import { PORT } from "../constants/environments"
import router from "./router"
import db from "../config/db"
import Logger from "../config/logger";
import morganMiddleware from "./middleware/morgan.middleware";

const app = express()

app.use(express.json())
app.use(morganMiddleware)
app.use("/api/", router)

app.listen(PORT, async () => {
  await db()
  Logger.info(`🔥 Server started at http://localhost:${PORT}`)
})
