import mongoose from "mongoose";

export const connectDatabase = () => {
  try {
    let DB_URI;

    if (process.env.NODE_ENV === "DEVELOPMENT") DB_URI = process.env.DB_LOCAL_URI;
    if (process.env.NODE_ENV === "PRODUCTION")  DB_URI = process.env.DB_LOCAL_URI;

    mongoose.connect(DB_URI).then((con) => {
      console.log(`MongoDb id connected with HOST: ${con.connection.host} `);
    });
  } catch (error) {
    console.log("Failed to connect mongoDb database", error);
    process.exit();
  }
};
