import React from "react";
import logo from "../../Assets/myLogo.png";
import Image from "next/future/image";
import classes from "./Header.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import NavMenu from "./NavMenu";

function Header({ setShow }) {
  return (
    <div className={classes.header_wrapper}>
      <div className={classes.header_logo}>
        <Image src={logo} alt="Space tourism logo" className={classes.logo} />
      </div>

      <div className={classes.menu_wrapper}>
        <NavMenu />
      </div>
      <div className={classes.menu_btn} onClick={() => setShow(true)}>
        <svg
          width="24"
          height="21"
          viewBox="0 0 24 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="24" height="3" fill="#D0D6F9" />
          <rect y="9" width="24" height="3" fill="#D0D6F9" />
          <rect y="18" width="24" height="3" fill="#D0D6F9" />
        </svg>
      </div>
    </div>
  );
}

export default Header;
