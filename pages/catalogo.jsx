import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import { getCatalogoContent } from "../sanity/queries/pages/catalogo";
import { getSiteSettings } from "../sanity/queries/siteSettings";
import Logo from "/public/logo.svg";
import { Inter } from "@next/font/google";
import SearchBar from "../components/SearchBar";
import styled from "styled-components";
import Seo from "../components/layout/header/Seo";
import Link from "next/link";
import CatalogoCard from "../components/catalogo/CatalogoCard";
import SliderProducts from "../components/catalogo/SliderProducts";

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
          <Logo className="logo" />
          <h3>{pageContent.slogan.slogan}</h3>
        </header>

        <section className="content">
          <SearchBar />

          {pageContent.cars && (
            <SliderProducts products={pageContent.cars} link="/" productName="Carros"/>
          )}

          {pageContent.motos && (
            <SliderProducts products={pageContent.motos} link="/" productName="Motos"/>
          )}

          {pageContent.bikes && (
            <SliderProducts products={pageContent.bikes} link="/" productName="Bicicletas"/>
          )}

          {pageContent.scooters && (
            <SliderProducts products={pageContent.scooters} link="/" productName="Patinetas"/>
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
  }
`;

export default Catalogo;
