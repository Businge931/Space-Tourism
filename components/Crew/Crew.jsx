import classes from "./Crew.module.css";
import Link from "next/link";

const Crew = ({ children }) => {
  return (
    <main className={classes.crew}>
      <h2 className={classes.crew_heading}>
        <span>02</span> Meet your crew
      </h2>
      <div className={classes.crewContent}>{children}</div>

      <div className={classes.crew_navigation}>
        <Link href="/crew">
          <nav className={classes.nav} />
        </Link>
        <Link href="/crew/missionSpecialist">
          <nav className={classes.nav} />
        </Link>
        <Link href="/crew/pilot">
          <nav className={classes.nav} />
        </Link>
        <Link href="/crew/flightEngineer">
          <nav className={classes.nav} />
        </Link>
      </div>
    </main>
  );
};

export default Crew;
