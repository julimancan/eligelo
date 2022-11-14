import styled from "@emotion/styled";
import Header from "./header";

const StyledLayout = styled.div`
  min-height: 100vh;
  div[data-ui="ToolScreen"] {
    height: 100vh;
    svg[data-sanity-icon] {
      min-width: 2rem;
    }
  }
  main {
    margin-top: 1rem;
    /* padding-top: 2.5rem; */
    padding-left: 1rem;
  }
`;
const Layout = ({ children }) => {
  return (
    <StyledLayout>
      <Header />
      {children}
    </StyledLayout>
  );
};

export default Layout;
