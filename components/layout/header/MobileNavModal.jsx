import styled from "@emotion/styled";

const StyledModal = styled.div`
  position: absolute;
  width: ${({ open }) => (open ? "100vw" : "0")};
  height: 100vh;
  background-color: white;
  transition: ${({ transitionDuration }) => `width ${transitionDuration}`};
  div {
    display: ${({ open }) => (open ? "block" : "none")};
    color: black;
  }
`;

const MobileNavModal = ({ open }) => {
  return (
    <StyledModal open={open} transitionDuration={".1s"}>
      <div className="content">Modal</div>
    </StyledModal>
  );
};

export default MobileNavModal;
