import styled from "@emotion/styled";
import Checkbox from "./Checkbox";
import type { Dispatch, SetStateAction } from "react";
import type { Filters } from "./FiltersOptions";


type SelectSectionProps = {
  title: string;
  options: [string, string];
  setFilterStates: Dispatch<SetStateAction<Filters>>;
  filterType: "transmission" | "drivetrain" | "steering" | "other"
};

const SelectSection = ({ title, options, setFilterStates, filterType }: SelectSectionProps) => {
  return (
    <StyledSelectSection>
      <h3>{title}</h3>
      <div className="options">
        <Checkbox label={options[0]} setFilterStates={setFilterStates} filterType={filterType} />
        <Checkbox label={options[1]} setFilterStates={setFilterStates} filterType={filterType} />
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
