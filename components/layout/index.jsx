import styled from "@emotion/styled";
import Header from "./header";

const StyledLayout = styled.div`
  min-height: 100vh;
  div[data-ui="ToolScreen"] {
    height: 100vh;
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
