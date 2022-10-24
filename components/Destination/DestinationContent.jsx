import Image from "next/future/image";
import classes from "./DestinationContent.module.css";
import Link from "next/link";

const DestinationContent = (props) => {
  const { destinationPath, heading, distance, time, content, height, width } =
    props;

  return (
    <article className={classes.article}>
      <Image src={destinationPath} alt="moon" className={classes.image} />
      <div className={classes.article_content}>
        <nav className={classes.article_links}>
          <Link href="/destination">
            <nav className={classes.link}>moon</nav>
          </Link>
          <Link href="/destination/mars">
            <nav className={classes.link}>mars</nav>
          </Link>
          <Link href="/destination/europa">
            <nav className={classes.link}>Europa</nav>
          </Link>
          <Link href="/destination/titan">
            <nav className={classes.link}>titan</nav>
          </Link>
        </nav>
        <h2 className={classes.article_heading}>{heading}</h2>
        <p className={classes.article_blockParagraph}>{content}</p>
        <div className={classes.article_units}>
          <div className={classes.distance}>
            <p className={classes.distance_name}>avg. distance</p>
            <p className={classes.distance_number}>{distance} </p>
          </div>
          <div className={classes.time}>
            <p className={classes.distance_name}>est. travel time</p>
            <p className={classes.distance_number}>{time} </p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default DestinationContent;
