import express from "express";
const server = express();
import cors from "cors";

import routers from "../routers";

const PORT = process.env.PORT || 3500;
let server_path = process.env.SERVER_PATH || "http://localhost";

server.use(express.json());

const corsOptions = {
  origin: server_path,
  optionsSuccessStatus: 200, // for some legacy browsers
};

server.use(express.urlencoded());
server.use("/api/v1", routers);

if (server_path === "http://localhost") {
  server_path = `${server_path}:${PORT}`;
}

server.use(cors(corsOptions));

export default server;
