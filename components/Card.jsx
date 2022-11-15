import Image from "next/image";
import React from "react";
import styled from "styled-components";
import Button from "./Button";

const Card = ({ content }) => {
  return (
    <StyledCard>
      {content.image? (
        <Image
          src={content.image.image}
          className="image"
          alt=""
          width={200}
          height={200}
        />): <div className="image"></div>
      }
      <section className="information">
        <section className="about">
          <h2>
            {content.brand.name} {content.model.name}
          </h2>
          <div className="tags">
            <p className="year">{content.year}</p>
            <p className="mileage">{content.mileage} km</p>
          </div>
          <h3>${content.price}COP</h3>
        </section>
        <section className="contact">
          <p>Contacta con el vendedor:</p>
          <Button>Más información</Button>
        </section>
      </section>
    </StyledCard>
  );
};

const StyledCard = styled.div`
  background-color: var(--blue-2);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: var(--shadow);
  min-width: 252px;
  width: 252px;
  height: 346px;
  display: flex;
  flex-direction: column;

  .image {
    width: 100%;
    min-height: 50%;
    object-fit: cover;
  }

  .information {
    padding: 1rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .tags {
      display: flex;
      gap: 1rem;
    }
  }
`;

export default Card;
