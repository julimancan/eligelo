// import image from "../objects/image";
import { AiFillCar } from "react-icons/ai";
import imageArrayNoAlt from "../objects/imageArrayNoAlt";

export default {
  name: "car",
  title: "Carros",
  type: "document",
  icon: AiFillCar,
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
      name: "plate",
      title: "Placa",
      type: "string",
    },
    {
      name: "transmission",
      title: "Transmisión",
      type: "string",
      options: {
        list: [
          { title: "Mecánico", value: "manual" },
          { title: "Automático", value: "automatic" },
        ],
      },
    },
    {
      name: "traction",
      title: "Tracción",
      type: "string",
    },
    {
      name: "steering",
      title: "Dirección",
      type: "string",
    },
    {
      name: "type",
      title: "Tipo de Vehículo",
      type: "string",
      options: {
        list: [
          { title: "Sedán", value: "sedan" },
          { title: "Camioneta", value: "camioneta" },
          { title: "Jeep", value: "jeep" },
          { title: "Hatchback", value: "hatchback" },
        ],
      },
    },
    {
      name: "fuelType",
      title: "Combustible",
      type: "string",
      options: {
        list: [
          { title: "Diesel", value: "diesel" },
          { title: "Eléctrico", value: "electrico" },
          { title: "Híbrido", value: "hibrido" },
          { title: "Gasolina", value: "gasolina" },
          { title: "Gas Natural", value: "gasNatural" },
        ],
      },
    },
    {
      name: "absBreaks",
      title: "Frenos ABS",
      type: "boolean",
    },
    {
      name: "motor",
      title: "Motor",
      type: "string",
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      initialValue: ["carro", "automovil"],
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
