import styled from "styled-components";
import {Roboto} from "@next/font/google";
const roboto = Roboto({weight: "500"})
const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
  height: 40px;
  background-color: var(--button-bg-color);
  color: var(--button-text-color);
  border: var(--button-border);
  border-radius: var(--button-border-radius);
  font-size: 16px;
  line-height: 24px;
  a:nth-child(1) {
    translate: 0 5%;
  }
`;

const Button = ({children}) => {
  return (
    <StyledButton className={roboto.className}>
      {children}
    </StyledButton>
  );
}

export default Button;