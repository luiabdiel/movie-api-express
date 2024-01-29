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
    return res.status(500).json({error: "Tente novamente mais tarde!"})
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
    return res.status(500).json({error: "Tente novamente mais tarde!"})
  }
}

export async function getAllMovies(req: Request, res: Response) {
  try {
    const movies = await MovieModel.find()

    return res.status(200).json(movies)
  } catch (err: any) {
    Logger.error(err.message)
    return res.status(500).json({error: "Tente novamente mais tarde!"})
  }
}

export async function deleteMovieById(req: Request, res: Response) {
  try {
    const id = req.params.id
    const movie = await MovieModel.findById(id)

    if (!movie) {
      return res.status(404).json({ error: "O filme não existe!" })
    }

    await movie.deleteOne()

    return res.status(200).json({ message: "O filme foi deletado com sucesso!" })
  } catch (err: any) {
    Logger.error(err.message)
    return res.status(500).json({ error: "Tente novamente mais tarde!" })
  }
}

export async function updateMovie(req: Request, res: Response) {
  try {
    const id = req.params.id
    const data = req.body
    const movie = await MovieModel.findById(id)

    if (!movie) {
      return res.status(404).json({ error: "O filme não existe!"})
    }

    await MovieModel.updateOne({ _id: id}, data)

    return res.status(200).json(data)
  } catch (err: any) {
    Logger.error(err.message)
    return res.status(500).json({ error: "Tente novamente mais tarde!"})
  }
}
