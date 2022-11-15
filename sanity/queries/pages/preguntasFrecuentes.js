import { sanityClient } from "../../sanity.server";

const faqItems = `
  SEO,
  titulo,
  "preguntas": preguntas[] {
      "pregunta": titulo,
      respuesta
  },
`;

export const getFaqContent = async () => {
  const results = await sanityClient(false)
    .fetch(`*[_type == "preguntasFrecuentes"] {
    ${faqItems}
  }`);
  return results[0];
};
