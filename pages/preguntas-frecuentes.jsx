import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import { getFaqContent } from "../sanity/queries/pages/preguntasFrecuentes";
import { getSiteSettings } from "../sanity/queries/siteSettings";

export const getStaticProps = async (ctx) => {

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["siteSettings"], getSiteSettings)
  await queryClient.prefetchQuery(["faq"], getFaqContent)

  return {
    props:{
      dehydratedState: dehydrate(queryClient)
    }
  }
}

const PreguntasFrecuentes = () => {
  const {data: faqContent} = useQuery(["faq"], getFaqContent);

  console.log({faqContent})
  return (
    <main>
      Enter
    </main>
  );
}


export default PreguntasFrecuentes;