import express from "express";
const server = express();

import routers from "../routers";
server.use("/api/v1", routers);

export default server;
