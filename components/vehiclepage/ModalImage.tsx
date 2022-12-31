import styled from "@emotion/styled";
import { Dispatch, SetStateAction } from "react";

type ModalProps = {
  isOpenModal: boolean;
  setIsOpenModal: Dispatch<SetStateAction<boolean>>;
  openModalHandler: () => void;
};

const ModalImage = ({
  isOpenModal,
  setIsOpenModal,
  openModalHandler,
}: ModalProps) => {
  return (
    <StyledModal>
      {isOpenModal ? (
        <div
          className="modal-backdrop"
          onClick={openModalHandler}>
          <div className="modal-view">
            <div className="close-btn">modal</div>
          </div>
        </div>
      ) : null}
    </StyledModal>
  );
};

export const StyledModal = styled.section`
  position: absolute;
  z-index: 11;
  .modal-backdrop {
    background-color: rgba(0, 0, 0, 0.5);
    width: 100vw;
    height: 100vh;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .modal-view {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    width: 200px;
    height: 100px;
    border-radius: 1rem;
    background-color: white;
    > .close-btn {
      position: absolute;
      top: 10px;
      cursor: pointer;
    }
  }
`;

export default ModalImage;
