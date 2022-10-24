import classes from "./Header.module.css";
import logo from "../../Assets/Path.png";
import Link from "next/link";
import Image from "next/future/image";

const Header = () => {
  // const activeState=
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
    </header>
  );
};

export default Header;
