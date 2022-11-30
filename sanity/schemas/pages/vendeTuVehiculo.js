import {GiCarKey} from "react-icons/gi"
import seo from "../objects/seo"
import image from "../objects/image"

export default {
  name: 'vendeTuVehiculo',
  title: 'Vende tu vehiculo',
  type: 'document',
  icon: GiCarKey,
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
      name: 'contact',
      title: 'Sección Contacto',
      type: 'object',
      group: "contenido",

      fields: [
        image,
        {
          name: 'title',
          title: 'Título',
          type: 'string',
        },
        {
          name: 'subtitle',
          title: 'Subtítulo',
          type: 'text',
        },
      ],
    },
    {
      name: 'paymentOptions',
      title: 'Realiza el pago',
      type: 'object',
      group: "contenido",
      fields: [
        image,
        {
          name: 'title',
          title: 'Título',
          type: 'string',
        },
        {
          name: 'subtitle',
          title: 'Subtítulo',
          type: 'text',
        },
        {
          name: 'options',
          title: 'Formas',
          type: 'array',
          of: [
            {
              name: 'paymentOption',
              title: 'Forma de Pago',
              type: 'object',
              fields: [
                {
                  name: 'name',
                  title: 'Nombre',
                  type: 'string',
                },
                {
                  name: 'icon',
                  title: 'Ícono',
                  type: 'image',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'appointments',
      title: 'Agenda tu Cita',
      type: 'object',
      group: "contenido",
      fields: [
        image,
        {
          name: 'title',
          title: 'Título',
          type: 'string',
        },
        {
          name: 'subtitle',
          title: 'Subtítulo',
          type: 'text',
        },
        
      ],
    },
    {
      name: 'mechanic',
      title: 'Recibe al Mecánico',
      type: 'object',
      group: "contenido",
      fields: [
        image,
        {
          name: 'title',
          title: 'Título',
          type: 'string',
        },
        {
          name: 'subtitle',
          title: 'Subtítulo',
          type: 'text',
        },
        {
          name: 'recommendations',
          title: 'Recomendaciones',
          type: 'array',
          of: [{ type: 'string' }],
        },
      ],
    },
    {
      name: 'rest',
      title: 'A Descansar',
      type: 'object',
      group: "contenido",
      fields: [
        image,
        {
          name: 'title',
          title: 'Título',
          type: 'string',
        },
        {
          name: 'subtitle',
          title: 'Subtítulo',
          type: 'text',
        },
      ],
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
}