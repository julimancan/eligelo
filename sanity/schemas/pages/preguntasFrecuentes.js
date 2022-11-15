import seo from "../objects/seo";
import {FaQuestion} from "react-icons/fa"

export default {
  name: 'preguntasFrecuentes',
  title: 'Preguntas frecuentes',
  type: 'document',
  icon: FaQuestion,
  groups: [
    { title: "SEO", name: "SEO" },
    { title: "Contenido", name: "contenido", default: true },
  ],
  fields: [
    seo,
    {
      name: 'titulo',
      title: 'Título',
      type: 'string',
      group: "contenido"
    },
    {
      name: 'preguntas',
      title: 'Preguntas',
      type: 'array',
      group: "contenido",
      of: [
        {
          name: 'pregunta',
          title: 'Pregunta',
          type: 'object',
          icon: FaQuestion,
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