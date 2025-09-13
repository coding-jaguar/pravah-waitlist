import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
let isConnected = false;

export async function connectDB() {
    if (isConnected) return;

    const uri = process.env.MONGODB_URI;

    if (!uri) throw new Error("MONGODB_URI not set in env");

    await mongoose.connect(uri);
    isConnected = true;
    console.log("✅ MongoDB connected");
}
