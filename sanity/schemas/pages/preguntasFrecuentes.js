import seo from "../objects/seo";

export default {
  name: 'preguntasFrecuentes',
  title: 'Preguntas frecuentes',
  type: 'document',
  groups: [
    { title: "SEO", name: "SEO" },
    { title: "Contenido", name: "contenido", default: true },
  ],
  fields: [
    seo,
    {
      name: 'preguntas',
      title: 'Preguntas',
      type: 'array',
      of: [
        {
          name: 'pregunta',
          title: 'Pregunta',
          type: 'object',
          fields: [
            {
              name: 'titulo',
              title: 'Título',
              type: 'string',
            },
            {
              name: 'respuesta',
              title: 'Respuesta',
              type: 'text',
            },
          ],
        },
      ],
    },
  ],
}