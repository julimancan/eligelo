import { useState } from "react";
import Burger from "./Burger";
import MobileNavModal from "./MobileNavModal";

const Nav = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <nav>
      <Burger open={navOpen} setOpen={setNavOpen} />
      <MobileNavModal open={navOpen}/>
    </nav>
  );
};

export default Nav;
