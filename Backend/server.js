import dotenv from 'dotenv';
import { app } from './app.js';
import connectDB from './config/db.js';
import connectCloudinary from './config/cloudinary.js';

dotenv.config();

const startServer = async () => {
  try {
    await connectDB();
    console.log("✅ MongoDB Connected");

    await connectCloudinary();
    console.log("✅ Cloudinary Connected");

  } catch (error) {
    console.error("❌ Error starting the server:", error);
    process.exit(1);
  }
};

// Start the server
startServer();

// Export for Vercel
export default app;
