import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import { getCatalogoContent } from "../sanity/queries/pages/catalogo";
import { getSiteSettings } from "../sanity/queries/siteSettings";
import Logo from "/public/logo.svg";
import { Inter } from "@next/font/google";
import SearchBar from "../components/SearchBar";
import styled from "styled-components";
import Seo from "../components/layout/header/Seo";
import Link from "next/link";
import Card from "../components/Card";

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
  console.log(pageContent);
  return (
    <>
      <Seo description={SEO.description} title={SEO.title} />
      <StyledCatalogo className={inter.className}>
        <header className="header">
          <Logo className="logo" />
          <h3>{pageContent.slogan.slogan}</h3>
        </header>

        <section className="content">
          <SearchBar />

          {pageContent.cars && (
            <article className="section">
              <section className="header">
                <h3>Carros</h3>
                <Link href="/">ver mas</Link>
              </section>
              <div className="list-products">
                {pageContent.cars.map((car, index) => (
                  <Card key={`${car.brand.name}${index}}`} content={car} />
                ))}
              </div>
            </article>
          )}

          {pageContent.motos && (
            <article className="section">
              <section className="header">
                <h3>Motos</h3>
                <Link href="/">ver mas</Link>
              </section>
              <div className="list-products">
                {pageContent.motos.map((moto, index) => (
                  <Card key={`${moto.brand.name}${index}}`} content={moto} />
                ))}
              </div>
            </article>
          )}

          {pageContent.bikes && (
            <article className="section">
              <section className="header">
                <h3>Bicicletas</h3>
                <Link href="/">ver mas</Link>
              </section>
              <div className="list-products">
                {pageContent.bikes.map((bike, index) => (
                  <Card key={`${bike.brand.name}${index}}`} content={bike} />
                ))}
              </div>
            </article>
          )}

          {pageContent.scooters && (
            <article className="section">
              <section className="header">
                <h3>Patinetas</h3>
                <Link href="/">ver mas</Link>
              </section>
              <div className="list-products">
                {pageContent.scooters.map((scooter, index) => (
                  <Card
                    key={`${scooter.brand.name}${index}}`}
                    content={scooter}
                  />
                ))}
              </div>
            </article>
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
    margin-bottom: 0.7rem;
    .logo {
      margin: 0.2rem auto;
    }
  }

  .content {
    padding: 1.5rem 1rem;
    background-color: var(--primary-blue);
    min-height: 100vh;
    overflow-x: hidden;

    form {
      margin-bottom: 1.5rem;
    }

    .section {
      padding: 0;
      .header {
        margin-bottom: 1rem;
        display: flex;
        justify-content: space-between;
        color: var(--light-gray);
        h3 {
          font-size: 24px;
        }
        a {
          font-size: 16px;
          line-height: 24px;
          text-decoration-line: underline;
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
    }
  }
`;

export default Catalogo;
