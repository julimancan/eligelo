import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import { getSiteSettings } from "../sanity/queries/siteSettings";
import SearchBar from "../components/SearchBar";
import Logo from "/public/logo.svg";
import BlueCity from "/public/homepageElements/blue-city.svg";
import BlueSedan from "/public/homepageElements/blue-sedan.svg";
import { getHomepageContent } from "../sanity/queries/pages/homepage";
import Seo from "../components/layout/header/Seo";
import styled from "styled-components";
import CarProductBack from "/public/homepageElements/car-product-background.svg";
import CarProduct from "/public/homepageElements/car-product.svg";
import MotoProductBack from "/public/homepageElements/moto-product-background.svg";
import MotoProduct from "/public/homepageElements/moto-product.svg";
import BiciProductBack from "/public/homepageElements/bici-product-background.svg";
import BiciProduct from "/public/homepageElements/bici-product.svg";
import PatinetaProductBack from "/public/homepageElements/patineta-product-background.svg";
import PatinetaProduct from "/public/homepageElements/patineta-product.svg";

export const getStaticProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["siteSettings"], getSiteSettings);
  await queryClient.prefetchQuery(["homepage"], getHomepageContent);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

const Homepage = () => {
  const { data: siteSettings } = useQuery(["siteSettings"], getSiteSettings);
  const { data: pageContent } = useQuery(["homepapge"], getHomepageContent);

  if (!pageContent || !siteSettings) return;

  const { SEO } = pageContent;
  console.log({ pageContent });
  return (
    <>
      <Seo description={SEO.description} title={SEO.title} />
      <StyledHomePage>
        <Logo className="logo" />
        <article className="hero">
          <BlueCity className="background" />
          <BlueSedan className="image" />
          <section>
            <h1 className="title">
              {pageContent.hero.blackText}
              <span>{pageContent.hero.blueText}</span>
            </h1>
          </section>
        </article>

        <section className="search">
          <SearchBar />
        </section>

        <section className="products-section">
          <h2 className="title">{pageContent.productsTitle}</h2>
          <section className="products">
            <section className="product">
              <h3>Carros</h3>
              <CarProductBack className="back"/>
              <CarProduct className="element"/>
            </section>

            <section className="product">
              <h3>Motos</h3>
              <MotoProductBack className="back"/>
              <MotoProduct className="element"/>
            </section>

            <section className="product">
              <h3>Bicicletas</h3>
              <BiciProductBack className="back"/>
              <BiciProduct className="element"/>
            </section>

            <section className="product">
              <h3>Patinetas</h3>
              <PatinetaProductBack className="back"/>
              <PatinetaProduct className="element"/>
            </section>
          </section>
        </section>
      </StyledHomePage>
    </>
  );
};

const StyledHomePage = styled.main`
  padding: 0 !important;

  .logo {
    margin: 0 auto;
  }

  .hero {
    position: relative;
    &::after {
      content: "";
      display: block;
      height: 3.5rem;
      width: 100%;
      background-color: var(--primary-blue);
    }
    .title {
      position: absolute;
      top: 0;
      left: 50%;
      width: 90%;
      text-align: center;
      transform: translateX(-50%);
      span {
        color: var(--primary-blue);
      }
    }
    .image {
      position: absolute;
      bottom: -5%;
    }
  }

  .search {
    padding: 1rem;
    background-color: var(--primary-blue);
  }
  .products-section{
    padding: 1rem 1rem 4.3rem;
    background-color: var(--primary-blue);
    color: var(--light-gray);
  
    .title{
      padding-bottom: 1.3rem;
    }

    .products {
      display: grid;
      display: grid;
      gap: 1rem;
      grid-auto-rows: 12.188rem;
      grid-template-columns: repeat(auto-fit, minmax(10.25rem, 1fr));
    }
  }

  .product{
    background-color: var(--blue-2);
    border-radius: 8px;
    padding: 1rem 1rem .1rem;
    position: relative;
    display: flex;
    overflow: hidden;
    flex-direction: column;
    justify-content: space-between;

    h3{
      z-index: 1;
    }

    .element{
      position: sticky;
    }
    
    .back{
      height: 90%;
      left: 0;
      bottom: 1rem;
      position: absolute;
    }
  }
`;

export default Homepage;
