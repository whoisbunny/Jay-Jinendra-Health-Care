import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/connectDB.js";
import morgan from "morgan";
import clientRouter from "./routes/client.routes.js";
import authRouter from "./routes/auth.routes.js";
import generalRouter from "./routes/general.routes.js";
// import path from "path";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors({ origin: "*" }));

app.use(morgan("dev"));
// app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

// Middleware to parse JSON
app.use(express.json());
app.use("/api/clients", clientRouter);
app.use("/api/auth", authRouter);
app.use("/api/general", generalRouter);
// Basic route
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

const start = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(
        `Server is running on port ${PORT} and http://localhost:${PORT}`
      );
    });
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

start();
