// import mongoose from "mongoose";

// const dbConnect = async () => {
//   if (mongoose.connection.readyState >= 1) return;

//   try {
//     await mongoose.connect(process.env.MONGODB_URI as string);
//     console.log("MongoDB connected");
//   } catch (error) {
//     console.error("MongoDB connection error:", error);
//   }
// };

// export default dbConnect;

import mongoose from "mongoose";

let isConnected = false; // Track connection state

const dbConnect = async () => {
  if (isConnected) {
    console.log("Using existing MongoDB connection");
    return;
  }

  if (mongoose.connection.readyState > 0) {
    isConnected = true;
    console.log("MongoDB connection already established");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI as string);
    isConnected = true;
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw new Error("Database connection failed");
  }
};

export default dbConnect;
