import { useRouter } from "next/router";
import classes from "./Header.module.css";
import logo from "../../Assets/Path.png";
import Image from "next/future/image";
import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import useWindowDimensions from "../../Hooks/windowSize";

const Header = () => {
  const [showHeader, setShowHeader] = useState(false);
  const [toggleIcon, setToggleIcon] = useState(false);

  const router = useRouter();
  const { width } = useWindowDimensions();

  function openHeader() {
    setShowHeader(!showHeader);
    setToggleIcon(!toggleIcon);
    console.log(toggleIcon, "open");
  }
  function closeHeader() {
    setShowHeader(!showHeader);
    setToggleIcon(!toggleIcon);
    console.log(toggleIcon, "close");
  }

  const links = [];

  return (
    <header className={classes.header}>
      <div className={classes.header_logo}>
        <Image src={logo} alt="Space tourism logo" className={classes.logo} />
      </div>

      <div className={classes.header_line}></div>

      {/* {toggleIcon ? (
        <AiOutlineClose className={classes.header_icon} onClick={closeHeader} />
      ) : (
        <GiHamburgerMenu className={classes.header_icon} onClick={openHeader} />
      )} */}

      {
        <nav className={classes.header_links}>
          <Link href="/">
            <a
              className={`${classes.link} ${
                router.pathname == "/" ? classes.active : ""
              }`}
              id={classes.home}
            >
              <span>00</span>Home
            </a>
          </Link>

          <Link href="/destination">
            <a
              className={`${classes.link} ${
                router.pathname == "/destination" ? classes.active : ""
              }`}
            >
              <span>01</span>Destination
            </a>
          </Link>
          <Link href="/crew">
            <a
              className={`${classes.link} ${
                router.pathname == "/crew" ? classes.active : ""
              }`}
            >
              <span>03</span>Crew
            </a>
          </Link>
          <Link href="/technology">
            <a
              className={`${classes.link} ${
                router.pathname == "/technology" ? classes.active : ""
              }`}
              id={classes.technology}
            >
              <span>04</span>Technology
            </a>
          </Link>
        </nav>
      }

      {/* {width >= 320 && width <= 425 && (
        <>
          

          <div className={classes.header_mobile}>
            {/* {showHeader && (
            <AiOutlineClose
              className={classes.header_icon}
              onClick={closeHeader}
            />
          )} 

            <nav className={classes.link_container}>
              <Link href="/">
                <a
                  className={`${classes.mobile_link} ${
                    router.pathname == "/" ? classes.active_mobile : ""
                  }`}
                >
                  <span>01</span> Home
                </a>
              </Link>
              <Link href="/destination">
                <a
                  className={`${classes.mobile_link} ${
                    router.pathname == "/destination"
                      ? classes.active_mobile
                      : ""
                  }`}
                >
                  <span>02</span> Destination
                </a>
              </Link>
              <Link href="/crew">
                <a
                  className={`${classes.mobile_link} ${
                    router.pathname == "/crew" ? classes.active_mobile : ""
                  }`}
                >
                  <span>03</span> Crew
                </a>
              </Link>
              <Link href="/technology">
                <a
                  className={`${classes.mobile_link} ${
                    router.pathname == "/technology"
                      ? classes.active_mobile
                      : ""
                  }`}
                >
                  <span>04</span> Technology
                </a>
              </Link>
            </nav>
          </div>
        </>
      )} */}
    </header>
  );
};

export default Header;
