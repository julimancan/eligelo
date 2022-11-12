import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import { getSiteSettings } from "../sanity/queries/siteSettings";

export const getStaticProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["siteSettings"], getSiteSettings)
  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    },
  };
};



const Homepage = () => {
  const {data: siteSettings} = useQuery(["siteSettings"], getSiteSettings)
  console.log({siteSettings})
  return <div>Enter</div>;
};

export default Homepage;
