import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import itemRoutes from "./routes/items.js";
const app = express();
const port = process.env.PORT || 8000;

// routes
app.use("/items", itemRoutes);

app.use(cors());
app.use(express.json());
dotenv.config();
const CONNECTION_URI = process.env.ATLAS_URI;

mongoose
  .connect(CONNECTION_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(port, () => {
      console.log(`Server started on port ${port}`);
    })
  )
  .catch((err) => console.log(`Error: ${err.message}`));

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});
