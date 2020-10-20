export const basicWidgets = [
  {
    type: "input",
    name: "单行文本",
    options: {
      defaultValue: "",
      placeholder: "",
      tips: ""
    },
  },
  {
    type: "checkbox",
    name: "复选框",
    options: {
      defaultValue: [],
      options: [
        {
          label: "options1",
          value: 1,
        },
        {
          label: "options2",
          value: 2,
        },
        {
          label: "options3",
          value: 3,
        },
      ],
    },
  },
];
