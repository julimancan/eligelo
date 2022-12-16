import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import { getCatalogoContent } from "../sanity/queries/pages/catalogo";
import { getSiteSettings } from "../sanity/queries/siteSettings";
import Logo from "/public/logo.svg";
import { Inter } from "@next/font/google";
import SearchBar from "../components/SearchBar";
import styled from "@emotion/styled";
import Seo from "../components/layout/header/Seo";
import ProductSlider from "../components/catalogo/ProductSlider";
import LocalPictureComponent from "../components/LocalPictureComponent";

const inter = Inter();

export const getStaticProps = async (ctx) => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["siteSettings"], getSiteSettings);
  await queryClient.prefetchQuery(["catalogo"], getCatalogoContent);
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

const Catalogo = () => {
  const { data: pageContent } = useQuery(["catalogo"], getCatalogoContent);

  const { SEO } = pageContent;
  return (
    <>
      <Seo description={SEO.description} title={SEO.title} />
      <StyledCatalogo className={inter.className}>
        <header className="header">
          <LocalPictureComponent
            smallSrc="/backgrounds/catalogo-back.webp"
            largeSrc="/backgrounds/catalogo-back.webp"
            defaultSrc={"/backgrounds/catalogo-back.webp"}
            width={"627"}
            height="230"
            alt="blue-city"
            className="background"
          />
          <section className="header-content">
            <Logo className="logo" />
            <h3>{pageContent.slogan.slogan}</h3>
          </section>
          <SearchBar />
        </header>

        <section className="content">
          {pageContent.cars && (
            <ProductSlider
              products={pageContent.cars}
              link="/resultados?search=*carro*"
              productName="Carros"
            />
          )}

          {pageContent.motos && (
            <ProductSlider
              products={pageContent.motos}
              link="/resultados?search=*moto*"
              productName="Motos"
            />
          )}

          {pageContent.bikes && (
            <ProductSlider
              products={pageContent.bikes}
              link="/resultados?search=*bicicleta*"
              productName="Bicicletas"
            />
          )}

          {pageContent.scooters && (
            <ProductSlider
              products={pageContent.scooters}
              link="/resultados?search=*patineta*"
              productName="Patinetas"
            />
          )}
        </section>
      </StyledCatalogo>
    </>
  );
};

const StyledCatalogo = styled.main`
  padding: 0 !important;

  .header {
    text-align: center;
    padding: 0 1rem;
    margin-bottom: 0.7rem;
    position: relative;

    picture:has(.background) {
      .background {
        background-color: transparent;
        min-width: 17.25rem;
        width: 100%;
        height: max-content;
        object-fit: cover;
        object-position: center;
      }
    }
    .header-content {
      position: absolute;
      top: 0;
      left: 50%;
      width: 100%;
      transform: translateX(-50%);
      h3{
        color: var(--gray-2);
      }
      .logo {
        margin: 0.2rem auto;
      }
    }
    form {
      margin-top: -0.5rem;
      margin-bottom: 2rem;
    }
  }

  .content {
    padding: 1.5rem 1rem;
    min-height: 100vh;
    overflow-x: hidden;
  }

  @media (min-width: 900px) {
    .header {
      padding: 0 10%;

      .header-content {
        top: 1.2rem;
        h3 {
          font-style: normal;
          font-weight: 700;
          font-size: 48px;
          line-height: 58px;
        }
        svg.logo {
          width: 327.23px;
          height: 94.7px;
        }
      }

      picture:has(.background) {
        /* height: 40vh; */
        .background {
          width: 98%;
          height: 100%;
          margin: 0 auto;
        }
      }
    }
  }
`;

export default Catalogo;
