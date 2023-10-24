import express from "express";
const server = express();
import bodyParser from "body-parser";
import cors from "cors";

import routers from "../routers";

server.use("/api/v1", routers);

const PORT = process.env.PORT || 3500;
let server_path = process.env.SERVER_PATH || "http://localhost";
if (server_path === "http://localhost") {
  server_path = `${server_path}:${PORT}`;
}

server.use(express.json({ limit: "10mb" }));
const corsOptions = {
  origin: server_path,
  optionsSuccessStatus: 200, // for some legacy browsers
};

server.use(cors(corsOptions));

server.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));
server.use(bodyParser.json({ limit: "10mb", type: "application/json" }));

export default server;
