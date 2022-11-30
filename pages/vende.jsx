import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import { getVendeContent } from "../sanity/queries/pages/vende";
import { getSiteSettings } from "../sanity/queries/siteSettings";

export const getStaticProps = async () => {

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["siteSettings"], getSiteSettings)
  await queryClient.prefetchQuery(["vendeContent"], getVendeContent)

  return {
    props:{
      dehydratedState: dehydrate(queryClient)
    }
  }
};
const Vende = () => {
  // TODO the data for the contact information (phone #, horario, etc) is in the siteSettings
  const {data: siteSettings} = useQuery(["siteSettings"], getSiteSettings)

  const {data: pageContent} = useQuery(["vendeContent"], getVendeContent)

  console.log({pageContent})
  return <div>Enter</div>;
};

export default Vende;
