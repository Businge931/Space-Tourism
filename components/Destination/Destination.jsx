import classes from "./Destination.module.css";

const Destination = ({ children }) => {
  return (
    <main className={classes.destination}>
      <h2 className={classes.destination_heading}>
        <span>01</span> Pick your destination
      </h2>
      <div className={classes.destinationContent}>{children}</div>
    </main>
  );
};

export default Destination;
