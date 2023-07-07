import express from "express";
import dotenv from "dotenv";
import { connection } from "./config/db";
import { userRouter } from "./routes/userRoute";
import { BookRouter } from "./routes/bookRoute";
import logger from "./utils/logger";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(logger);
app.use("/api/user",userRouter)
app.use("/api/books",BookRouter)

app.listen(port, async () => {
  try {
    await connection;
    console.log("Connected to DB");

    console.log(`Listening on PORT ${port}`);
  } catch (error) {
    console.log(error)
  }
});
