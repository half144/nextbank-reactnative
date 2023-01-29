import express, { json } from "express";
import userRoutes from "./routes/user/index.js";
import pixRoutes from "./routes/pix/index.js";
import cardRoutes from "./routes/cards/index.js";
import connectMongoDb from "./utils/mongodb.js";
import dotenv from "dotenv";
import errorMiddleware from "./middlewares/errorMiddleware.js";

const app = express();
const port = 3000;
dotenv.config();

app.use(json());

app.use("/api/user", userRoutes);
app.use("/api/card", cardRoutes);
app.use("/api/pix", pixRoutes);
app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`server running port ${port}`);
  connectMongoDb();
});
