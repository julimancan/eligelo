import Image from "next/image";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

const HomepageCard = ({ productName, link, background, product }) => {
  return (
      <StyledProductItem href={link}>
        <h3 className="title">{productName}</h3>

        <Image
          src={background.path}
          alt="blue city background"
          height={background.height}
          width={background.width}
          className="back"
        />

        <Image
          src={product.path}
          alt={product.alt}
          height={product.height}
          width={product.width}
          className="element"
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

  .element {
    position: sticky;
    align-self: center;
    bottom: 0;
    object-fit: fill;
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
    .title {
      text-align: left;
    }

    .element {
      width: 100%;
      height: max-content;
    }
    .element[alt="black scooter"] {
      width: 210px;
    }
  }
`;

export default HomepageCard;
