import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import { getCatalogoContent } from "../sanity/queries/pages/catalogo";
import { getSiteSettings } from "../sanity/queries/siteSettings";
import Logo from "/public/logo.svg"
import {Inter} from "@next/font/google"
import SearchBar from "../components/SearchBar";

const inter = Inter()

export const getStaticProps = async (ctx) => {

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["siteSettings"], getSiteSettings)
  await queryClient.prefetchQuery(["catalogo"], getCatalogoContent)
  return {
    props:{
      dehydratedState: dehydrate(queryClient)
    }
  }
}


const Catalogo = () => {
  const {data: pageContent} = useQuery(["catalogo"], getCatalogoContent);

  console.log(pageContent)
  return (
    <main className={inter.className}>
      <Logo />
      <h3>{pageContent.slogan.slogan}</h3>
      <SearchBar />
    </main>
  );
}

export default Catalogo;