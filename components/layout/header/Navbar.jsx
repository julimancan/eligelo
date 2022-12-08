import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { navModalItems } from "./navModalItems";

const Navbar = () => {
  const logo = navModalItems[0];
  const quienesSomos = navModalItems[3];
  const preguntas = navModalItems[4];

  return (
    <StyledNavbar>
      <Link href={logo.linkTo}>
        <logo.icon />
      </Link>
      <section className="links">
        <Link href={logo.linkTo}>Inicio</Link>
        <Link href={quienesSomos.linkTo}>{quienesSomos.name}</Link>
        <Link href={preguntas.linkTo}>{preguntas.name}</Link>
      </section>
    </StyledNavbar>
  );
};

const StyledNavbar = styled.div`
  display: none;

  @media (min-width: 1000px) {
    display: flex;
    gap: 5rem;
    .links {
      gap: 2.5rem;
      font-weight: 500;
      font-size: 18px;
      line-height: 21px;
    }
  }
`;

export default Navbar;
