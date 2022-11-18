import { useRouter } from "next/router";
import BlueCarSearch from "/public/icons/blue-car-search.svg";
import SearchIcon from "/public/icons/search.svg";
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
      <BlueCarSearch className="icon" />
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
      <button className="button"><SearchIcon className="icon"/>Buscar</button>
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

  .button {
    display: none;
  }

  @media (min-width: 900px) {
    input{
      border-radius: 8px 0 0 8px;
    }
    .button {
      position: relative;
      display: block;
      cursor: pointer;
      border-radius: 0 8px 8px 0;
      border: none;
      min-width: 213px;
      font-weight: 500;
      background-color: var(--btn-color);
      color: var(--light-gray);
      .icon{
        left: 3.6rem;
      }
    }
  }
`;

export default SearchBar;
