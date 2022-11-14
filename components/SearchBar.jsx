import { useRouter } from "next/router";

const SearchBar = () => {
  const router = useRouter()
  console.log({router});

  const handleSearch = (event) => {
    event.preventDefault();
    const search = `*${event.target[0].value}*`;
    // if (router.pathname === "/resultados") {
    //   return router.reload({query: {search}})
    // }
    router.push({pathname: `/resultados/`, query: {search}, shallow: true})
  }
  return (
    <form onSubmit={handleSearch}>
      <input placeholder="¿Qué vehiculo estas buscando?" type="text" name="search"/>
      <input type="submit" />
    </form>
  );
}

export default SearchBar;