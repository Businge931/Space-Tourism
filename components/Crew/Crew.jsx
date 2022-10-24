import classes from "./Crew.module.css";

const Crew = ({ children }) => {
  return (
    <main className={classes.crew}>
      <div className={classes.crewContent}>{children}</div>
    </main>
  );
};

export default Crew;
