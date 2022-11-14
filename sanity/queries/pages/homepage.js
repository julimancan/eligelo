import { sanityClient } from "../../sanity.server"



const homepageItems = `
  SEO,
  hero,
  productsTitle
`;
export const getHomepageContent = async () => {
  const results = await sanityClient(false).fetch(`*[_type == "homepage"] {
    ${homepageItems}
  }`)

  return results[0]
}