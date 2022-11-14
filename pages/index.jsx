import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import { getSiteSettings } from "../sanity/queries/siteSettings";
import SearchBar from "../components/SearchBar";
import Logo from "/public/logo.svg"
import BlueCity from "/public/homepageElements/blue-city.svg"
import BlueSedan from "/public/homepageElements/blue-sedan.svg"
import { getHomepageContent } from "../sanity/queries/pages/homepage";

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

  console.log({pageContent})
  return (
    <main>
      <Logo/>
      <BlueCity/>
      <BlueSedan/>
      <SearchBar/>
    </main>
  );
};

export default Homepage;
