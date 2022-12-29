import styled from "@emotion/styled";
import React, { useState } from "react";
import ImageSlider from "./ImageSlider";
import ThumbnailImage from "./ThumbnailImage";

type ImageGalleryProps = {
  images: any;
};

const ImageGallery = ({ images }: ImageGalleryProps) => {
  const [index, setIndex] = useState(0);

  return (
    <StyledImageGallery>
      <ImageSlider
        index={index}
        setIndex={setIndex}
        images={images}
        className="slider-mobile"
      />
      <ThumbnailImage
        index={index}
        setIndex={setIndex}
        images={images}
        className="Thumbnail-desktop"
      />
    </StyledImageGallery>
  );
};

const StyledImageGallery = styled.section`
  width: 100%;
  height: 100%;

  .Thumbnail-desktop {
    display: none;
  }
  @media (min-width: 900px) {
    height: auto;
    .slider-mobile {
      display: none;
    }
    .Thumbnail-desktop {
      display: flex;
    }
  }
`;

export default ImageGallery;
