import classes from "./CrewContent.module.css";
import Image from "next/future/image";
import Link from "next/link";
import { useRouter } from "next/router";

const CrewContent = (props) => {
  const { title, name, about, image } = props;

  const router = useRouter();
  return (
    <article id={classes.article}>
      <h2 className={classes.crew_heading}>
        <span>02</span> Meet your crew
      </h2>
      <div className={classes.article}>
        <div className={classes.article_content}>
          <h4 className={classes.article_h4}>{title}</h4>
          <h2 className={classes.article_h2}>{name}</h2>
          <p className={classes.article_paragraph}>{about}</p>

          <div className={classes.crew_navigation}>
            <Link href="/crew">
              <a
                className={`${classes.nav} ${
                  router.pathname == "/crew" ? classes.active : ""
                }`}
              />
            </Link>
            <Link href="/crew/missionSpecialist">
              <a
                className={`${classes.nav} ${
                  router.pathname == "/crew/missionSpecialist"
                    ? classes.active
                    : ""
                }`}
              />
            </Link>
            <Link href="/crew/pilot">
              <a
                className={`${classes.nav} ${
                  router.pathname == "/crew/pilot" ? classes.active : ""
                }`}
              />
            </Link>
            <Link href="/crew/flightEngineer">
              <a
                className={`${classes.nav} ${
                  router.pathname == "/crew/flightEngineer"
                    ? classes.active
                    : ""
                }`}
              />
            </Link>
          </div>
        </div>
        <Image src={image} alt="cammander" className={classes.image} />
      </div>
    </article>
  );
};

export default CrewContent;
