import React from "react";
import styled from "@emotion/styled";
import RangeSlider from "./RangeSlider";

type RangeProps = {
  title: string;
  min: string;
  max: string;
};

const Range = ({ title, min, max }: RangeProps) => {
    const [value, setValue] = React.useState({ min: 5, max: 100 });

  return (
    <StyledRange>
      <h3>{title}</h3>
      {/* slider */}
      <RangeSlider
        min={0}
        max={100}
        step={1}
        value={value}
        onChange={setValue}
      />

      <section className="values">
        <div className="min">
          <p>Mínimo</p>
          <div>{min}</div>
        </div>
        <div className="max">
          <p>Máximo</p>
          <div>{max}</div>
        </div>
      </section>
    </StyledRange>
  );
};

const StyledRange = styled.section``;

export default Range;
