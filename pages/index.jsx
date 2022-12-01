import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import { getSiteSettings } from "../sanity/queries/siteSettings";
import SearchBar from "../components/SearchBar";
import Logo from "/public/logo.svg";
import { getHomepageContent } from "../sanity/queries/pages/homepage";
import Seo from "../components/layout/header/Seo";
import styled from "styled-components";
import HomepageCard from "../components/homepage/HomepageCard";
import LocalPictureComponent from "../components/LocalPictureComponent";

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
  return (
    <>
      <Seo description={SEO.description} title={SEO.title} />
      <StyledHomePage>
        <Logo className="logo" />
        <article className="hero">
          <LocalPictureComponent
            smallSrc="/backgrounds/blue-city-homepage.webp"
             largeSrc="/backgrounds/blue-city-homepage.webp"
             defaultSrc={"/backgrounds/blue-city-homepage.webp"}
            width={"627"}
            height="230"
            alt="blue-city"
            className="background"
          />
          {/* <Image
            src="/backgrounds/blue-city-homepage.webp"
            width={"627"}
            height="230"
            alt="blue-city"
            className="background"
          /> */}

          <LocalPictureComponent
            smallSrc="/vehicles/blue-sedan.webp"
            largeSrc="/vehicles/blue-sedan-desktop.webp"
            defaultSrc={"/vehicles/blue-sedan-desktop.webp"}
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
            <HomepageCard
              productName="Carros"
              link="/resultados?search=*carro*"
              background={{
                path: "/backgrounds/car-prod-back.webp",
                height: 258,
                width: 328,
              }}
              product={{
                path: "/vehicles/black-suv.webp",
                alt: "black suv",
                height: 81,
                width: 157,
              }}
            />

            <HomepageCard
              productName="Motos"
              link="/resultados?search=*moto*"
              background={{
                path: "/backgrounds/moto-prod-back.webp",
                height: 164,
                width: 130,
              }}
              product={{
                path: "/vehicles/prod-moto.webp",
                alt: "motorcycle",
                height: 104,
                width: 152,
              }}
            />

            <HomepageCard
              productName="Bicicletas"
              link="/resultados?search=*bicicleta*"
              background={{
                path: "/backgrounds/bike-prod-back.webp",
                height: 248,
                width: 222,
              }}
              product={{
                path: "/vehicles/white-bike.webp",
                alt: "white-bike",
                height: 154,
                width: 154,
              }}
            />

            <HomepageCard
              productName="Patinetas"
              link="/resultados?search=*patineta*"
              background={{
                path: "/backgrounds/scooter-prod-back.webp",
                height: 164,
                width: 130,
              }}
              product={{
                path: "/vehicles/black-scooter.webp",
                alt: "black scooter",
                height: 137,
                width: 105,
              }}
            />
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
      bottom: -1.5rem;
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
        min-width: max-content;
        width: fit-content;
        height: 18rem;
        min-height: 18rem;
        margin: 0 auto;

        margin-top: 2rem;
      }

      .image {
        width: 50%;
        height: max-content;
        bottom: -4rem;
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
        grid-auto-rows: 27vw;
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
