import React from "react";
import styled from "@emotion/styled";
import RangeSlider from "./RangeSlider";

type RangeProps = {
  title: string;
  min: number;
  max: number;
  config:{
    defaultMin: number;
    defaultMax: number;
  }
};

const Range = ({ title, min, max, config }: RangeProps) => {
  const [value, setValue] = React.useState({ min, max });

  return (
    <StyledRange>
      <h3>{title}</h3>
      {/* slider */}
      <RangeSlider
        min={config.defaultMin}
        max={config.defaultMax}
        step={1}
        value={value}
        onChange={setValue}
      />

      <section className="values">
        <div className="min">
          <p>Mínimo</p>
          <div className="value">${value.min}</div>
        </div>
        <div className="max">
          <p>Máximo</p>
          <div className="value">${value.max}</div>
        </div>
      </section>
    </StyledRange>
  );
};

const StyledRange = styled.section`
    h3{
        margin-bottom: 1.2rem;
    }
  .values {
    display: flex;
    gap: 1.625rem;
    p{
        margin-bottom: .25rem;
    }
    .value {
      display: flex;
      justify-content: flex-end;
      width: 156px;
      padding: 0.5rem 1rem;
      border: 1px solid #dedede;
      border-radius: 8px;
    }
  }
`;

export default Range;
