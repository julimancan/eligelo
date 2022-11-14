import imageArrayNoAlt from "../objects/imageArrayNoAlt";
import { FaMotorcycle } from "react-icons/fa";

export default {
  name: "moto",
  title: "Motos",
  type: "document",
  icon: FaMotorcycle,
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
    {
      name: "mileage",
      title: "Kilometraje",
      type: "number",
    },
    {
      name: "motor",
      title: "Motor",
      type: "string",
    },
    {
      name: "fuelType",
      title: "Combustible",
      type: "string",
      options: {
        list: [
          { title: "Eléctrico", value: "electrico" },
          { title: "Híbrido", value: "hibrido" },
          { title: "Gasolina", value: "gasolina" },
        ],
      },
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      initialValue: ["motocicleta"],
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
