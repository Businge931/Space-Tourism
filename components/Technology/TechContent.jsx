import React from "react";
import classes from "./TechContent.module.css";
import Image from "next/future/image";

const TechContent = (props) => {
  const { title, description, image } = props;

  return (
    <article className={classes.article}>
      <div className={classes.article_content}>
        <h5 className={classes.article_h5}>THE TERMINOLOGY…</h5>
        <h2 className={classes.article_h2}>{title}</h2>
        <p className={classes.article_paragraph}>{description}</p>
      </div>
      <Image src={image} className={classes.image} />
    </article>
  );
};

export default TechContent;
