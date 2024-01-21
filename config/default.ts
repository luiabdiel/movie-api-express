const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD

export default {
  port: 3000,
  dbUri: `mongodb+srv://${DB_USER}:${DB_PASSWORD}@movie-api.pthlwnx.mongodb.net/?retryWrites=true&w=majority`,
  env: "development"
}
