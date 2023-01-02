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
      width: 62vw;
      height: 82vh;
      border-radius: 1rem;
      background-color: white;

      .modal-image-slider{
        button {
          width: 80px;
          height: 80px;
        }
        .arrow {
          &::before {
            width: 2.2rem;
            height: 2.2rem;
            border-top: .4rem solid #fff;
            border-right: .4rem solid #fff;
            border-radius: 0 3px 0 0;
          }
        }
        .prevButton {
          left: -8.5rem;
          .arrow {
            left: 1.55rem;
            &::before {
              top: -1rem;
            }
          }
        }
        .nextButton {
          right: -8.5rem;
          .arrow {
            left: -1.45rem;
            &::before {
              top: -1rem;
            }
          }
        }
      }
    }
  }
`;

export default ModalImage;
