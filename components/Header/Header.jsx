// import { useState } from "react";
import classes from "./Header.module.css";
import logo from "../../Assets/Path.png";
import Link from "next/link";
import Image from "next/future/image";
import useWindowDimensions from "../../Hooks/windowSize";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const { width } = useWindowDimensions();
  return (
    <header className={classes.header}>
      <div className={classes.header_logo}>
        <Image src={logo} alt="Space tourism logo" className={classes.logo} />
      </div>

      <div className={classes.header_line}></div>

      <nav className={classes.header_links}>
        <Link href="/">
          <div className={classes.link} id={classes.home}>
            <a>
              <span>00</span> Home
            </a>
          </div>
        </Link>
        <Link href="/destination">
          <div className={classes.link}>
            <a>
              <span>01</span> Destination
            </a>
          </div>
        </Link>
        <Link href="/crew">
          <div className={classes.link}>
            <a>
              <span>03</span> Crew
            </a>
          </div>
        </Link>
        <Link href="/technology">
          <div className={classes.link}>
            <a>
              <span>04</span> Technology
            </a>
          </div>
        </Link>
      </nav>

      {/* <div>
        <nav className={classes.header_mobile}>
          <GiHamburgerMenu className={classes.header_icon} />
          <div className={classes.link_container}>
            <Link href="/technology">
              <div className={classes.mobile_link}>
                <a>
                  <span>01</span> Home
                </a>
              </div>
            </Link>
            <Link href="/technology">
              <div className={classes.mobile_link}>
                <a>
                  <span>02</span> Destination
                </a>
              </div>
            </Link>
            <Link href="/technology">
              <div className={classes.mobile_link}>
                <a>
                  <span>03</span> Crew
                </a>
              </div>
            </Link>
            <Link href="/technology">
              <div className={classes.mobile_link}>
                <a>
                  <span>04</span> Technology
                </a>
              </div>
            </Link>
          </div>
        </nav>
      </div> */}
    </header>
  );
};

export default Header;
