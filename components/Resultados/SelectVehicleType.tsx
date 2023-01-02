import { useState } from "react";
import styled from "@emotion/styled";
import DropdownArrow from "./DropdownArrow";

type SelectProps = {
  options: {
    name: string;
    value: string;
  }[];
  onClick?: (value: string) => void;
  name: string;
  font?: string
};

const SelectVehicleType = ({ options, name, font }: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [typeName, setTypeName] = useState(name);

  return (
    <StyledSelect
      onClick={() => setIsOpen(!isOpen)}
      isOpen={isOpen}
      length={options.length}
    >
      <span className={`title ${font}`}>
        {typeName}
        <DropdownArrow isOpen={isOpen} />
      </span>
      {isOpen && (
        <ul className="options">
          {options.map((option, index) => (
            <li key={index} className="option">
              <a
                href={`/resultados?search=*${option.value}*`}
                onClick={() => setTypeName(option.name)}
                className={font}
              >
                {option.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </StyledSelect>
  );
};

export default SelectVehicleType;

interface StyledSelectProps {
  length: number;
  isOpen: boolean;
}
const StyledSelect = styled.button<StyledSelectProps>`
  border: 1px solid #dedede;
  z-index: 1000;
  border-radius: 8px;
  background-color: white;
  padding: 10px;
  display: grid;
  overflow: hidden;
  width: 14ch;
  height: ${({ length, isOpen }) => (isOpen ? `${40 * length}px` : "46px")};
  transition: height 0.15s;
  .title {
    display: flex;
    gap: 1ch;
    font-weight: 400;
    font-size: 16px;
    position: relative;
  }
  .options {
    border-top: 1px solid black;
    width: 100%;
    padding: 0;

    li {
      /* width: 100%; */
      /* background-color: red; */
      text-align: left;
    }
  }
`;
