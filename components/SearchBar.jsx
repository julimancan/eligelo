import { useRouter } from "next/router";

const SearchBar = ({ resultsPage = false }) => {
  const router = useRouter();

  const handleSearch = (event) => {
    event.preventDefault();
    let search = "";

    if (event.type === "change") {
      search = `*${event.target.value}*`;
    } else {
      search = `*${event.target[0].value}*`;
    }
    router.push({ pathname: `/resultados/`, query: { search }, shallow: true });
  };
  return (
    <form onSubmit={handleSearch}>
      {resultsPage ? (
        <input
          placeholder="¿Qué vehiculo estas buscando?"
          type="text"
          name="search"
          onChange={handleSearch}
        />
      ) : (
        <input
          placeholder="¿Qué vehiculo estas buscando?"
          type="text"
          name="search"
        />
      )}
    </form>
  );
};

export default SearchBar;
