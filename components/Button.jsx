import styled from "@emotion/styled";
import { Roboto } from "@next/font/google";
const roboto = Roboto({ weight: "500" });

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
  height: 40px;
  border-radius: var(--button-border-radius);
  border: var(--button-border);
  font-size: 16px;
  line-height: 24px;
  a:nth-child(1) {
    translate: 0 5%;
  }
  &.primary {
    background-color: var(--button-bg-color);
    color: var(--button-text-color);
  }
  &.secondary{
    background-color: white;
    color: var(--primary-blue);
  }
`;

const Button = ({ children, type = "primary" }) => {
  return (
    <StyledButton className={`${roboto.className} ${type}`}>
      {children}
    </StyledButton>
  );
};

export default Button;
