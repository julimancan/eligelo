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

          <article className="section">
            <section className="header">
              <h3>Carros</h3>
              <Link href="/">ver mas</Link>
            </section>
            <div className="list-products">
              {pageContent.cars.map((car, index) => (
                <Card key={`${car.brand.name}${index}}`} />
              ))}
            </div>
          </article>
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
    /* padding-right: 0; */
    background-color: var(--primary-blue);
    min-height: 100vh;
    overflow-x: hidden;

    .section {
      padding: 1rem 0;
      .header {
        display: flex;
        justify-content: space-between;
      }
      .list-products {
        padding-inline-start: 0;
        display: flex;
        width: 100vw;
        flex-wrap: nowrap;
        gap: 1rem;
        overflow: auto;
        &::-webkit-scrollbar {
          display: none;
        }
      }
    }
  }
`;

export default Catalogo;
