import Link from "next/link";
import React from "react";
import styled from "styled-components";
import ProductCard from "../ProductCard";

const ProductSlider = ({ products, link, productName }) => {
  return (
    <StyledProductSlider>
      <header className="header-product">
        <h3>{productName}</h3>
        <Link href={`${link}`}>Ver mas</Link>
      </header>
      <ul className="list-products">
        {products.map((product, index) => (
          <ProductCard
            key={`${product.brand.name}${index}}`}
            product={product}
          />
        ))}
      </ul>
    </StyledProductSlider>
  );
};

const StyledProductSlider = styled.article`
  padding: 0;
  .header-product {
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-between;
    color: var(--dark-gray);
    h3 {
      font-size: 24px;
    }
    a {
      font-size: 16px;
      line-height: 24px;
      font-weight: 500;
      text-decoration-line: underline;
      color: var(--primary-blue);
    }
  }
  .list-products {
    padding-inline-start: 0;
    padding-right: 2.5rem;
    padding-bottom: 2rem;
    display: flex;
    width: 100vw;
    flex-wrap: nowrap;
    gap: 1rem;
    overflow-x: auto;
    &::-webkit-scrollbar {
      display: none;
    }
  }

  @media (min-width: 900px) {
    .header-product {
      margin-bottom: 1.5rem;
      h3 {
        font-weight: 700;
        font-size: 48px;
        line-height: 58px;
      }
    }
    .list-products{
      padding-bottom: 3rem;
    }
  }
`;

export default ProductSlider;
