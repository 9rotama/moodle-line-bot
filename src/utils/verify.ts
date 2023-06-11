import { createHmac } from "crypto";
import { Request } from "express";

export const verifyLineSignature = (
  req: Request,
  channelSecret: string
): boolean => {
  const signature = req.headers["x-line-signature"] as string;
  const bodyStr = JSON.stringify(req.body);

  const hmac = createHmac("sha256", channelSecret);
  hmac.update(bodyStr, "utf8");
  const calculatedSignature = hmac.digest("base64");

  return signature === calculatedSignature;
};
