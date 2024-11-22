import mongoose from "mongoose";

const connection = async () => {
  const URL = `mongodb://127.0.0.1:27017/userdb`; // Specify your database name
  try {
    await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Error while connecting with the database:", error.message);
  }
};

export default connection;

