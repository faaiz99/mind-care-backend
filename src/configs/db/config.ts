import mongoose from 'mongoose';

const MONGO_URI:string|undefined = process.env.MONGO_URI ?? "mongodb://127.0.0.1:27017/mind-care"
if (process.env.NODE_ENV === 'development') {
  console.log('DB URI: ', MONGO_URI)
}
export const connect = async () => {
  // Connecting to the database
  try {
    //console.log(MONGO_URI)
    await mongoose.connect(MONGO_URI)

  } catch (error) {
    console.log("database connection failed. exiting now...");
    console.error(error);
    process.exit(1);
  }

};

export const disconnect = async () => {
  await mongoose.connection.close()
}