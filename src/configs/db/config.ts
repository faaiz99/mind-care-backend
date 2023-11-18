import mongoose from "mongoose";
export const connect = async (DBString: string | undefined) => {
  // Connecting to the database
  try {
    if (mongoose.connection.readyState === 0) {
      // 0 = disconnected
      console.log(DBString);
      await mongoose.connect(DBString as string);
    }
  } catch (error) {
    console.log("database connection failed. exiting now...");
    console.error(error);
    process.exit(1);
  }
};

export const disconnect = async () => {
  await mongoose.connection.close();
};
