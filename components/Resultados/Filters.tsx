import styled from "@emotion/styled";
import Button from "../Button";

const Filters = () => {

  const filterHandler = () => {
    console.log("clicked")
  }
  return (
    <StyledFilters>
      <Button type="secondary" classNames="filter-button" onClick={filterHandler}>
        <>Filtros</>
      </Button>
    </StyledFilters>
  );
};


const StyledFilters = styled.section`
  /* background: red; */
  margin: 1rem 0;
  display: grid;
  /* justify-content: space-between; */
  /* grid-template-columns: 1fr 1fr 1fr; */
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

  gap: 1fr;
  .filter-button {
    place-self: end;
    /* right: 0; */
  }
`;


export default Filters;
