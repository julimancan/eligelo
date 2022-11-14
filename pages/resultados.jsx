import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
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
  const {query} = useRouter();
  const {search} = query;
  const { data: searchResults } = useQuery(["searchResults"], () =>
    getAnyResultsFromText(search)
  );
  return (
    <main>
      <SearchBar resultsPage={true}/>
      {searchResults?.map((item, index) => (
        <div key={index}>
          <h1>{item.brand?.name}</h1>
          <h2>{item.model?.name}</h2>
          <p>{item._type}</p>
        </div>
      ))}
    </main>
  );
};

export default Resultados;
