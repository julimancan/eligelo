import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import { getSiteSettings } from "../sanity/queries/siteSettings";
import { getQuienesSomosContent } from "../sanity/queries/pages/quienesSomos";
import Seo from "../components/layout/header/Seo";
import styled from "styled-components";


export const getStaticProps = async (ctx) => {

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["siteSettings"], getSiteSettings);
  await queryClient.prefetchQuery(["quienesSomosContent"], getQuienesSomosContent)

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}


const QuienesSomos = () => {
  const {data: quienesSomosContent} = useQuery(["quienesSomosContent"], getQuienesSomosContent)

  const {SEO}= quienesSomosContent;
  console.log({quienesSomosContent});
  return (
    <>
      <Seo description={SEO.description} title={SEO.title}/>
      <StyledQuienesSomos>
        <h1 className="title">{quienesSomosContent.hero.title}</h1>
      </StyledQuienesSomos>
    </>
  );
}

const StyledQuienesSomos = styled.main`

`;


export default QuienesSomos;