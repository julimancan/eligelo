import Image from "next/image";
import Button from "./Button";
import styled from "@emotion/styled";


interface Brand {
  name: string
}
interface Model {
  name: string
}
interface ProductInt {
  image: string
  brand: Brand
  model: Model
  year: number
  mileage: number
  price: number
}

type ProductCardProps = {
  type?: "vertical",
  product: ProductInt,

}

const ProductCard = ({ product, type = "vertical" }: ProductCardProps) => {
  return (
    <StyledCard className={type}>
      {product.image ? (
        <Image
          src={product.image}
          className="image"
          alt={`${product.year} - ${product.brand.name} - ${product.model.name}`}
          width={200}
          height={200}
        />
      ) : (
        <div className="image"></div>
      )}
      <section className="information">
        <section className="about">
          <h2>
            {product.brand.name} {product.model.name}
          </h2>
          <div className="tags">
            {product.year && <p className="year">{product.year}</p>}
            {product.mileage && <p className="mileage">{product.mileage} km</p>}
          </div>
        </section>
        <h3 className="price">${product.price.toLocaleString()} COP</h3>
        <section className="contact">
          <Button type="secondary">Más información</Button>
        </section>
      </section>
    </StyledCard>
  );
};

const StyledCard = styled.li`
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 5px 15px rgba(31, 31, 31, 0.15);
  display: flex;

  .information {
    padding: 1rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: var(--dark-gray);

    .about {
      h2 {
        font-weight: 700;
        font-size: 14px;
        line-height: 20px;
      }
      .tags {
        display: flex;
        gap: 0.25rem;
        padding: 0.5rem 0;

        p {
          box-shadow: 0px 4px 8px rgba(38, 50, 56, 0.1),
            0px 2px 4px rgba(38, 50, 56, 0.11),
            0px 0px 2px rgba(38, 50, 56, 0.12);
          border-radius: 4px;
          color: var(--gray);
          font-size: 10px;
          line-height: 16px;
          font-weight: 500;
          padding: 0.25rem 0.5rem;
        }
      }
    }
    .price {
      flex: 1;
      padding-top: 1rem;
      font-weight: 800;
      font-size: 1rem;
      line-height: 1.25rem;
    }

    .contact {
      button {
        background-color: var(--primary-blue);
        color: var(--light-gray);
        box-shadow: 0px 4px 8px rgba(38, 50, 56, 0.1),
          0px 2px 4px rgba(38, 50, 56, 0.11), 0px 0px 2px rgba(38, 50, 56, 0.12);
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
      min-height: 45%;
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

    .information {
      padding: 0.5rem;
      align-items: flex-end;
      text-align: end;
      .tags {
        justify-content: flex-end;
        padding: 0.25rem 0;
      }
      .price {
        font-size: 0.875rem;
      }
    }

    .contact {
      p {
        padding-bottom: 0.25rem;
      }
    }
  }

  @media (min-width: 900px){
    .information{
      padding: 1.25rem;
    }
  }
`;

export default ProductCard;
