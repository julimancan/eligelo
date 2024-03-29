import { useRouter } from "next/router";
import BlueCarSearch from "/public/icons/blue-car-search.svg";
import SearchIcon from "/public/icons/search.svg";
import { Roboto } from "@next/font/google";
import styled from "@emotion/styled";
import { useState } from "react";

const roboto = Roboto({ weight: "500" });

const SearchBar = () => {
  const router = useRouter();
  const search = router.query.search?.split("*")[1];
  // console.log({router});
  

  const [searchParams, setSearchParams] = useState(search);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const button = document.getElementById("search")
    button.click()
  }
  return (
    <StyledSearchBar className={roboto.className}
      onSubmit={handleFormSubmit}
    >
      <BlueCarSearch className="icon" />
      
      <input
        placeholder="¿Qué vehiculo estas buscando?"
        type="text"
        name="search"
        value={searchParams}
        onChange={(event) => setSearchParams(event.currentTarget.value)}
      />
      <button className="button">
        <SearchIcon className="icon" />
        <a href={`/resultados?search=*${searchParams || ""}*`} id="search">Buscar</a>
      </button>
    </StyledSearchBar>
  );
};

const StyledSearchBar = styled.form`
  display: flex;
  justify-content: center;
  position: relative;
  filter: drop-shadow(0px 16px 32px rgba(38, 50, 56, 0.08))
    drop-shadow(0px 8px 16px rgba(38, 50, 56, 0.09))
    drop-shadow(0px 4px 8px rgba(38, 50, 56, 0.1))
    drop-shadow(0px 2px 4px rgba(38, 50, 56, 0.11))
    drop-shadow(0px 0px 2px rgba(38, 50, 56, 0.12));

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
    input {
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
      .icon {
        left: 3.6rem;
      }
    }
  }
`;

export default SearchBar;
