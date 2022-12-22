import styled from "@emotion/styled";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import { getAnyResultsFromText } from "../sanity/queries/pages/resultados";
import Filters from "../components/Resultados/Filters";
import { useState } from "react";

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

  const [results, setResults] = useState(searchResults);

  return (
    <StyledResults>
      <section className="search">
        <SearchBar />
      </section>
      {!searchResults.length ? (
        <h1>no se encontraron resultados</h1>
      ) : (
        <section className="main-content">
          <Filters
            results={results}
            setResults={setResults}
          />
          <ul className="product-list">
            {results.map((item, index) => (
              <ProductCard
                key={index}
                product={item}
              />
            ))}
          </ul>
        </section>
      )}
    </StyledResults>
  );
};

const StyledResults = styled.main`
  padding: 0 !important;
  padding-right: 1rem;
  position: relative;
  min-height: 45vh;

  .product-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, 252px);
    gap: 1rem;
    padding: 0;
    margin: 1rem 0;
    place-content: center;
    li {
      margin: 0 auto;
    }
  }

  @media (min-width: 900px) {
    .search{
      padding: 2.5rem 10% 0;
    }

    .main-content {
      display: flex;
      padding: 2.5rem 0 0 2.5rem;
      gap: 4rem;
    }
    .product-list {
      flex: 1;
      grid-template-columns: repeat(auto-fit, 252px);
      grid-auto-rows: min-content;
      place-items: center start;
      place-content: unset;
    }
  }
`;
export default Resultados;
