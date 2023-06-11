import { ClientConfig, Client, MessageEvent } from "@line/bot-sdk";
import { Request, Response } from "express";
import dotenv from "dotenv";

import { messageUsecase } from "./usecases/messages";
import { verifyLineSignature } from "./utils/verify";

dotenv.config();

const clientConfig: ClientConfig = {
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN || "",
  channelSecret: process.env.CHANNEL_SECRET,
};
export const client = new Client(clientConfig);

export const index = (req: Request, res: Response) => {
  let message;

  if (verifyLineSignature(req, process.env.CHANNEL_SECRET!)) {
    const events = req.body.events;

    events.forEach(async (event: MessageEvent) => {
      switch (event.type) {
        case "message": {
          message = await messageUsecase(event);
          break;
        }
        default:
          break;
      }
    });
  } else {
    console.log("signature verification error");
  }
  return res.status(200).json("ok");
};
