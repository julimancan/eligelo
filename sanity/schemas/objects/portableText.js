export default {
  name: "content",
  title: "Content",
  type: "array",
  of: [
    {
      type: "block",
    },
    {
      type: "image",
      fields: [
        {
          title: "Position",
          name: "position",
          type: "string",
          options: {
            list: [
              { title: "Center", value: "center" },
              { title: "Left", value: "left" },
              { title: "Right", value: "right" },
            ],
            layout: "radio",
            isHighlighted: true,
          },
        },
        {
          type: "text",
          name: "alt",
          title: "Alternative text",
          validation: (Rule) => [Rule.required()],
          description: `Some of your visitors cannot see images, 
              be they blind, color-blind, low-sighted; 
              alternative text is of great help for those 
              people that can rely on it to have a good idea of 
              what\'s on your page.`,
          options: {
            isHighlighted: true,
          },
        },
      ],
      options: {
        hotspot: true,
      },
    },
  ],
};
