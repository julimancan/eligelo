import { sanityClient } from "../../sanity.server";
import { brandRef, modelRef } from "./resultados";

export const getAllVehicleSlugs = async () => {
  const result = await sanityClient(false).fetch(
    `*[_type == "car" || _type == "moto" || _type == "bici"] {"slug": slug.current}`
  );

  return result;
};

export const getAllVehiclePathsAndNames = async () => {
  const result = await sanityClient(false)
    .fetch(`*[_type == "car" || _type == "moto" || _type == "bici"] {
    "slug": slug.current,
    ${brandRef},
    ${modelRef},

  }`);
  return result;
};

const carTypeInfo = `*[_type == "car" && slug.current == $slug] {
  _type,
  _id,
  "slug": slug.current,
  ${brandRef},
  ${modelRef},
  absBreaks,
  fuelType,
  mileage,
  motor,
  plate,
  price,
  steering,
  tags,
  type,
  year,
  "images": images[] {
    alt, 
    "url": image.asset->url, 
    "height": image.asset -> metadata.dimensions.height,
    "width": image.asset -> metadata.dimensions.width,
    "aspectRatio": image.asset -> metadata.dimensions.aspectRatio
  },
  traction,
  transmission
}`;
const motoTypeInfo = `*[_type == "moto" && slug.current == $slug] {
  _type,
  _id,
  "slug": slug.current,
  ${brandRef},
  ${modelRef},
  "images": images[] {
    alt, 
    "url": image.asset->url, 
    "height": image.asset -> metadata.dimensions.height,
    "width": image.asset -> metadata.dimensions.width,
    "aspectRatio": image.asset -> metadata.dimensions.aspectRatio
  },
  price,
  mileage,
  motor,
  fuelType,
  tags,
}`;

const bikeTypeInfo = `*[_type == "bici" && slug.current == $slug] {
  _type,
  _id,
  ${brandRef},
  ${modelRef},
  "images": images[] {
    alt, 
    "url": image.asset->url, 
    "height": image.asset -> metadata.dimensions.height,
    "width": image.asset -> metadata.dimensions.width,
    "aspectRatio": image.asset -> metadata.dimensions.aspectRatio
  },
  price,
  year,
  mileage,
  fuelType,
  tags,
  "slug": slug.current
}`;
const individualVehicleInfo = `${carTypeInfo}`;
export const getVehicleInfo = async (slug) => {
  const result = await sanityClient(false).fetch(individualVehicleInfo, {
    slug,
  });
  const resultMoto = await sanityClient(false).fetch(motoTypeInfo, { slug });
  const resultBike = await sanityClient(false).fetch(bikeTypeInfo, { slug });
  return result[0] ? result[0] : resultMoto[0] ? resultMoto[0] : resultBike[0];
};

const vehiclesAroundPriceQuery = `
  *[_type == $type && _id != $id && price > $minPrice && price < $maxPrice ] {
    ${brandRef},
    ${modelRef},
    year, 
    price,
    mileage,
    "image": images[0].image.asset->url,
    "slug": slug.current,
    _id
  }
`;

export const getVehiclesAroundPrice = async (price, type, id) => {
  const average = 20000000;
  const maxPrice = price + average;
  const minPrice = price - average;

  const result = await sanityClient(false).fetch(vehiclesAroundPriceQuery, {
    maxPrice,
    minPrice,
    type,
    id
  });

  return result;
};
