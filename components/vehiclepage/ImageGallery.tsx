import styled from "@emotion/styled";
import React from "react";
import ImageSlider from "./ImageSlider";
import ThumbnailImage from "./ThumbnailImage";

type ImageGalleryProps = {
  images: any;
};

const ImageGallery = ({ images }: ImageGalleryProps) => {
  return (
    <StyledImageGallery>
      <ImageSlider
        images={images}
        className="slider-mobile"
      />
      <ThumbnailImage
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
    .slider-mobile {
      display: none;
    }
    .Thumbnail-desktop {
      display: flex;
    }
  }
`;

export default ImageGallery;
