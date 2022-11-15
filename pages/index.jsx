import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import { getSiteSettings } from "../sanity/queries/siteSettings";
import SearchBar from "../components/SearchBar";
import Logo from "/public/logo.svg";
import BlueCity from "/public/homepageElements/blue-city.svg";
import BlueSedan from "/public/homepageElements/blue-sedan.svg";
import { getHomepageContent } from "../sanity/queries/pages/homepage";
import Seo from "../components/layout/header/Seo";
import styled from "styled-components";

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
        <Logo className="logo"/>
        <article className="hero">
          <BlueCity className="background"/>
          <BlueSedan className="image"/>
          <section>
            <h1 className="title">
              {pageContent.hero.blackText}
              <span>{pageContent.hero.blueText}</span>
            </h1>
          </section>
        </article>

        <SearchBar />

        <article className="products">
          <h2>{pageContent.productsTitle}</h2>
          <section className="product">
            <h3>Carros</h3>
          </section>

          <section className="product">
            <h3>Motos</h3>
          </section>

          <section className="product">
            <h3>Bicicletas</h3>
          </section>

          <section className="product">
            <h3>Patinetas</h3>
          </section>
        </article>
      </StyledHomePage>
    </>
  );
};

const StyledHomePage = styled.main`
  padding: 0 !important;

  .logo{
    margin: 0 auto;
  }
  
  .hero {
    position: relative;
    &::after{
      content: '';
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
      span{
        color: var(--primary-blue);
      }
    }
    .image{
      position: absolute;
      bottom: -5%;
    }
  }
`;

export default Homepage;
