import mongoose from "mongoose";
import {DB_Name} from "../constants.js";

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MongoDB_URI}/${DB_Name}`, );
    console.log("Connected to MongoDB");

    console.log(`\n MongoDB connected !! DB HOST: ${mongoose.connection.host} \n`);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit the process with failure
    // throw error;

  }
}

export default connectDB;