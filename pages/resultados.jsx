import styled from "@emotion/styled";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import { getAnyResultsFromText } from "../sanity/queries/pages/resultados";
import Filters from "../components/Resultados/Filters"

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
    <StyledResults>
      <SearchBar />
      {!searchResults.length ? (
        <h1>no se encontraron resultados</h1>
      ) : (
        <>
          <Filters></Filters>
          <ul>
            {searchResults.map((item, index) => (
              <ProductCard key={index} product={item} />
            ))}
          </ul>
        </>
      )}
    </StyledResults>
  );
};

const StyledResults = styled.main`
  padding-right: 1rem;
  ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(252px, 1fr));
    gap: 1rem;
    padding: 0;
    margin-top: 1rem;
    li {
      margin: 0 auto;
    }
  }
`;
export default Resultados;
