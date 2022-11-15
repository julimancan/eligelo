import Image from "next/image";
import React from "react";
import styled from "styled-components";
import Button from "./Button";

const Card = ({ content, type = "vertical" }) => {
  return (
    <StyledCard className={type}>
      {content.image ? (
        <Image
          src={content.image.image}
          className="image"
          alt=""
          width={200}
          height={200}
        />
      ) : (
        <div className="image"></div>
      )}
      <section className="information">
        <section className="about">
          <h2>
            {content.brand.name} {content.model.name}
          </h2>
          <div className="tags">
            {content.year && <p className="year">{content.year}</p>}
            {content.mileage && <p className="mileage">{content.mileage} km</p>}
          </div>
          <h3 className="price">${content.price}COP</h3>
        </section>
        <section className="contact">
          <p>Contacta con el vendedor:</p>
          <Button type="secondary">Más información</Button>
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
  display: flex;

  .information {
    padding: 1rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: var(--light-gray);

    .about {
      h2 {
        font-size: 0.875rem;
      }
      .tags {
        display: flex;
        gap: .25rem;
        padding: 0.5rem 0;

        p {
          padding: 0.2rem 0.5rem;
          background-color: var(--light-gray);
          border-radius: 8px;
          color: var(--gray);
        }
      }
      .price {
        font-weight: 800;
        font-size: 1rem;
        line-height: 1.25rem;
      }
    }

    .contact {
      p {
        padding-bottom: 0.5rem;
        font-weight: 700;
        font-size: 12px;
        line-height: 20px;
      }
      button {
        width: 100%;
      }
    }
  }

  &.vertical {
    flex-direction: column;
    min-width: 252px;
    width: 252px;
    height: 346px;

    .image {
      width: 100%;
      min-height: 42%;
      object-fit: cover;
    }
  }

  &.horizontal {
    flex-direction: row;
    justify-content: space-between;
    min-width: 343px;
    width: 343px;
    height: 160px;
    .image {
      width: 45%;
      min-height: 100%;
      object-fit: cover;
    }

    .information{
      padding: .5rem;
      align-items: flex-end;
      text-align: end;
      .tags{
        justify-content: flex-end;
        padding: 0.25rem 0;
      }
      .price{
        font-size: 0.875rem;
      }
    }

    .contact{
      p{
        padding-bottom: 0.25rem;
      }
    }
  }

`;

export default Card;
