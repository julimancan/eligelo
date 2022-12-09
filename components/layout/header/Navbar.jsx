import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import { navModalItems } from "./navModalItems";

const Navbar = () => {
  const { pathname } = useRouter();

  const logo = navModalItems[0];
  const quienesSomos = navModalItems[3];
  const preguntas = navModalItems[4];

  return (
    <StyledNavbar>
      <Link href={logo.linkTo}>
        <logo.icon />
      </Link>
      <section className="links">
        <Link
          href={logo.linkTo}
          className={pathname === logo.linkTo? "current":''}
        >
          Inicio
        </Link>
        
        <Link
          href={quienesSomos.linkTo}
          className={pathname === quienesSomos.linkTo ? "current":''}
        >
          {quienesSomos.name}
        </Link>

        <Link
          href={preguntas.linkTo}
          className={pathname === preguntas.linkTo ? "current":''}
        >
          {preguntas.name}
        </Link>
      </section>
    </StyledNavbar>
  );
};

const StyledNavbar = styled.div`
  display: none;

  .current {
    color: var(--primary-blue);
  }

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
