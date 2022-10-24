import classes from "./Home.module.css";

const Home = () => {
  return (
    <main className={classes.home}>
      <div className={classes.main_content}>
        <h4 className={classes.home_h4}>SO, YOU WANT TO TRAVEL TO</h4>
        <h1 className={classes.home_h1}>space</h1>
        <p className={classes.home_content}>
          Let's face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we'll give you a truly out of this world
          experience!
        </p>
      </div>

      <div className={classes.explore}>
        <h4 className={classes.explore_h4}>explore</h4>
      </div>
    </main>
  );
};

export default Home;
