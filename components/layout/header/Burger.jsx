import styled from "@emotion/styled";

const StyledBurgerContainer = styled.div`
  position: fixed;
  z-index: 2;
  cursor: pointer;
  height: 20px;
  display: flex;
  align-items: center;
  top: 1.5rem;
  right: ${({ open }) => (open ? "1rem" : "auto")};
  left: ${({ open }) => (open ? "auto" : "1rem")};
  transition: ${({ transitionDuration }) =>
    `left ${transitionDuration}, right ${transitionDuration}`};
  /* @media (min-width: 600px) {
    right: 3rem;
  } */

  .burger {
    --burger-line-color: var(--nav-bar-color);
    --burger-top-line-width: 24px;
    --burger-middle-line-width: var(--burger-top-line-width);
    --burger-bottom-line-width: var(--burger-top-line-width);
    --burger-top-line-height: 3px;
    --burger-middle-line-height: var(--burger-top-line-height);
    --burger-bottom-line-height: var(--burger-top-line-height);
    display: block;
    width: var(--burger-middle-line-width);
    height: var(--burger-middle-line-height);
    background: ${({ open }) => (open ? "none" : "var(--burger-line-color)")};
    border-radius: 5px;
    align-self: center;
    transition: ${({ transitionDuration }) =>
      `width ${transitionDuration}, background ${transitionDuration}`};
    &:before,
    &:after {
      content: "";
      border-radius: 5px;
      width: ${({ open }) =>
        open ? "var(--burger-top-line-width)" : "var(--burger-top-line-width)"};
      height: var(--burger-middle-line-height);
      background: ${({ open }) =>
        open ? "var(--burger-line-color)" : "var(--burger-line-color)"};
      position: absolute;
      transition: ${({
        transitionDuration,
      }) => `background ${transitionDuration}, top ${transitionDuration},
        bottom ${transitionDuration}, transform ${transitionDuration},
        width ${transitionDuration};`};
    }
    &:before {
      top: ${({ open }) => (open ? "19px" : 0)};
      transform: ${({ open }) =>
        open ? "rotate(45deg) translateY(-15px)" : ""};
    }
    &:after {
      bottom: ${({ open }) => (open ? "19px" : 0)};
      transform: ${({ open }) =>
        open ? "rotate(-45deg) translateY(15px)" : ""};
    }
    @media (min-width: 1000px) {
      /* display: none; */
    }
  }
`;

const Burger = ({ open, setOpen }) => {
  const setScrollBarColor = (color) => {
    console.log({ document });
    document.documentElement.style.setProperty(
      "--scroll-bar-thumb-color",
      color
    );
  };

  const handleOpen = () => {
    setOpen(!open);
    setScrollBarColor("#fff");
  };
  return (
    <StyledBurgerContainer
      open={open}
      transitionDuration={".1s"}
      onClick={handleOpen}
    >
      <div className="burger"></div>
    </StyledBurgerContainer>
  );
};

export default Burger;
