import Logo from "/public/logo.svg";

const navModalItems = [
  {
    icon: Logo,
    name: "",
    linkTo: "/",
  },
  {
    icon: Logo,
    name: "Catálogo",
    linkTo: "/catalogo",
  },
  {
    icon: Logo,
    name: "Vende Tu V",
    linkTo: "/Vende Tu V",
  },
  {
    icon: Logo,
    name: "¿Quiénes somos?",
    linkTo: "/catalogo",
  },
  {
    icon: Logo,
    name: "Preguntas Frecuentes",
    linkTo: "/catalogo",
  },
  {
    icon: Logo,
    name: "Contacto",
    linkTo: "/catalogo",
  },
];

const ModalContent = () => {
  return (
    <aside>
      <ul>
        {navModalItems.map((item, index) => (
          <li className="" key={index}>
            <item.icon />
            <span>{item.name}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default ModalContent;
