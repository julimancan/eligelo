import styled from "@emotion/styled";
import React from "react";
import Checkbox from "./Checkbox";

type SelectSectionProps = {
  title: string;
  options: [string, string];
};

const SelectSection = ({ title, options }: SelectSectionProps) => {
  return (
    <StyledSelectSection>
      <h3>{title}</h3>
      <div className="options">
        <Checkbox label={options[0]} />
        <Checkbox label={options[1]} />
      </div>
    </StyledSelectSection>
  );
};

const StyledSelectSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 27px;
  .options {
    padding-left: .6rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
`;

export default SelectSection;
