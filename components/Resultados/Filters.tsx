import styled from "@emotion/styled";
import Button from "../Button";
import { useState } from "react";
import { ProductInt } from "../ProductCard";
import FiltersOptions from "./FiltersOptions";

type FiltersProps = {
  setResults: (newResults: ProductInt[]) => void;
  results: ProductInt[];
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

const Filters = ({ results, setResults }: FiltersProps) => {
  const [showFilterModal, setShowFilterModal] = useState(false);
  const openFilters = () => {
    setShowFilterModal(true);
  };
  const vehicleTypeFilter = (value) => {
    const newResults = results.filter(item => item.type === value);
    console.log(value);
    setResults(newResults);
  };

  const vehicleType = results.map(result => result.type)[0];

  const vehicleTypeInSpanish = vehicleTypeOptions.find(vehicle => vehicle.value === vehicleType);

  return (
    <StyledFilters>
      <Button
        type="secondary"
        classNames="filter-button"
        onClick={openFilters}>
        <>Filtros</>
      </Button>

      {showFilterModal && (
        <FiltersOptions
          setShowFilterModal={setShowFilterModal}
          vehicleTypeFilter={vehicleTypeFilter}
          vehicleTypeInSpanish={vehicleTypeInSpanish}
          type="modal"
        />
      )}
      <section className="filter-desktop">
        <FiltersOptions
          vehicleTypeFilter={vehicleTypeFilter}
          vehicleTypeInSpanish={vehicleTypeInSpanish}
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
