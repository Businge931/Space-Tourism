import Link from "next/link";
import classes from "./NavMenu.module.css";
import { useRouter } from "next/router";

const NavMenu = () => {
  const router = useRouter();
  return (
    <nav className={classes.header_links}>
      <ul>
        <li>
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
        </li>
        <li>
          <Link href="/destination">
            <a
              className={`${classes.link} ${
                router.pathname == "/destination" ? classes.active : ""
              }`}
            >
              <span>01</span>Destination
            </a>
          </Link>
        </li>
        <li>
          <Link href="/crew">
            <a
              className={`${classes.link} ${
                router.pathname == "/crew" ? classes.active : ""
              }`}
            >
              <span>03</span>Crew
            </a>
          </Link>
        </li>
        <li>
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
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
