import seo from "../schemas/objects/seo";
import { CogIcon } from "@sanity/icons";

export default {
  title: "Configuración",
  name: "siteSettings",
  type: "document",
  icon: CogIcon,

  groups: [
    { title: "SEO", name: "SEO" },
    { title: "Contacto", name: "compInfo" },
  ],
  fields: [
    seo,
    {
      name: "slogan",
      title: "Slogan",
      type: "string",
      group: "compInfo",
    },
    {
      name: "email",
      title: "Email",
      type: "string",
      group: "compInfo",
    },
    {
      name: "direccion",
      title: "Dirección",
      type: "text",
      group: "compInfo",
    },
    {
      name: "celular",
      title: "Número de Celular",
      type: "string",
      group: "compInfo",
    },
    {
      name: "linksTitle",
      title: "Título para los links",
      type: "string",
      group: "compInfo",
    },
    {
      name: "instagram",
      title: "Instagram",
      type: "string",
      group: "compInfo",
    },

    {
      name: "facebook",
      title: "Facebook",
      type: "string",
      group: "compInfo",
    },
    {
      name: "twitter",
      title: "Twitter",
      type: "string",
      group: "compInfo",
    },
    {
      name: "youtube",
      title: "Youtube",
      type: "string",
      group: "compInfo",
    },
    {
      name: 'horario',
      title: 'horario',
      type: 'string',
    },
  ],
  preview: {
    prepare() {
      return {
        title: "Configuración",
      };
    },
  },
};
