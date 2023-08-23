import mongoose from 'mongoose';
import dotenv from 'dotenv'

const MONGO_URI : string | undefined = dotenv?.config()?.parsed?.MONGO_URI ?? ''
console.log('DB URI: ',MONGO_URI)
export const connect = () => {
  // Connecting to the database
  mongoose
    .connect(MONGO_URI)
    .then(() => {
      console.log("Successfully connected to database");
    })
    .catch((error) => {
      console.log("database connection failed. exiting now...");
      console.error(error);
      process.exit(1);
    });
};


