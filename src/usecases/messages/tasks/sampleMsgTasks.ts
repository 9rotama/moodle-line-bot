const sampleMsgtasks = {
  type: "bubble",
  size: "giga",
  header: {
    type: "box",
    layout: "vertical",
    contents: [
      {
        type: "text",
        text: "課題",
        size: "20px",
        weight: "bold",
      },
    ],
  },
  body: {
    type: "box",
    layout: "vertical",
    contents: [
      {
        type: "box",
        layout: "horizontal",
        contents: [
          {
            type: "box",
            layout: "vertical",
            contents: [
              {
                type: "text",
                text: "Vocabulary test 111111111",
              },
              {
                type: "text",
                text: "IT03_23114175",
                size: "12px",
              },
              {
                type: "text",
                text: "6/20 10:00まで",
                size: "14px",
                weight: "bold",
              },
            ],
            width: "210px",
          },
          {
            type: "button",
            action: {
              type: "postback",
              label: "完了",
              data: "12398@u-aizu.ac.jp",
            },
            color: "#0366fc",
            style: "primary",
            gravity: "center",
          },
        ],
        spacing: "10px",
      },
      {
        type: "separator",
      },
      {
        type: "box",
        layout: "horizontal",
        contents: [
          {
            type: "box",
            layout: "vertical",
            contents: [
              {
                type: "text",
                text: "Vocabulary test 111111111",
              },
              {
                type: "text",
                text: "IT03_23114175",
                size: "12px",
              },
              {
                type: "text",
                text: "6/20 10:00まで",
                size: "14px",
                weight: "bold",
              },
            ],
            width: "210px",
          },
          {
            type: "button",
            action: {
              type: "postback",
              label: "完了",
              data: "a",
            },
            color: "#0366fc",
            style: "primary",
            gravity: "center",
          },
        ],
        spacing: "10px",
      },
    ],
    spacing: "10px",
  },
};
