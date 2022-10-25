import classes from "./Tech.module.css";
import Link from "next/link";

import { useState } from "react";

const Tech = ({ children }) => {
  const [isActive, setIsActive] = useState(false);

  const handleActiveState = () => {
    setIsActive(!isActive);
  };

  return (
    <main className={classes.tech}>
      <h2 className={classes.tech_heading}>
        <span>03</span> space launch 101
      </h2>
      <div className={classes.tech_content}>
        <div className={classes.tech_navigation}>
          <Link href="/technology">
            <nav
              className={isActive ? classes.activeclass : classes.tech_nav}
              onClick={handleActiveState}
            >
              <p>1</p>
            </nav>
          </Link>
          <Link href="/technology/spaceport">
            <nav className={classes.tech_nav}>
              <p>2</p>
            </nav>
          </Link>
          <Link href="/technology/spacecapsule">
            <nav className={classes.tech_nav}>
              <p>3</p>
            </nav>
          </Link>
        </div>
        <div className={classes.tech_content__container}>{children}</div>
      </div>
    </main>
  );
};

export default Tech;
