import styled from "@emotion/styled";
import Image from "next/image";
import React from "react";
import useState from "react";

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
  const [index, setIndex] = React.useState(0);
  const thumbnailElement = images.map((img, idx) => {
    return (
      <Image
        key={img.url}
        src={img.url}
        alt={img.alt}
        width={343}
        height={208}
        style={{ objectFit: "cover" }}
        loading={"lazy"}
        // alt="product"
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
          alt="product"
          width={343}
          height={208}
          style={{ objectFit: "cover" }}
          loading={"lazy"}
        />
      </div>
    </StyledThumbnailImage>
  );
};

const StyledThumbnailImage = styled.section`
  width: 100%;
  border-radius: 5px;
  padding: 0.5rem;
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;

  .image-container {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
  }

  .thumbnail-container {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
  }
  .thumbnail-container img {
    width: 100%;
    height: 70px;
    object-fit: cover;
    cursor: pointer;
  }
  .current {
    filter: grayscale(100%);
  }

  /* img {
    width: 340px;
    height: 300px;
    object-fit: cover;
  } */
`;

export default ThumbnailImage;
