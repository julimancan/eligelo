import styled from "@emotion/styled";
import Image from "next/image";
import React, { lazy, useState } from "react";

type ImageProps = {
  images: {
    alt?: string;
    aspectRatio: number;
    height: number;
    url: string;
    width: number;
  }[];
  className?: string;
};

const ImageSlider = ({ images, className = "" }: ImageProps) => {
  const [index, setIndex] = useState(0);

  const prevStep = () => {
    if (index === 0) {
      setIndex(images.length - 1);
      return;
    }
    setIndex(index - 1);
  };

  const nextStep = () => {
    if (index === images.length - 1) {
      setIndex(0);
      return;
    }
    setIndex(index + 1);
  };

  console.log(images[index].width);

  return (
    <StyledSlider className={className}>
      <Image
        src={images[index].url}
        alt={images[index]?.alt}
        className="slides"
        width={343}
        height={208}
        style={{ objectFit: "cover" }}
        loading={"lazy"}
      />
      <button
        className="prevButton"
        onClick={prevStep}>
        <div className="arrow"></div>
      </button>
      <button
        className="nextButton"
        onClick={nextStep}>
        <div className="arrow"></div>
      </button>
    </StyledSlider>
  );
};

const StyledSlider = styled.div`
  width: 100%;
  height: 100%;

  button {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.5);
    border: none;
    cursor: pointer;
    transition: all 0.25s ease-out;
  }

  .arrow {
    position: absolute;

    width: 100%;
    height: 0.125rem;
    &::before {
      position: absolute;
      content: "";
      width: 1rem;
      height: 1rem;
      border-top: 0.2rem solid #fff;
      border-right: 0.2rem solid #fff;
      border-radius: 0 2.5px 0 0;
      transform: rotate(45deg);
    }
  }

  .prevButton {
    position: absolute;
    top: 50%;
    left: 1.2rem;
    transform: translateY(-50%);
    .arrow {
      rotate: 180deg;
      left: 11px;
      &::before {
        top: -0.35rem;
      }
    }
  }
  .nextButton {
    position: absolute;
    top: 50%;
    right: 1.2rem;
    transform: translateY(-50%);
    .arrow {
      left: -11px;
      &::before {
        top: -0.5rem;
      }
    }
  }
  .slides {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

export default ImageSlider;
