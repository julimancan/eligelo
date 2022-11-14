import styled from "@emotion/styled";
import Link from "next/link";
import { useState } from "react";
import Button from "../../Button";
import Burger from "./Burger";
import MobileNavModal from "./MobileNavModal";
import ModalContent from "./ModalContent";
import { Roboto } from "@next/font/google";

const roboto = Roboto({ weight: "500" });
const StyledNav = styled.nav`
  /* background-color: violet; */
  height: 40px;
  width: calc(100% - 2rem);
  margin: 1rem auto 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 2rem;
  a[href="/catalogo"] {
    color: var(--primary-blue);
    font-size: 16px;
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
      <Link href={"/catalogo"} className={roboto.className}>
        Catálogo
      </Link>
      <Button>
        <Link href="/vende-tu-vehiculo">Vender</Link>
      </Button>
    </StyledNav>
  );
};

export default Nav;
