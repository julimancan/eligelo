import { sanityClient } from "../../sanity.server";



const quienesSomosItems = `
SEO,  
hero,
reasonsToSell,
"reasonsToBuy": reasonsTobuy,
"ourServices": OurServices
`;

export const getQuienesSomosContent = async () => {
  const results = await sanityClient(false).fetch(`*[_type == "quienesSomos"] {
    ${quienesSomosItems}
  }`)
  return results[0]
}