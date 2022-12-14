import styled from "@emotion/styled";
import Link from "next/link";
import React from "react";
import LocalPictureComponent from "../LocalPictureComponent";

const HomepageCard = ({ productName, link, background, product }) => {
  return (
    <StyledProductItem href={link}>
      <h3 className="title">{productName}</h3>

      <LocalPictureComponent
        defaultSrc={background.path}
        alt="blue city background"
        height={background.height}
        width={background.width}
        className="back"
        objectFit="cover"
      />

      <LocalPictureComponent
        smallSrc={product.path}
        largeSrc={`${product.path.split(".webp")[0]}-desktop.webp`}
        defaultSrc={`${product.path.split(".webp")[0]}-desktop.webp`}
        alt={product.alt}
        height={product.height}
        width={product.width}
        className="element"
        objectFit="contain"
      />
    </StyledProductItem>
  );
};

const StyledProductItem = styled(Link)`
  background-color: var(--blue-2);
  height: 100%;
  border-radius: 8px;
  padding: 1rem 1rem 0.1rem;
  position: relative;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: var(--shadow);

  .title {
    z-index: 1;
  }

  picture:has(.element) {
    position: absolute;
    left: 50%;
    translate: -50% 0;
    bottom: 10px;
    height: 65%;
    width: 90%;

    .element {
      width: 100%;
      height: 100%;
    }
  }

  .back {
    height: 90%;
    width: fit-content;
    object-fit: cover;
    left: 0;
    bottom: 1rem;
    position: absolute;
  }

  @media (min-width: 900px) {
    h3.title {
      text-align: left;
    }

    picture:has(.element) {
      bottom: 1rem;
      display: flex;
      align-items: flex-end;
      min-height: 75%;
      width: 95%;
      .element {
        width: 100%;
        height: max-content;
      }
    }

    picture .element[alt="black scooter"] {
      height:100%;
    }
  }
`;

export default HomepageCard;
