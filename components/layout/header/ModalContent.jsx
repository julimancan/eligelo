
import Link from "next/link";
import styled from "@emotion/styled";
import {navModalItems} from "./navModalItems"



const StyledModalContent = styled.aside`
  height: 100vh;
  padding-top: 1rem;
  ul {
    display: grid;
    gap: 1rem;
    padding: 0;
    li {
      padding-left: 1rem;
      a {
        display: flex;
        align-items: center;
        gap: 1rem;
      }
    }
    li:first-of-type a, li:nth-of-type(3) a {
      border-bottom: 2px solid var(--iceblue);
      padding-bottom: 1rem;
      width: 99%;
    }
  }
`;

const ModalContent = ({setOpen}) => {
  return (
    <StyledModalContent>
      <ul>
        {navModalItems.map((item, index) => (
          <li className="" key={index}>
            <Link href={item.linkTo} onClick={() => setOpen(false)}>
              <item.icon />
              <span>{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </StyledModalContent>
  );
};

export default ModalContent;
