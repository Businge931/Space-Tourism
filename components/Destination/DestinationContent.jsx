import Image from "next/image";
import classes from "./DestinationContent.module.css";
import Link from "next/link";

const DestinationContent = (props) => {
  const { destinationPath, heading, distance, time, content } = props;
  return (
    <article className={classes.article}>
      <Image src={destinationPath} alt="moon" className={classes.moon} />
      <div className={classes.article_content}>
        <nav className={classes.article_links}>
          <nav className={classes.link}>
            <Link href="/destination">moon</Link>
          </nav>
          <nav className={classes.link}>
            <Link href="/destination/mars">mars</Link>
          </nav>
          <nav className={classes.link}>
            <Link href="/destination/europa">Europa</Link>
          </nav>
          <nav className={classes.link}>
            <Link href="/destination/titan">titan</Link>
          </nav>
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
