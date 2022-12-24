import styled from "@emotion/styled";

type CheckboxProps = {
    label: string
}

const Checkbox = ({label}: CheckboxProps) => {
  return (
    <StyledCheckbox title=".squaredThree">
      <label className="container">
        {label}
        <input type="checkbox" />
        <span className="checkmark"></span>
      </label>
    </StyledCheckbox>
  );
};

const StyledCheckbox = styled.section`
  display: block;
  position: relative;
  padding-left: 2rem;
  cursor: pointer;
  line-height: 19px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  & input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .checkmark {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    height: 18px;
    width: 18px;
    border-radius: 2px;
    background-color: transparent;
    border: 2px solid var(--dark-gray);
  }

  &:hover input ~ .checkmark {
    background-color: var(--light-gray);
  }

  & input:checked ~ .checkmark {
    background-color: var(--blue-2);
    border: 2px solid var(--blue-2);
  }

  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  & input:checked ~ .checkmark:after {
    display: block;
  }

  & .checkmark:after {
    left: calc(50% - 12px / 2 + 0px);
    top: calc(50% - 8px / 2 - 2px);
    width: 12.5px;
    height: 8px;
    border: solid white;
    border-width: 3px 3px 0 0;
    -webkit-transform: rotate(135deg);
    -ms-transform: rotate(135deg);
    transform: rotate(135deg);
  }
`;

export default Checkbox;
