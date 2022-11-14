import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";
import SearchBar from "../components/SearchBar";
import {
  getBikesByBrandName,
  getAnyResultsFromText,
  getMotosByBrandName,
  getScootersByBrandName,
} from "../sanity/queries/pages/resultados";

export const getServerSideProps = async ({ query }) => {
  const { search } = query;

  const searchResults = await getAnyResultsFromText(search);
  // const motoResults = await getMotosByBrandName(search);
  // const bikeResults = await getBikesByBrandName(search);
  // const scooterResults = await getScootersByBrandName(search);

  return {
    props: {
      data: null,
      searchResults,
      // motoResults,
      // bikeResults,
      // scooterResults,
    },
  };
};

const Resultados = ({
  searchResults,
}) => {

  const router = useRouter();
  const [cars, setCars] = useState(searchResults);
  // const [motos, setMotos] = useState(motoResults);
  // const [bikes, setBikes] = useState(bikeResults);
  // const [scooters, setScooters] = useState(scooterResults);
  useEffect(() => {
    console.log("new search", router.query.search)
  }, [router.query.search])
  console.log({ searchResults });
  return (
    <main>
      <SearchBar/>
      {cars?.map((car, index) => (
        <div>
          <h1>{car.brand?.name}</h1>
          <h2>{car.model?.name}</h2>
          <p>{car._type}</p>
        </div>
      ))}
      {/* {motos?.map((moto, index) => (
        <div>
          {moto.brand?.name}
          {moto.model?.name}
          {moto._type}
        </div>
      ))}
      {bikes?.map((bike, index) => (
        <div>
          {bike.brand?.name}
          {bike.model?.name}
          {bike._type}
        </div>
      ))}
      {scooters?.map((scooter, index) => (
        <div>
          {scooter.brand?.name}
          {scooter.model?.name}
          {scooter._type}
        </div>
      ))} */}
    </main>
  );
};

export default Resultados;
