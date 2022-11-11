import seo from "../objects/seo";
import { BsFillPeopleFill } from "react-icons/bs";
import reason from "../objects/reason";
import image from "../objects/image";
export default {
  name: "quienesSomos",
  title: "Quienes somos",
  type: "document",
  icon: BsFillPeopleFill,
  groups: [
    { title: "SEO", name: "SEO" },
    { title: "Contenido", name: "contenido", default: true },
  ],
  fields: [
    seo,

    {
      name: "hero",
      title: "Encabezado",
      type: "object",
      group: "contenido",
      fields: [
        {
          title: "Título",
          name: "title",
          type: "string",
        },
        {
          title: "Texto",
          name: "text",
          type: "text",
        },
      ],
    },
    {
      name: "reasonsToSell",
      title: "Razones para vender",
      type: "object",
      group: "contenido",
      fields: [
        {
          title: "Título",
          name: "title",
          type: "string",
        },
        {
          name: "reasons",
          title: "Razones",
          type: "array",
          of: [reason],
        },
      ],
    },
    {
      name: "reasonsTobuy",
      title: "Razones para comprar",
      type: "object",
      group: "contenido",
      fields: [
        {
          title: "Título",
          name: "title",
          type: "string",
        },
        {
          title: "Subtítulo",
          name: "subtitle",
          type: "text",
        },
        {
          name: "reasons",
          title: "Razones",
          type: "array",
          of: [reason],
        },
      ],
    },
    {
      name: "OurServices",
      title: "Nuestros Servicios",
      type: "object",
      group: "contenido",
      fields: [
        {
          name: "title",
          title: "Título",
          type: "string",
        },
        {
          name: "name",
          title: "name",
          type: "array",
          of: [
            {
              name: "service",
              title: "Servicio",
              type: "object",
              fields: [
                image,
                {
                  name: "text",
                  title: "Texto",
                  type: "string",
                },
              ],
              preview: {
                select: {
                  title: "text",
                  media: "imageObject.image"
                },
              prepare({title, media}) {
                return {
                  title,
                  media
                }
              }
              }
            },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "hero.title",
    },
  },
  prepare({ title }) {
    return {
      title,
    };
  },
};
