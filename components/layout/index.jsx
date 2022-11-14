import styled from "@emotion/styled";
import { useRouter } from "next/router";
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
  const {pathname} = useRouter()
  console.log(pathname.includes("admin"));
  return (
    <StyledLayout>
      {!pathname.includes("admin") && <Header />}
      {children}
    </StyledLayout>
  );
};

export default Layout;
