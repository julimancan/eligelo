
import { ImHome } from "react-icons/im";
import seo from "../objects/seo";

export default {
  name: "homepage",
  title: "Casa",
  type: "document",
  icon: ImHome,
  groups: [
    { title: "SEO", name: "SEO" },
    { title: "Contenido", name: "contenido", default: true },
  ],
  fields: [
    seo,

    {
      name: 'hero',
      title: 'Encabezado',
      type: 'object',
      group: "contenido",
      fields: [
        {
          name: 'blackText',
          title: 'En Negro',
          description: "Texto q sale en negro",
          type: 'string',
        },
        {
          name: 'blueText',
          title: 'En Azul',
          description: "Texto q sale en azul",
          type: 'string',
        },
      ],
    },
    {
      name: 'productsTitle',
      title: 'Título para los vehículos',
      type: 'string',
      group: "contenido"
    },


    {
      name: "pagetitle",
      title: "pagetitle",
      type: "string",
    },
  ],
};
