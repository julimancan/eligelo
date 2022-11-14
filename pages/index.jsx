import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import { getSiteSettings } from "../sanity/queries/siteSettings";
import SearchBar from "../components/SearchBar";
import Logo from "/public/logo.svg"
import BlueCity from "/public/homepageElements/blue-city.svg"
import BlueSedan from "/public/homepageElements/blue-sedan.svg"
import { getHomepageContent } from "../sanity/queries/pages/homepage";
import Seo from "../components/layout/header/Seo";
import styled from "styled-components";

export const getStaticProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["siteSettings"], getSiteSettings);
  await queryClient.prefetchQuery(["homepage"], getHomepageContent)

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

const Homepage = () => {
  // const { data: siteSettings } = useQuery(["siteSettings"], getSiteSettings);
  // console.log({ siteSettings });
  const {data: pageContent} = useQuery(["homepapge"], getHomepageContent);

  const {SEO} = pageContent;
  console.log({pageContent})
  return (
    <>
      <Seo description={SEO.description} title={SEO.title} />
      <StyledHomePage>
        <Logo/>
        <article className="hero">
          <BlueCity/>
          <BlueSedan/>
          <section>
            <h1>{pageContent.hero.blackText}<span>{pageContent.hero.blueText}</span></h1>
          </section>
        </article>

        <SearchBar/>

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
`

export default Homepage;
