import Link from "next/link";
import { useRouter } from "next/router";
import classes from "./MobileDrawer.module.css";

const MobileDrawer = ({ setShow, show }) => {
  const router = useRouter();

  return (
    <div className={`${classes.drawer_wrapper} ${show ? classes.show : ""}`}>
      <div
        className={classes.mobile_drawer_close_btn}
        onClick={() => setShow(false)}
      >
        <svg
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="2.5752"
            y="0.954102"
            width="24"
            height="3"
            transform="rotate(45 2.5752 0.954102)"
            fill="#D0D6F9"
          />
          <rect
            x="0.454102"
            y="17.9246"
            width="24"
            height="3"
            transform="rotate(-45 0.454102 17.9246)"
            fill="#D0D6F9"
          />
        </svg>
      </div>

      <div className={classes.mobile_nav}>
        <Link href="/">
          <a
            className={`${classes.link} ${
              router.pathname == "/" ? classes.active : ""
            }`}
            id={classes.home}
            onClick={() => setShow(false)}
          >
            <span>00</span> Home
          </a>
        </Link>

        <Link href="/destination">
          <a
            className={`${classes.link} ${
              router.pathname == "/destination" ? classes.active : ""
            }`}
            id={classes.home}
            onClick={() => setShow(false)}
          >
            <span>01</span> Destination
          </a>
        </Link>

        <Link href="/crew">
          <a
            className={`${classes.link} ${
              router.pathname == "/crew" ? classes.active : ""
            }`}
            id={classes.home}
            onClick={() => setShow(false)}
          >
            <span>03</span> Crew
          </a>
        </Link>

        <Link href="/technology">
          <a
            className={`${classes.link} ${
              router.pathname == "/technology" ? classes.active : ""
            }`}
            id={classes.home}
            onClick={() => setShow(false)}
          >
            <span>04</span> Technology
          </a>
        </Link>
      </div>
    </div>
  );
};

export default MobileDrawer;
