import { sanityClient } from "../../sanity.server";
import { imageObject } from "../objects";



const quienesSomosItems = `
SEO,  
hero,
"reasonsToSell": reasonsToSell {
  title,
  "reasons": reasons [] {
    "icon": icon.asset->url,
    text
  }
},
"reasonsToBuy": reasonsTobuy {
  title,
  subtitle,
  "reasons": reasons [] {
    "icon": icon.asset->url,
    text,
  }
},
"ourServices": OurServices {
  title,
  "services": name[] {
    "image": ${imageObject},
    text
  }
},
`;

export const getQuienesSomosContent = async () => {
  const results = await sanityClient(false).fetch(`*[_type == "quienesSomos"] {
    ${quienesSomosItems}
  }`)
  return results[0]
}