import mongoose from "mongoose";

const connection: { isConnected?: number } ={}

const connectDB = async () => {
  if (connection.isConnected) {
    console.log("Database is connected")
    return
  }

  if (!process.env.DATABASE_URL) {
    console.log("Error: Invalid/Missing environment variable DATABASE_URL")
    return
  }

  try {
    const db = await mongoose.connect(process.env.DATABASE_URL)
    connection.isConnected = db.connections[0].readyState

    if (connection.isConnected === 1) {
      console.log("Successfully connected to database")
    } else {
      console.log("Failed to connect to database")
    }
  } catch (error) {
    console.log("Failed to connect to MongoDB:", (error as Error).message)
  }
}

export default connectDB