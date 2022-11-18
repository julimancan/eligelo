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
          <Image
            src="/backgrounds/blue-city-homepage.webp"
            width={"627"}
            height="230"
            alt="blue-city"
            className="background"
          />

          <Image
            src="/vehicles/blue-sedan.webp"
            className="image"
            width={"520"}
            height="185"
            alt="blue-sedan"
          />
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

              <Image
                src={"/backgrounds/car-prod-back.webp"}
                height="258"
                width={"328"}
                className="back"
                alt="blue city background"
              />

              <Image
                src={"/vehicles/black-suv.webp"}
                height="81"
                width={"157"}
                className="element"
                alt="black suv"
              />
            </Link>

            <Link className="product" href="/resultados?search=*moto*">
              <h3 className="title">Motos</h3>

              <Image
                src={"/backgrounds/moto-prod-back.webp"}
                height="164"
                width={"130"}
                className="back"
                alt="blue city background"
              />

              <Image
                src={"/vehicles/prod-moto.webp"}
                height="104"
                width={"152"}
                className="element"
                alt="motorcycle"
              />
            </Link>

            <Link className="product" href="/resultados?search=*bicicleta*">
              <h3 className="title">Bicicletas</h3>

              <Image
                src={"/backgrounds/bike-prod-back.webp"}
                height="248"
                width={"222"}
                className="back"
                alt="blue city background"
              />

              <Image
                src={"/vehicles/white-bike.webp"}
                height="154"
                width={"154"}
                className="element"
                alt="white bicycle"
              />
            </Link>

            <Link className="product" href="/resultados?search=*patineta*">
              <h3 className="title">Patinetas</h3>

              <Image
                src={"/backgrounds/scooter-prod-back.webp"}
                height="164"
                width={"130"}
                className="back"
                alt="blue city background"
              />
              <Image
                src={"/vehicles/black-scooter.webp"}
                height="137"
                width={"105"}
                className="element scooter"
                alt="black scooter"
              />
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
    .background {
      width: 100%;
      object-fit: cover;
      object-position: center;
    }
    .image {
      position: absolute;
      right: 0;
      width: fit-content;
      bottom: -5%;
    }
  }

  .search {
    padding: 1rem;
    background-color: var(--primary-blue);
  }
  .products-section {
    padding: 1rem 1rem 4.3rem;
    background-color: var(--primary-blue);
    color: var(--light-gray);

    .title {
      padding-bottom: 1.3rem;
    }

    .products {
      display: grid;
      gap: 1rem;
      grid-auto-rows: 12.188rem;
      grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
    }
  }

  .product {
    background-color: var(--blue-2);
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
  }

  @media (min-width: 900px) {
    .title {
      font-size: 30px;
      line-height: 40px;
    }

    .search {
      padding: 3rem 10% 1rem;
    }

    .logo {
      display: none;
    }

    .hero {
      .background {
        width: max-content;
        height: 18rem;
        margin: 0 auto;
        margin-top: 2rem;
      }

      .image {
        width: 50%;
        height: max-content;
        bottom: -10%;
      }
      .title {
        top: 10%;
        left: 23rem;
        width: 670px;
      }
    }
    .products-section {
      padding: 2.5rem;
      .title {
        padding-bottom: 3.625rem;
      }
      .products {
        gap: 1rem;
        grid-auto-rows: 24.375rem;
      }
    }
    .product {
      .title {
        text-align: left;
      }

      .element {
        width: 100%;
        height: max-content;
      }
      .element.scooter {
        width: 210px;
      }

      .back {
      }
    }
  }

  @media (min-width: 1200px) {
    .title {
      font-size: 48px;
      line-height: 58px;
      text-align: center;
    }
  }
`;

export default Homepage;
