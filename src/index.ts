import dotenv from "dotenv";
import express from "express";
import server from "./server";
dotenv.config();

const app = express();
app.use(server);

app.use(
  (
    error: any,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    const us = {
      _id: "",
      email: "",
    };
    res.json({ message: error.message });
  }
);
const PORT = process.env.PORT || 3500;
app.listen(PORT, () => {
  console.info(`app started`);
});
