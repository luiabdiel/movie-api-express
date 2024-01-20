import config from "config"

export const PORT = config.get<number>("port")
