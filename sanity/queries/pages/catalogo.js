import { sanityClient } from "../../sanity.server"

const catalogoItem = `
"brand": brand -> {
  name
},
"model": model -> {
  name
},
year,
price,
mileage,
"image": images[0] {
  "image": image.asset->url
}
`
const catalogoItems = `
  SEO,
  "cars":  featuredCars[] -> {
    ${catalogoItem}
  },
  "motos":  featuredMotos[] -> {
    ${catalogoItem}
  },
  "bikes":  featuredBikes[] -> {
    ${catalogoItem}
  },
  "scooters":  featuredScooters[] -> {
    ${catalogoItem}
  },
  "slogan": *[_type == "siteSettings"] {
    slogan
  }[0]
`;
export const getCatalogoContent = async () => {
  const results = await sanityClient(false).fetch(`*[_type == "featuredAds"] {
    ${catalogoItems}
  }`)
  return results[0]
}