export default {
  name: "reason",
  title: "Razón",
  type: "object",
  fields: [
    {
      name: "icon",
      title: "Ícono",
      type: "image",
    },
    {
      name: "text",
      title: "Texto",
      type: "text",
    },
  ],
  preview: {
    select: {
      title: "text",
      media: "icon",
    },
    prepare(selection) {
      const { 
        media,
         title } = selection;
      return {
        title: `${title}`,
        media,
      };
    },
  },
}