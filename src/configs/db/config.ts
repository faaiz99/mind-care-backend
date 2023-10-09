import mongoose from 'mongoose';
if (process.env.NODE_ENV === 'development') {
  console.log()
}
export const connect = async (DBString:string | undefined) => {
  // Connecting to the database
  try {
    //console.log(MONGO_URI)
    await mongoose.connect(DBString as string)

  } catch (error) {
    console.log("database connection failed. exiting now...");
    console.error(error);
    process.exit(1);
  }

};

export const disconnect = async () => {
  await mongoose.connection.close()
}