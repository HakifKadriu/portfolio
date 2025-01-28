"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import styles from "./page.module.css";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import internnexus1 from "./images/1.jpg";
import internnexus2 from "./images/2.jpg";
import internnexus3 from "./images/3.jpg";
import * as font from "../fonts/font";

const slides = [internnexus1, internnexus2, internnexus3];

function CardDetails() {
  return <div className={styles.detailsdiv}>Hello</div>;
}

function ProjectCard() {
  const [show, setshow] = useState(false);
  const router = useRouter();

  const navigate = (e: string) => {
    router.push(e);
  };

  return (
    <div className={styles.card} onClick={() => setshow(!show)}>
      <div className={styles.imgdiv}>
        <div className={styles.imgbuttons}>
          <div>{">"}</div>
          <div>{"<"}</div>
        </div>
        {slides.map((s, index) => (
          <Image key={index} src={s} alt="Internnexus" className={styles.img} />
        ))}
      </div>
      <div className={styles.desc}>
        <h2 className={font.poppinsbold.className}>InternNexus</h2>
        <p className={font.poppinslight.className}>
          InternNexus is a platform that connects students with internships and
          helps companies find fresh talent. With personalized accounts,
          streamlined applications, and tools for managing listings, it
          simplifies the internship process for both students and HR
          representatives.
          <br></br>
          <br></br>
          Built with ReactJS, NodeJS, and MongoDB.
        </p>
      </div>
    </div>
  );
}

function ProjectsListComponent() {
  return (
    <div className={styles.div}>
      <h1 className={styles.header}>InternNexus</h1>
    </div>
  );
}

export default function Home() {
  return (
    <div className={`${styles.mainbody}`}>
      <h1 className={`${font.playwriteRegular.className} ${styles.fadein}`}>
        Projects
      </h1>
      <div className={styles.projectsdiv}>
        
      </div>
    </div>
  );
}
