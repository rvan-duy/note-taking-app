import dotenv from "dotenv";
import express from "express";

import connectDB from "./config/db.js";
import notesRoutes from "./routes/notesRoutes.js";
import { rateLimiter } from "./middleware/rateLimiter.js";

dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(rateLimiter);
app.use("/api/notes", notesRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
