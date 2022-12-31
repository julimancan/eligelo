import styled from "@emotion/styled";
import { Dispatch, SetStateAction } from "react";
import ImageSlider from "./ImageSlider";

type ModalProps = {
  images: {
    alt?: string;
    aspectRatio: number;
    height: number;
    url: string;
    width: number;
  }[];
  index: number;
  isOpenModal: boolean;
  openModalHandler: () => void;
};

const ModalImage = ({images, index, isOpenModal, openModalHandler }: ModalProps) => {
  return (
    <StyledModal>
      {isOpenModal ? (
        <div
          className="modal-backdrop"
          onClick={openModalHandler}>
          <div 
            className="modal-view"
            onClick={e => {
                e.stopPropagation();
            }}>
            <ImageSlider images={images} initialIndex={index} className="modal-image-slider"/>
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
    .modal-view {
      display: flex;
      justify-content: center;
      align-items: center;
      position: fixed;
      z-index: 1;
      width: 50%;
      height: 50%;
      border-radius: 1rem;
      background-color: white;
      /* > .close-btn {
        position: absolute;
        top: 10px;
        cursor: pointer;
      } */
      .modal-image-slider{
  
      }
    }
  }
`;

export default ModalImage;
