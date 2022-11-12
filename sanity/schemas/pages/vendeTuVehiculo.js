import {GiCarKey} from "react-icons/gi"
import seo from "../objects/seo"

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
        {
          name: 'title',
          title: 'Título',
          type: 'string',
        },
        {
          name: 'subtitle',
          title: 'Subtítulo',
          type: 'string',
        },
      ],
    },
    {
      name: 'paymentOptions',
      title: 'Medios de Pago',
      type: 'object',
      group: "contenido",
      fields: [
        {
          name: 'title',
          title: 'Título',
          type: 'string',
        },
        {
          name: 'subtitle',
          title: 'Subtítulo',
          type: 'string',
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
      title: 'Citas',
      type: 'object',
      group: "contenido",
      fields: [
        {
          name: 'title',
          title: 'Título',
          type: 'string',
        },
        {
          name: 'subtitle',
          title: 'Subtítulo',
          type: 'string',
        },
        {
          name: 'apps',
          title: 'Citas',
          type: 'array',
          of: [
            {
              name: 'appointment',
              title: 'Cita',
              type: 'object',
              fields: [
                {
                  name: 'title',
                  title: 'Título',
                  type: 'string',
                },
                {
                  name: 'ammount',
                  title: 'Cifra',
                  type: 'number',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'photos',
      title: 'Sección de Fotos',
      type: 'object',
      group: "contenido",
      fields: [
        {
          name: 'title',
          title: 'Título',
          type: 'string',
        },
        {
          name: 'subtitle',
          title: 'Subtítulo',
          type: 'string',
        },
        {
          name: 'price',
          title: 'Precio',
          type: 'string',
        },
        {
          name: 'ammount',
          title: 'Cifra',
          type: 'number',
        },
      ],
    },
    {
      name: 'rest',
      title: 'Sección de Descanso',
      type: 'object',
      group: "contenido",
      fields: [
        {
          name: 'title',
          title: 'Título',
          type: 'string',
        },
        {
          name: 'subtitle',
          title: 'Subtítulo',
          type: 'string',
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