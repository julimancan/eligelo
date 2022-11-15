import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import { getSiteSettings } from "../sanity/queries/siteSettings";
import SearchBar from "../components/SearchBar";
import Logo from "/public/logo.svg";
import { getHomepageContent } from "../sanity/queries/pages/homepage";
import Seo from "../components/layout/header/Seo";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

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
          <Image src="/backgrounds/blue-city-homepage.webp" width={"627"} height="230" alt="blue-city" className="background" />
          <Image src="/vehicles/blue-sedan.webp" className="image" width={"520"} height="185" alt="blue-sedan"/>
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
            <Link className="product" href="/resultados?search=*carro*">
              <h3 className="title">Carros</h3>
              <Image src={"/backgrounds/car-prod-back.webp"} height="164" width={"130"} className="back" alt="blue city background"/>
              <Image src={"/vehicles/black-suv.webp"} height="81" width={"157"} className="element" alt="black suv"/>
            </Link>

            <Link className="product" href="/resultados?search=*moto*">
              <h3 className="title">Motos</h3>
              <Image src={"/backgrounds/moto-prod-back.webp"} height="164" width={"130"} className="back" alt="blue city background"/>
              <Image src={"/vehicles/prod-moto.webp"} height="81" width={"157"} className="element" alt="motorcycle"/>
            </Link>

            <Link className="product" href="/resultados?search=*bicicleta*">
              <h3 className="title">Bicicletas</h3>
              <Image src={"/backgrounds/bike-prod-back.webp"} height="164" width={"130"} className="back" alt="blue city background"/>
              <Image src={"/vehicles/white-bike.webp"} height="81" width={"157"} className="element" alt="white bicycle"/>
            </Link>

            <Link className="product" href="/resultados?search=*patineta*">
              <h3 className="title">Patinetas</h3>
              <Image src={"/backgrounds/scooter-prod-back.webp"} height="164" width={"130"} className="back" alt="blue city background"/>
              <Image src={"/vehicles/black-scooter.webp"} height="81" width={"157"} className="element" alt="black scooter"/>
            </Link>
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
      top: 1.5rem;
      left: 50%;
      width: 85%;
      text-align: center;
      transform: translateX(-50%);
      span {
        font-weight: inherit;
        font-size: inherit;
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
    box-shadow: var(--shadow);

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
