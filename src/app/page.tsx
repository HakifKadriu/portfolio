import styles from "./page.module.css";
import Image from "next/image";
import * as font from "./fonts";
import quotes from "../../public/quotes.png";
import Head from "next/head";
import smallicon from "./images/smalllogo.png";
import { useEffect } from "react";

function Bubbles() {
  return <div className={`${styles.bubblediv}`}>JavaScript</div>;
}

export default function Home() {
  return (
    <div className={styles.mainbody}>
      <div className={`${styles.items1} ${styles.fadeIn}`}>
        <h1 className={`${styles.header} ${font.robotoRegular.className}`}>
          Hakif Kadriu
        </h1>
        <p className={`${styles.paragraph} ${font.robotoRegular.className}`}>
          Computer Science student and aspiring web developer with a passion for
          crafting interactive websites, games, and creative digital
          experiences. Constantly learning and building projects to push my
          skills to the next level.
        </p>
      </div>
      <div className={`${styles.items2} `}>
        <Image priority src={quotes} alt="E" width={600} />
      </div>
      <div>
        {/* <Bubbles></Bubbles> */}
      </div>
    </div>
  );
}
