import { sanityClient } from "../../sanity.server";
import { imageObject } from "../objects";



const vendeItems = `
  SEO,  
  hero,
  "contact": contact {
    title,
    subtitle,
    "image": ${imageObject},
  },
  "paymentOptions": paymentOptions {
    title,
    subtitle,
    "options": options [] {
      name,
      "icon": icon.asset->url
    }
  },
  "appointments": appointments {
    title,
    subtitle,
    "image": ${imageObject},
  },
  "mechanic": mechanic {
    title,
    subtitle,
    "image": ${imageObject},
    recommendations
  },
  "rest": rest {
    title,
    subtitle,
    "image": ${imageObject},
  }
`;

export const getVendeContent = async () => {
  const results = await sanityClient(false).fetch(`*[_type == "vendeTuVehiculo"] {
    ${vendeItems}
  }`)
  return results[0]
}