import {Request, Response} from "express"
import { MovieModel } from "../models/movie"
import Logger from "../../config/logger"

export async function createMovie(req: Request, res: Response) {
  try {
    const data = req.body
    const movie = await MovieModel.create(data)

    return res.status(201).json(movie)
  } catch(err: any) {
    Logger.error(err.message)
  }
}

export async function findMovieById(req: Request, res: Response) {
  try {
    const id = req.params.id
    const movie = await MovieModel.findById(id)

    if (!movie) {
      return res.status(404).json({ error: "O filme não existe"})
    }

    return res.status(200).json(movie)
  } catch (err: any) {
    Logger.error(err.message)
  }
}
