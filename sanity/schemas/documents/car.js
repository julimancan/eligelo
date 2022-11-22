// import image from "../objects/image";
import { AiFillCar } from "react-icons/ai";
import { sanityClient } from "../../sanity.server";
import imageArrayNoAlt from "../objects/imageArrayNoAlt";

function myAsyncSlugifier(input, type) {
  // const slug = slugify(input)
  // const slug = "something"
  console.log({type, input})
  const query = `*[_type=="car" && _id == $_id]{
    _id, 
    "brand": brand -> {name},
    "model": model -> {name}
  }`
  const params = {_id: input}
  return sanityClient(false).fetch(query, params).then(res => {
    console.log('Movies with identical slug', res)
    return `${slug}`
  })
}


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
    {
      name: "year",
      title: "Año",
      type: "number",
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
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: doc => {
          if (doc._id.includes("drafts")) return `${doc._id.split("drafts")[1].split(".")}`
          return `${doc._id}`},
      }
    }
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
