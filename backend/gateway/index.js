import express, { application } from "express";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT || 8000;

const app = express();

app.get("/", (req, res) => {
  res.send("Gateway is running");
  res.json({ message: "Gateway is executing" });
});

app.listen(port, () => {
  console.log(`Gateway is running on port ${port}`);
});