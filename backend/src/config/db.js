import mongoose from "mongoose";
export const connectDb = async () => {
  try {
    mongoose.connect(process.env.DATABASE_URL);
    console.log("Db connected");
  } catch (error) {
    console.log(`DB ERROR: ${error}`);
    process.exit(1);
  }
};
