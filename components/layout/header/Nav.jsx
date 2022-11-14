import { useState } from "react";
import Burger from "./Burger";
import MobileNavModal from "./MobileNavModal";
import ModalContent from "./ModalContent";

const Nav = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <nav>
      <Burger open={navOpen} setOpen={setNavOpen} />
      <MobileNavModal open={navOpen}>
        <ModalContent setOpen={setNavOpen}/>
      </MobileNavModal>
    </nav>
  );
};

export default Nav;
