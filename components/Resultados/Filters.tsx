import styled from "@emotion/styled";
import Button from "../Button";
import { useState, useEffect } from "react";
import { ProductInt } from "../ProductCard";
import FiltersOptions from "./FiltersOptions";

type FiltersProps = {
  setResults: (newResults: ProductInt[]) => void;
  results: ProductInt[];
  originalResults: ProductInt[];
};

const vehicleTypeOptions = [
  {
    name: "Carros",
    value: "car",
  },
  {
    name: "Motos",
    value: "moto",
  },
  {
    name: "Bicicletas",
    value: "bici",
  },
  {
    name: "Patinetas",
    value: "scooter",
  },
];

const Filters = ({ results, setResults, originalResults }: FiltersProps) => {
  const [showFilterModal, setShowFilterModal] = useState(false);
  const openFilters = () => {
    setShowFilterModal(true);
  };

  const [filterStates, setFilterStates] = useState({
    price: {
      min: 20000000,
      max: 300000000,
    },
    year: {
      min: 2013,
      max: new Date().getFullYear(),
    },
    mileage: {
      min: 1000,
      max: 200000,
    },
    otherFilters: [],
    transmission: {
      manual: false,
      automatic: false
    },
    drivetrain: null,
    steering: null,
  });

  const vehicleTypeFilter = (value) => {
    const newResults = results.filter((item) => item.type === value);
    console.log(value);
    setResults(newResults);
  };

  const vehicleType = originalResults.map((result) => result.type)[0];

  const vehicleTypeInSpanish = vehicleTypeOptions.find(
    (vehicle) => vehicle.value === vehicleType
  );

  useEffect(() => {
   
    const newResults = originalResults.filter((item) => {
      return (
        item.price >= filterStates.price.min &&
        item.price <= filterStates.price.max &&
        item.year >= filterStates.year.min &&
        item.year <= filterStates.year.max &&
        item.mileage >= filterStates.mileage.min &&
        item.mileage <= filterStates.mileage.max
      );
    }); 

    setResults(newResults);
  }, [filterStates]);
  
  return (
    <StyledFilters>
      <Button type="secondary" classNames="filter-button" onClick={openFilters}>
        <>Filtros</>
      </Button>

      {showFilterModal && (
        <FiltersOptions
          setShowFilterModal={setShowFilterModal}
          vehicleTypeFilter={vehicleTypeFilter}
          vehicleTypeInSpanish={vehicleTypeInSpanish}
          type="modal"
          filterStates={filterStates}
          setFilterStates={setFilterStates}
        />
      )}
      <section className="filter-desktop">
        <FiltersOptions
          vehicleTypeFilter={vehicleTypeFilter}
          vehicleTypeInSpanish={vehicleTypeInSpanish}
          filterStates={filterStates}
          setFilterStates={setFilterStates}
        />
      </section>
    </StyledFilters>
  );
};

const StyledFilters = styled.section`
  margin: 1rem 0;
  padding: 0 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1fr;

  .filter-button {
    place-self: end;
    /* right: 0; */
  }

  .filter-desktop {
    display: none;
  }

  @media (min-width: 900px) {
    padding: 0;
    .filter-button {
      display: none;
    }
    .filter-desktop {
      display: grid;
    }
  }
`;

export default Filters;
