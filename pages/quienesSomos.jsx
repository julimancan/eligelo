import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import { getSiteSettings } from "../sanity/queries/siteSettings";
import { getQuienesSomosContent } from "../sanity/queries/pages/quienesSomos";


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

  console.log({quienesSomosContent});
  return (
    <div>
      Enter
    </div>
  );
}


export default QuienesSomos;