import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import Seo from "../components/layout/header/Seo";
import { getVendeContent } from "../sanity/queries/pages/vende";
import { getSiteSettings } from "../sanity/queries/siteSettings";

export const getStaticProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["siteSettings"], getSiteSettings);
  await queryClient.prefetchQuery(["vendeContent"], getVendeContent);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
const Vende = () => {
  // TODO the data for the contact information (phone #, horario, etc) is in the siteSettings
  const { data: siteSettings } = useQuery(["siteSettings"], getSiteSettings);

  const { data: pageContent } = useQuery(["vendeContent"], getVendeContent);

  const { SEO } = pageContent;
  console.log({ pageContent });
  return (
    <>
      <Seo description={SEO.description} title={SEO.title}/>
      <StyledVende>
        <section className="hero">
          <h1>{pageContent.hero.blackText} <span className="title">{pageContent.hero.blueText}</span></h1>
        </section>
      </StyledVende>
    </>
  );
};

const StyledVende = styled.main`
  padding: 0 !important;

  .hero{
    span{
      color: var(--primary-blue);
    }
  }

`;

export default Vende;
