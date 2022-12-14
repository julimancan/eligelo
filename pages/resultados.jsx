import styled from "@emotion/styled";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import { getAnyResultsFromText } from "../sanity/queries/pages/resultados";

export const getServerSideProps = async ({ query }) => {
  const { search } = query;

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["searchResults"], () =>
    getAnyResultsFromText(search)
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

const Resultados = () => {
  const { query } = useRouter();
  const { search } = query;
  const { data: searchResults } = useQuery(["searchResults"], () =>
    getAnyResultsFromText(search)
  );
  console.log(searchResults);
  return (
    <main>
      <SearchBar resultsPage={true} />
      {!searchResults.length && <h1>no se encontraron resultados</h1>}
      <ul>
        {searchResults?.map((item, index) => (
          <li key={index}>
            <ProductCard product={item} />
          </li>
        ))}
      </ul>
    </main>
  );
};

const StyledResults = styled
export default Resultados;
