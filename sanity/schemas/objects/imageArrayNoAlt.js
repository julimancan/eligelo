export default {
  name: "images",
  title: "Imágenes",
  type: "array",
  of: [
    {
      name: "imageObject",
      title: "imagen",
      type: "object",
      fields: [
        {
          name: 'image',
          title: 'imagen',
          type: 'image',
        },
      ],
      preview: {
        select: {
          media: "image",
        },
        prepare(selection) {
          const { title = "Foto", media } = selection
          return {
            title,
            media,
          }
        },
      },
    },
  ],
}