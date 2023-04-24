import { Inter } from "@next/font/google";
import type { Dispatch, SetStateAction } from "react";
import Button from "../Button";
import Dropdown from "./Dropdown";
import Range from "./Range";
import SelectSection from "./SelectSection";
import styled from "@emotion/styled";
import type { ProductInt } from "../ProductCard";
const inter = Inter({ weight: "variable" });

export type Filters = {
  price: {
    min: null | number;
    max: null | number;
  }
  year: {
    min: null | number;
    max: null | number;
  }
  mileage: {
    min: null | number;
    max: null | number;
  };
  otherFilters: string[];
  transmission: {
    manual: boolean,
    automatic: boolean
  };
  drivetrain: {front: boolean, rear: boolean, all: boolean};
  steering: {hydraulic: boolean, mechanical: boolean};
}

type FiltersOptionsProps = {
  setShowFilterModal?: Dispatch<SetStateAction<boolean>>;
  vehicleTypeFilter: (value: any) => void;
  vehicleTypeInSpanish: {
    name: string;
    value: string;
  };
  type?: "modal";
  filterStates: Filters;
  setFilterStates: Dispatch<SetStateAction<Filters>>;
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

const FiltersOptions = ({
  setShowFilterModal,
  vehicleTypeFilter,
  vehicleTypeInSpanish,
  type,
  setFilterStates
}: FiltersOptionsProps) => {

  console.log("rendered FiltersOptions")
  return (
    <StyledFiltersOptions className={type}>
      <h2 className={`${inter.className} title`}>Filtros</h2>

      {!!setShowFilterModal && (
        <div
          className="close-filter"
          onClick={() => setShowFilterModal(false)}
        />
      )}

      <Dropdown
        classNames={"vehicle-type"}
        titleFont={inter.className}
        title={"Tipo de Vehículo"}
        options={vehicleTypeOptions.filter(
          (option) => option.name !== vehicleTypeInSpanish.name
        )}
        onClick={vehicleTypeFilter}
        selectedName={vehicleTypeInSpanish.name}
        type="vehicle-type"
      />

      <section className="ranges">
        <Range
          title="Precio"
          type="money"
          step={500000}
          config={{ defaultMin: 20000000, defaultMax: 300000000 }}
          filterType="price"
          setFilterStates={setFilterStates}
        />
        <Range
          title="Año"
          config={{
            defaultMin: 2013,
            defaultMax: new Date().getFullYear(),
          }}
          step={1}
          filterType="year"
          setFilterStates={setFilterStates}

        />
        <Range
          title="Kilometraje"
          type="km"
          step={1000}
          config={{ defaultMin: 1000, defaultMax: 200000 }}
          filterType="mileage"
          setFilterStates={setFilterStates}

        />
      </section>

      <hr className="divider" />

      <section className="options-checkbox">
        <SelectSection title="Transmisión" filterType="transmission" options={["Manual", "Automática"]} setFilterStates={setFilterStates} /> 

        <SelectSection title="Tracción" options={["4x2", "4x4"]} filterType="drivetrain" setFilterStates={setFilterStates} />

        <SelectSection title="Dirección" options={["Hidráulica", "Manual"]} filterType="steering"  setFilterStates={setFilterStates} />
      </section>

      <hr className="divider" />

      <section className="otros-detalles">
        <SelectSection
          title="Otros detalles"
          options={["Aire acondicionado", "Frenos ABS"]}
          setFilterStates={setFilterStates}
          filterType="other"
        />
      </section>

      <section className="buttons">
        <Button classNames="btn-add-filters">Agregar filtros</Button>
        <Button classNames="btn-remove-filters" type="secondary">
          Eliminar filtros
        </Button>
      </section>
    </StyledFiltersOptions>
  );
};

const StyledFiltersOptions = styled.section`
  &.modal {
    position: fixed;
    overflow: auto;
    overflow-x: hidden;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 1000;
    display: grid;
    justify-content: center;
    grid-template-columns: 1fr;
    padding: 1rem 5%;
    background-color: white;
    h2.title {
      font-weight: 500;
      font-size: 18px;
      line-height: 24px;
      margin: 0 auto;
    }
    .otros-detalles {
      margin-bottom: 4rem;
    }
  }

  h2.title {
    margin-bottom: 1.2rem;
  }

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
    top: 1.5rem;
    right: 1.5rem;
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
    /* margin: 1rem; */
    margin-top: 2rem;
    display: grid;
    gap: 1.5rem;
  }
  .options-checkbox {
    display: grid;
    gap: 2rem;
  }
  .otros-detalles {
    margin-bottom: 2rem;
  }
  .buttons {
    margin-bottom: 1rem;
    display: grid;
    gap: 0.5rem;
    .btn-add-filters {
      width: 100%;
      box-shadow: 0px 4px 8px rgba(38, 50, 56, 0.1),
        0px 2px 4px rgba(38, 50, 56, 0.11), 0px 0px 2px rgba(38, 50, 56, 0.12);
    }
    .btn-remove-filters {
      width: 100%;
      box-shadow: none;
    }
  }
`;

export default FiltersOptions;
