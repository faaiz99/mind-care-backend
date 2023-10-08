import mongoose from 'mongoose';

const MONGO_URI: string  = process.env.MONGO_URI ?? "NO-DBI-URI"
if (process.env.NODE_ENV === 'production') {
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