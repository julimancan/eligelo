import styled from "@emotion/styled";
import Image from "next/image";
import { useState } from "react";
import ModalImage from "./ModalImage";

type ThumbnailImageProps = {
  images: {
    alt?: string;
    aspectRatio: number;
    height: number;
    url: string;
    width: number;
  }[];
  className?: string;
};

const ThumbnailImage = ({ images, className = "" }: ThumbnailImageProps) => {
  const [index, setIndex] = useState(0);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModalHandler = () => {
    setIsOpenModal(!isOpenModal);
  };


  const thumbnailElement = images
    .filter((img, idx) => {
      if (idx < 6) {
        return img;
      }
    })
    .map((img, idx) => {
      if (idx === 5 && images.length > 6) {
        return (
          <section
            key={`${img.url}-${idx}`}
            className="more-images">
            <Image
              src={img.url}
              alt={"vehicle"}
              width={img.width}
              height={img.height}
              style={{ objectFit: "cover" }}
              loading={"lazy"}
              onClick={() => setIndex(idx)}
              className={idx === index ? "current" : ""}
            />
            <p onClick={()=> {
              setIndex(idx)
              openModalHandler()
            }}>+{images.length - 6}</p>
          </section>
        );
      }

      return (
        <Image
          key={`${img.url}-${idx}`}
          src={img.url}
          alt={"vehicle"}
          width={img.width}
          height={img.height}
          style={{ objectFit: "cover" }}
          loading={"lazy"}
          onClick={() => setIndex(idx)}
          className={idx === index ? "current" : ""}
        />
      );
    });
  return (
    <StyledThumbnailImage className={className}>
      <div className="thumbnail-container">{thumbnailElement}</div>
      <div className="image-container">
        <Image
          src={images[index].url}
          alt={"vehicle"}
          width={images[index].width}
          height={images[index].height}
          style={{ objectFit: "cover" }}
          loading={"lazy"}
          onClick={openModalHandler}
        />
      </div>
      {/* <section className="modal-container">
        <ModalImage
          images={images}
          index={index}
          isOpenModal={isOpenModal}
          openModalHandler={openModalHandler}
        />
      </section> */}
    </StyledThumbnailImage>
  );
};

const StyledThumbnailImage = styled.section`
  width: 100%;
  border-radius: 5px;
  padding: 0.5rem;
  display: flex;
  gap: 0.6rem;

  .image-container {
    display: flex;
    height: 504.25px;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    img {
      width: 100%;
      height: 100%;
    }
  }

  .thumbnail-container {
    display: flex;
    height: auto;
    gap: 1rem;
    flex-direction: column;

    img {
      width: 98.69px;
      height: 74.02px;
      cursor: pointer;
    }

    .more-images {
      position: relative;
      p {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        display: grid;
        place-content: center;
        color: white;
        font-weight: 700;
        font-size: 40px;
        line-height: 39px;
        background: rgba(31, 31, 31, 0.5);
      }
    }
  }
  .current {
    filter: grayscale(100%);
  }
  .modal-container {
    position: relative;
  }
`;

export default ThumbnailImage;
