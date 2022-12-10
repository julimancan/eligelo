import styled from "@emotion/styled";
import Link from "next/link";
import { useState } from "react";
import Button from "../../Button";
import Burger from "./Burger";
import MobileNavModal from "./MobileNavModal";
import ModalContent from "./ModalContent";
import { Roboto } from "@next/font/google";
import Navbar from "./Navbar";

const roboto = Roboto({ weight: "500" });
const StyledNav = styled.nav`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 11;
  background-color: var(--nav-bg-color);
  height: 40px;
  width: 100%;
  padding: 2rem 1rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  .links {
    display: flex;
    align-items: center;
    gap: 2rem;
    a[href="/catalogo"] {
      color: var(--primary-blue);
      font-size: 16px;
    }
  }

  @media (min-width: 1000px) {
    justify-content: space-between;
  }
`;

const Nav = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <StyledNav>
      <Burger open={navOpen} setOpen={setNavOpen} />
      <MobileNavModal open={navOpen}>
        <ModalContent setOpen={setNavOpen} />
      </MobileNavModal>
      <Navbar />
      <section className="links">
        <Link href={"/catalogo"} className={roboto.className}>
          Catálogo
        </Link>
        <Button>
          <Link href="/vende">Vender</Link>
        </Button>
      </section>
    </StyledNav>
  );
};

export default Nav;
