import classes from "./CrewContent.module.css";
import Image from "next/image";
import cammander from "../../Assets/crewpage/image-douglas-hurley.png";

const CrewContent = (props) => {

const {title,name,about,image}=props

  return (
    <article className={classes.article}>
      <div className={classes.article_content}>
        <h4 className={classes.article_h4}>{title}</h4>
        <h2 className={classes.article_h2}>{name}</h2>
        <p className={classes.article_paragraph}>
         {about}
        </p>
      </div>
      <div className={classes.image}>
        <Image src={image} alt="cammander" height={460} width={420} />
      </div>
    </article>
  );
};

export default CrewContent;
