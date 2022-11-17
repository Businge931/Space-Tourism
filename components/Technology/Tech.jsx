import classes from "./Tech.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

const Tech = ({ children }) => {
  const router = useRouter();

  return (
    <main className={classes.tech}>
      <h2 className={classes.tech_heading}>
        <span>03</span> space launch 101
      </h2>
      <div className={classes.tech_content}>
        <div className={classes.tech_navigation}>
          <Link href="/technology">
            <a
              className={`${classes.tech_nav} ${
                router.pathname == "/technology" ? classes.active : ""
              }`}
            >
              1
            </a>
          </Link>
          <Link href="/technology/spaceport">
            <a
              className={`${classes.tech_nav} ${
                router.pathname == "/technology/spaceport" ? classes.active : ""
              }`}
            >
              2
            </a>
          </Link>
          <Link href="/technology/spacecapsule">
            <a
              className={`${classes.tech_nav} ${
                router.pathname == "/technology/spacecapsule"
                  ? classes.active
                  : ""
              }`}
            >
              3
            </a>
          </Link>
        </div>
        <div className={classes.tech_content__container}>{children}</div>
      </div>
    </main>
  );
};

export default Tech;
