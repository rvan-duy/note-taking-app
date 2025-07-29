import dotenv from "dotenv";
import express from "express";

import connectDB from "./config/db.js";
import notesRoutes from "./routes/notesRoutes.js";

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();

connectDB();

app.use(express.json());

app.use("/api/notes", notesRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

