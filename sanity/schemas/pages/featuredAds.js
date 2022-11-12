import { RiPagesLine } from "react-icons/ri";
import seo from "../objects/seo";

export default {
  name: "featuredAds",
  title: "Featured ads",
  type: "document",
  icon: RiPagesLine,
  groups: [
    { title: "SEO", name: "SEO" },
    { title: "Contenido", name: "contenido", default: true },
  ],
  fields: [
    seo,
    {
      name: "featuredCars",
      title: "Carros Destacados",
      type: "array",
      group: "contenido",
      of: [{ type: "reference", to: { type: "car" } }],
    },
    {
      name: "featuredMotos",
      title: "Motos Destacadas",
      type: "array",
      group: "contenido",
      of: [{ type: "reference", to: { type: "moto" } }],
    },
    {
      name: "featuredBikes",
      title: "Bicicletas Destacadas",
      type: "array",
      group: "contenido",
      of: [{ type: "reference", to: { type: "bici" } }],
    },
    {
      name: "featuredScooters",
      title: "Patinetas Destacadas",
      type: "array",
      group: "contenido",
      of: [{ type: "reference", to: { type: "scooter" } }],
    },
  ],
  preview: {
    select: {
      title: "SEO.title",
    },
    prepare({ title }) {
      return {
        title,
      };
    },
  },
};
