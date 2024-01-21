import mongoose from "mongoose";
import config from "config"

async function connect() {
  const dbUri = config.get<string>("dbUri")

  try{
    await mongoose.connect(dbUri)
  }catch(err) {
    console.log(`Error: ${err}`)
  }
}

export default connect
