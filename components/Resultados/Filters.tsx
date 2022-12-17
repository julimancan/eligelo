import styled from "@emotion/styled";
import Button from "../Button";
import { useState } from "react";
import { Inter } from "@next/font/google";
import { ProductInt } from "../ProductCard";
import Dropdown from "./Dropdown";
import Range from "./Range";

const inter = Inter({ weight: "variable" });

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
    const newResults = results.filter(item => item.type === value)
    console.log(value);
    setResults(newResults)
  };

  const vehicleType = results.map(result => result.type)[0];

  const vehicleTypeInSpanish = vehicleTypeOptions.find(vehicle => vehicle.value === vehicleType)
  
  return (
    <StyledFilters>
      <Button type="secondary" classNames="filter-button" onClick={openFilters}>
        <>Filtros</>
      </Button>

      {showFilterModal && (
        <section className="filter-modal">
          <h2 className={inter.className}>Filtros</h2>
          <div
            className="close-filter"
            onClick={() => setShowFilterModal(false)}
          />

          <Dropdown 
              classNames={"vehicle-type"}
              titleFont={inter.className}
              title={"Tipo de Vehículo"}
              options={vehicleTypeOptions.filter(option => option.name !== vehicleTypeInSpanish.name)}
              onClick={vehicleTypeFilter}
              selectedName={vehicleTypeInSpanish.name}
              type="vehicle-type"
          />
          <Range title="Precio" min="10000000" max="20000000"/>
        </section>
      )}
    </StyledFilters>
  );
};

const StyledFilters = styled.section`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1fr;
  .filter-button {
    place-self: end;
    /* right: 0; */
  }

  .filter-modal {
    position: fixed;
    background-color: white;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 1000;
    display: grid;
    justify-content: center;
    padding-top: 1rem;
    h3 {
      font-size: 18px;
      line-height: 24px;
      font-weight: 700;
    }
    .vehicle-type {
      height: fit-content;
      max-height: 70px;
      display: grid;
      gap: .5em;
    }
    .close-filter {
      background: var(--primary-blue);
      width: 20px;
      height: 4px;
      rotate: 45deg;
      position: absolute;
      top: 1rem;
      right: 1rem;
      border-radius: 4px;
      &:after {
        content: "";
        width: 20px;
        height: 4px;
        rotate: -90deg;
        background: var(--primary-blue);
        position: absolute;
        border-radius: 4px;
      }
    }
  }
`;

export default Filters;
