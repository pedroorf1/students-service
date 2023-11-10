import express from "express";
const routers = express();

import userRouter from "./userRouter";
import authRouter from "./authRouter";
import homeRouter from "./homeRouter";
import perfilRouter from "./perfilRouter";
import instituition from "./instituitionRouter";

routers.use("/", userRouter);
routers.use("/", authRouter);
routers.use("/", homeRouter);
routers.use("/", perfilRouter);
routers.use("/", instituition);

export default routers;
