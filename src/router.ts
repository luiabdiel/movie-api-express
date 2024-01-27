import { Router, Request, Response } from "express";
import { createMovie, findMovieById } from "./controllers/movie.controller";
import { validate } from "./middleware/handleValidation.middleware";
import { movieCreateValidation } from "./middleware/movieValidation.middleware";

const router = Router()

export default router
  .get("/test", (req: Request, res: Response) => {
  res.status(200).send("API funfou")
  })
  .post("/movie", movieCreateValidation(), validate, createMovie)
  .get("/movie/:id", findMovieById)
