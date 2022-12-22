import styled from "@emotion/styled";
import Button from "../Button";
import { useState } from "react";
import { Inter } from "@next/font/google";
import { ProductInt } from "../ProductCard";
import Dropdown from "./Dropdown";
import Range from "./Range";
import SelectSection from "./SelectSection";

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
            options={vehicleTypeOptions.filter(
              option => option.name !== vehicleTypeInSpanish.name
            )}
            onClick={vehicleTypeFilter}
            selectedName={vehicleTypeInSpanish.name}
            type="vehicle-type"
          />

          <section className="ranges">
            <Range
              title="Precio"
              min={10000000}
              max={20000000}
              type="money"
              step={500000}
              config={{ defaultMin: 0, defaultMax: 20000000 }}
            />
            <Range
              title="Año"
              min={2017}
              max={new Date().getFullYear()}
              config={{
                defaultMin: 2015,
                defaultMax: new Date().getFullYear(),
              }}
            />
            <Range
              title="Kilometraje"
              min={20000}
              max={100000}
              type="km"
              step={1000}
              config={{ defaultMin: 10000, defaultMax: 100000 }}
            />
          </section>

          <hr className="divider" />

          <section className="options-checkbox">
            <SelectSection
              title="Transmisión"
              options={["Manual", "Automática"]}
            />

            <SelectSection
              title="Tracción"
              options={["4x2", "4x4"]}
            />

            <SelectSection
              title="Dirección"
              options={["hidráulica", "Manual"]}
            />
          </section>

          <hr className="divider" />

          <section className="otros-detalles">
            <SelectSection
              title="Otros detalles"
              options={["Aire acondicionado", "Frenos ABS"]}
            />
          </section>

          <section className="buttons">
            <Button classNames="btn-add-filters">Agregar filtros</Button>
            <Button
              classNames="btn-remove-filters"
              type="secondary">
              Eliminar filtros
            </Button>
          </section>
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
    overflow: auto;
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
      gap: 0.5em;
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
    .divider {
      margin: 1.5rem 0;
      height: 0;
      width: 100%;
      border: 0.5px solid var(--gray-3);
    }
    .ranges {
      margin-top: 2rem;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }
    .options-checkbox {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }
    .otros-detalles {
      margin-bottom: 4rem;
    }
    .buttons {
      margin-bottom: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      .btn-add-filters {
        width: 100%;
        box-shadow: 0px 4px 8px rgba(38, 50, 56, 0.1),
          0px 2px 4px rgba(38, 50, 56, 0.11), 0px 0px 2px rgba(38, 50, 56, 0.12);
      }
      .btn-remove-filters{
        width: 100%;
        box-shadow: none;
      }
    }
  }
`;

export default Filters;
