import { useRouter } from "next/router";
import BlueCarSearch from "/public/icons/blue-car-search.svg";
import styled from "styled-components";
import { Roboto } from "@next/font/google";
const roboto = Roboto({ weight: "500" });

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
    <StyledSearchBar onSubmit={handleSearch} className={roboto.className}>
      <BlueCarSearch class="icon" />
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
    </StyledSearchBar>
  );
};

const StyledSearchBar = styled.form`
  display: flex;
  justify-content: center;
  position: relative;

  .icon {
    position: absolute;
    left: 0.8rem;
    top: 50%;
    transform: translateY(-50%);
  }

  input {
    width: 100%;
    height: 2.5rem;
    border: none;
    padding: 12px 2.7rem;
    border-radius: 8px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;

    &:focus-visible {
      outline: none;
    }
  }
`;

export default SearchBar;
