import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import { getSiteSettings } from "../sanity/queries/siteSettings";
import Seo from "../components/layout/header/Seo";
import SearchBar from "../components/SearchBar";

export const getStaticProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["siteSettings"], getSiteSettings);
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

const Homepage = () => {
  // const { data: siteSettings } = useQuery(["siteSettings"], getSiteSettings);
  // console.log({ siteSettings });
  return (
    <main>
      {/* <Seo title={siteSettings.SEO.title} /> */}
      {/* {siteSettings.SEO.title} */}
      {/* {siteSettings.SEO.description} */}
      {/* Eligelo */}
      <SearchBar/>
    </main>
  );
};

export default Homepage;
