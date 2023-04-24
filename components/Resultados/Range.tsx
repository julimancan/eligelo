import styled from "@emotion/styled";
import RangeSlider from "./RangeSlider";
import { formatByType } from "../../lib/helpers";
import { useState } from "react";
import type { Dispatch, SetStateAction } from "react";
import type { ProductInt } from "../ProductCard";
import type { Filters } from "./FiltersOptions";

type RangeProps = {
  title: string;
  type?: "money" | "km";
  step?: number;
  config: {
    defaultMin: number;
    defaultMax: number;
  };
  filterType: "price" | "year" | "mileage";
  setFilterStates: Dispatch<SetStateAction<Filters>>;
};

const Range = ({
  title,
  type,
  config,
  step = 1,
  filterType,
  setFilterStates
}: RangeProps) => {
  const [value, setValue] = useState({
    min: config.defaultMin,
    max: config.defaultMax,
  });

  return (
    <StyledRange>
      <h3>{title}</h3>

      <RangeSlider
        min={config.defaultMin}
        max={config.defaultMax}
        step={step}
        value={value}
        onChange={setValue}
        filterType={filterType}
        setFilterStates={setFilterStates}
      />

      <section className="values">
        <div className="min">
          <p>Mínimo</p>
          <div className="value">{formatByType(value.min, type)}</div>
        </div>
        <div className="max">
          <p>Máximo</p>
          <div className="value">{formatByType(value.max, type)}</div>
        </div>
      </section>
    </StyledRange>
  );
};

const StyledRange = styled.section`
  h3 {
    margin-bottom: 1.2rem;
  }
  .values {
    display: flex;
    gap: 1.625rem;
    .min,
    .max {
      flex: 1;
      width: 15ch;
    }
    p {
      margin-bottom: 0.25rem;
    }
    .value {
      display: flex;
      justify-content: flex-end;
      padding: 0.5rem 1rem;
      border: 1px solid #dedede;
      border-radius: 8px;
    }
  }
`;

export default Range;
