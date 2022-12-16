import styled from "@emotion/styled";

type DropdownArrowProps = {
  isOpen: boolean
}
const DropdownArrow = ({isOpen}: DropdownArrowProps) => {
  return (
    <StyledArrow isOpen={isOpen}/>
  );
}

interface StyledArrowProps {
  isOpen: boolean;
}
const StyledArrow = styled.div<StyledArrowProps>`
  width: 10px;
  height: 2px;
  background-color: black;
  rotate: ${({isOpen}) => isOpen ? "225deg" : "45deg"};
  position: absolute;
  right: .2em;
  translate: ${({isOpen}) => isOpen ? "7px 12px" : "0 12px"};
  transition: rotate .15s;
  &::after {
    content: "";
    width: 10px;
    height: 2px;
    background-color: black;
    rotate: 90deg;
    position: absolute;
    translate: -0px -5px;
  }
`;
export default DropdownArrow;