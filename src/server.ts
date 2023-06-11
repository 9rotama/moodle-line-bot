import { middleware, MiddlewareConfig } from "@line/bot-sdk";
import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";

import { index } from "./bot";

dotenv.config();

const middlewareConfig: MiddlewareConfig = {
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
  channelSecret: process.env.CHANNEL_SECRET || "",
};

const PORT = process.env.PORT || 3000;

const app: Application = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Deploy succeeded");
});

app.post("/webhook", middleware(middlewareConfig), index);

app.listen(PORT);
console.log("server running");
