import { sanityClient } from "../../sanity.server";

const brandRef = `"brand": brand -> {name}`;
const modelRef = `"model": model -> {name}`;

const brandName = `brand._ref in *[_type=="brand" && name match $searchText]._id`

const carsByBrandName = `_type == "car" && ${brandName}`;
const motosByBrandName = `_type == "moto" && ${brandName}`;
const bikesByBrandName = `_type == "bici" && ${brandName}`;
const scootersByBrandName = `_type == "scooter" && ${brandName}`;

const modelName = `model._ref in *[_type=="model" && name match $searchText]._id`

const carsByModelName = `_type == "car" && ${modelName}`;
const motosByModelName = `_type == "moto" && ${modelName}`;
const bikesByModelName = `_type == "bici" && ${modelName}`;
const scootersByModelName = `_type == "scooter" && ${modelName}`;

const fuelType = `fuelType match $searchText`

const carsByFuelTypeName = `_type == "car" && ${fuelType}`;
const motosByFuelTypeName = `_type == "moto" && ${fuelType}`;
const bikesByFuelTypeName = `_type == "bici" && ${fuelType}`;
const scootersByFuelTypeName = `_type == "scooter" && ${fuelType}`;

const vehicleType = `type match $searchText`

const carsByVehicleType = `_type == "car" && ${vehicleType}`;
const motosByVehicleType = `_type == "moto" && ${vehicleType}`;
const bikesByVehicleType = `_type == "bici" && ${vehicleType}`;
const scootersByVehicleType = `_type == "scooter" && ${vehicleType}`;

const tagType = `tags match $searchText`

const carsByTagType = `_type == "car" && ${tagType}`;
const motosByTagType = `_type == "moto" && ${tagType}`;
const bikesByTagType = `_type == "bici" && ${tagType}`;
const scootersByTagType = `_type == "scooter" && ${tagType}`;

const searchAnyResults = `*[${carsByBrandName} || ${motosByBrandName} || ${bikesByBrandName} || ${scootersByBrandName} 
  || ${carsByModelName} || ${motosByModelName} || ${bikesByModelName} || ${scootersByModelName}
  || ${carsByFuelTypeName} || ${motosByFuelTypeName} || ${bikesByFuelTypeName} || ${scootersByFuelTypeName}
  || ${carsByVehicleType} || ${motosByVehicleType} || ${bikesByVehicleType} || ${scootersByVehicleType}
  || ${carsByTagType} || ${motosByTagType} || ${bikesByTagType} || ${scootersByTagType}
  ] 
    {
    ${brandRef},
    ${modelRef},
    "image": images[0].image.asset->url,
    _type
  }`;

export const getAnyResultsFromText = async (searchText) => {
  const results = await sanityClient(false).fetch(searchAnyResults, {
    searchText,
  });
  return results;
};

const searchMotosByBrandNameQuery = `*[_type == "moto" && brand._ref in *[_type=="brand" && name==$brandName]._id ] {
  ${brandRef},
  ${modelRef},
  images
}`;

export const getMotosByBrandName = async (brandName) => {
  const results = await sanityClient(false).fetch(searchMotosByBrandNameQuery, {
    brandName,
  });
  return results;
};

const searchBikesByBrandNameQuery = `*[_type == "bici" && brand._ref in *[_type=="brand" && name==$brandName]._id ] {
  ${brandRef},
  ${modelRef},
  images
}`;

export const getBikesByBrandName = async (brandName) => {
  const results = await sanityClient(false).fetch(searchBikesByBrandNameQuery, {
    brandName,
  });
  return results;
};

const searchScootersByBrandNameQuery = `*[_type == "scooter" && brand._ref in *[_type=="brand" && name==$brandName]._id ] {
  ${brandRef},
  ${modelRef},
  images
}`;

export const getScootersByBrandName = async (brandName) => {
  const results = await sanityClient(false).fetch(
    searchScootersByBrandNameQuery,
    {
      brandName,
    }
  );
  return results;
};
