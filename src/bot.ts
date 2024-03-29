import { ClientConfig, Client, WebhookEvent } from "@line/bot-sdk";
import { Request, Response } from "express";
import dotenv from "dotenv";

import { messageUsecase } from "./usecases/messages";
import { verifyLineSignature } from "./utils/verify";
import { followUsecase } from "./usecases/follow";
import { postbackUsecase } from "./usecases/postback";

dotenv.config();

const clientConfig: ClientConfig = {
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN || "",
  channelSecret: process.env.CHANNEL_SECRET,
};
export const client = new Client(clientConfig);

export const index = (req: Request, res: Response) => {
  if (verifyLineSignature(req, process.env.CHANNEL_SECRET!)) {
    const events = req.body.events;
    console.log(events);

    events.forEach(async (event: WebhookEvent) => {
      switch (event.type) {
        case "message": {
          await messageUsecase(event);
          break;
        }
        case "follow": {
          await followUsecase(event);
          break;
        }
        case "postback": {
          await postbackUsecase(event);
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
