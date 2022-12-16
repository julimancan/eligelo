import styled from "@emotion/styled";
import { Roboto } from "@next/font/google";

const roboto = Roboto({ weight: "500" });

type ButtonProps = {
  children: JSX.Element | string,
  type?: "primary" | "secondary",
  classNames?: string,
  onClick?: () => void
}


const Button = ({ children, type = "primary", classNames, onClick }: ButtonProps) => {
  return (
    <StyledButton className={`${roboto.className} ${classNames}  ${type}`}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  display: grid;
  place-content: center;
  padding: 0px 16px;
  min-height: 40px;
  border-radius: var(--button-border-radius);
  border: var(--button-border);
  font-size: 16px;
  line-height: 24px;
  a:nth-of-type(1) {
    translate: 0 5%;
  }
  &.primary {
    background-color: var(--button-bg-color);
    color: var(--button-text-color);
  }
  &.secondary{
    background-color: white;
    color: var(--primary-blue);
    box-shadow: 0px 4px 8px rgba(38, 50, 56, 0.1), 0px 2px 4px rgba(38, 50, 56, 0.11), 0px 0px 2px rgba(38, 50, 56, 0.12);
  }
`;
export default Button;
