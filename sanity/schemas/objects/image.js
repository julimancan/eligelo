export default {
  name: "imageObject",
  title: "Image",
  type: "object",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "image",
    },
    {
      name: "alt",
      title: "Texto Alternativo",
      description: "Para personas con dificultades para ver.",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
  ]
}