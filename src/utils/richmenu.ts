import { RichMenu } from "@line/bot-sdk";
import { client } from "../bot";
import fs from "fs";

const richmenu: RichMenu = {
  size: {
    width: 2500,
    height: 843,
  },
  selected: true,
  name: "richmenu",
  chatBarText: "メニュー",
  areas: [
    {
      bounds: {
        x: 0,
        y: 0,
        width: 625,
        height: 843,
      },
      action: {
        type: "message",
        text: "課題一覧",
      },
    },
    {
      bounds: {
        x: 625,
        y: 0,
        width: 625,
        height: 843,
      },
      action: {
        type: "message",
        text: "カレンダー登録",
      },
    },
    {
      bounds: {
        x: 1250,
        y: 0,
        width: 625,
        height: 843,
      },
      action: {
        type: "uri",
        label: "LMS",
        uri: "https://elms.u-aizu.ac.jp/",
      },
    },
    {
      bounds: {
        x: 1875,
        y: 0,
        width: 625,
        height: 843,
      },
      action: {
        type: "message",
        text: "通知設定",
      },
    },
  ],
};

const fileStream = fs.createReadStream("assets/richmenu.png");
client.createRichMenu(richmenu).then((richMenuId) => {
  client.setRichMenuImage(richMenuId, fileStream).then(() => {
    client.setDefaultRichMenu(richMenuId);
  });
});
