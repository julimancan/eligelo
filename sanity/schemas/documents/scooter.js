import imageArrayNoAlt from "../objects/imageArrayNoAlt";
import { GiKickScooter } from "react-icons/gi";

export default {
  name: "scooter",
  title: "Patinetas",
  type: "document",
  icon: GiKickScooter,
  fields: [
    {
      name: "brand",
      title: "Marca",
      type: "reference",
      to: [{ type: "brand" }],
    },
    {
      name: "model",
      title: "Modelo",
      type: "reference",
      to: [{ type: "model" }],
    },
    imageArrayNoAlt,
    {
      name: "price",
      title: "Precio",
      type: "number",
    },
    // {
    //   name: "mileage",
    //   title: "Kilometraje",
    //   type: "number",
    // },
    {
      name: "fuelType",
      title: "Combustible",
      type: "string",
      options: {
        list: [
          { title: "Eléctrico", value: "electrico" },
          { title: "Híbrido", value: "hibrido" },
          { title: "Humano", value: "humano" },
        ],
      },
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      initialValue: ["patineta", "e-scooter", "escooter"],
      of: [{ type: 'string' }],
    },
  ],
  preview: {
    select: {
      title: "brand.name",
      subtitle: "model.name",
      media: "images.0.image",
    },
    prepare({ title, subtitle, media }) {
      return {
        title,
        media,
        subtitle,
      };
    },
  },
};
