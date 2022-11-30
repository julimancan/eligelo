import styled from "@emotion/styled";

const StyledModal = styled.div`
  position: fixed;
  width: ${({ open }) => (open ? "100vw" : "0")};
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  height: 100vh;
  background-color: white;
  transition: ${({ transitionDuration }) => `width ${transitionDuration}`};
  z-index: 2;
  .content {
    display: ${({ open }) => (open ? "block" : "none")};
    color: black;
  }
`;

const MobileNavModal = ({ open, children }) => {
  return (
    <StyledModal open={open} transitionDuration={".1s"}>
      <div className="content">{children}</div>
    </StyledModal>
  );
};

export default MobileNavModal;
