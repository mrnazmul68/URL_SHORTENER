import express, { urlencoded } from "express";
import { connectDb } from "./src/config/db.js";
import { router } from "./src/routes/url.routes.js";
import cors from "cors";
import { errorMiddleware } from "./src/middleware/error.middleware.js";
const app = express();

app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  }),
);

app.use("/", router);

app.use(errorMiddleware);

await connectDb();
app.listen(process.env.PORT, () => {
  console.log("Server is running");
});
