import styled from "@emotion/styled";
import Header from "./header";

const StyledLayout = styled.div`
  /* background-color: red; */
  min-height: 100vh;
`;
const Layout = ({ children }) => {
  return (
    <StyledLayout>
      <div className="">
        <Header />
        {children}
      </div>
    </StyledLayout>
  );
};

export default Layout;
