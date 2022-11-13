import Logo from "/public/logo.svg";
import BlueCar from "/public/icons/blue-car.svg";
import BlueMoneyExchange from "/public/icons/blue-money-exchange.svg";
import BluePeopleExchange from "/public/icons/blue-money-exchange.svg";
import BlueQuestionMark from "/public/icons/blue-question-mark.svg";
import BluePhone from "/public/icons/blue-phone.svg";
import Link from "next/link";
import styled from "@emotion/styled";

const navModalItems = [
  {
    icon: Logo,
    name: "",
    linkTo: "/",
  },
  {
    icon: BlueCar,
    name: "Catálogo",
    linkTo: "/destacados",
  },
  {
    icon: BlueMoneyExchange,
    name: "Vende Tu V",
    linkTo: "/vende-tu-vehiculo",
  },
  {
    icon: BluePeopleExchange,
    name: "¿Quiénes somos?",
    linkTo: "/quienes-somos",
  },
  {
    icon: BlueQuestionMark,
    name: "Preguntas Frecuentes",
    linkTo: "/preguntas-frecuentes",
  },
  {
    icon: BluePhone,
    name: "Contacto",
    linkTo: "/contacto",
  },
];

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
    li:first-child a, li:nth-child(3) a {
      border-bottom: 2px solid var(--iceblue);
      padding-bottom: 1rem;
      width: 99%;
    }
  }
`;

const ModalContent = () => {
  return (
    <StyledModalContent>
      <ul>
        {navModalItems.map((item, index) => (
          <li className="" key={index}>
            <Link href={item.linkTo}>
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
