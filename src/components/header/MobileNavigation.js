import React, { useState } from "react";
import Navlinks from "./Navlinks";
import "./header.css";
import { HiMenuAlt1 } from "react-icons/hi";
import { GrClose } from "react-icons/gr";
function MobileNavigation() {
  const [open, setopen] = useState(false);
  const clouseMobileMenu = ()=>{
    setopen(false)
  }
  return (
    <div className="mobile__navigation">
      {open && <Navlinks isMobal={true} clouseMobileMenu={clouseMobileMenu} />}      {!open ? (
        <HiMenuAlt1 size="40px" onClick={() => setopen(!open)} />
      ) : (
        <GrClose size="37px" onClick={() => setopen(!open)} />
      )}
    </div>
  );
}

export default MobileNavigation;
