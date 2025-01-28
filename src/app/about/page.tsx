"use client";
import styles from "./page.module.css";
import Image from "next/image";
import fulllogo from "../../../public/fulllogowallpaperdark.png";
import JavascriptIcon from "./icons/javascript-16-svgrepo-com.svg";
import NodeJs from "./icons/nodejs02-svgrepo-com.svg";
import react from "./icons/reactjs-fill-svgrepo-com.svg";
import nextjs from "./icons/nextjs-svgrepo-com.svg";
import html from "./icons/html5-logo-svgrepo-com.svg";
import css from "./icons/css-svgrepo-com.svg";
import bootstrap from "./icons/bootstrap-svgrepo-com.svg";
import sass from "./icons/sass-svgrepo-com.svg";
import unity from "./icons/unity-svgrepo-com.svg";
import gamemaker from "./icons/light-gamemaker2-svgrepo-com.svg";
import mongodb from "./icons/mongodb-svgrepo-com.svg";
import database from "./icons/database-02-svgrepo-com.svg";
import { useState, useEffect } from "react";
import * as font from "../fonts/font";
import Link from "next/link";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ContactModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        variant="primary"
        onClick={handleShow}
        className={`${styles.contactbutton} ${font.poppinsregular.className}`}
      >
        Contact Me
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Email Address</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>hakif.kadriu@umib.net</div>
          <div>hakifkadriup@gmail.com</div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={handleClose}
            style={{ width: "100%" }}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

function SkillCard() {
  const [items, setItem] = useState([
    ["Javascript", JavascriptIcon],
    ["NodeJs", NodeJs],
    ["ReacJs", react],
    ["NextJs", nextjs],
    ["Html", html],
    ["Css", css],
    ["Bootstrap", bootstrap],
    ["Sass", sass],
    ["Unity", unity],
    ["GameMaker 2D", gamemaker],
    ["MongoDB", mongodb],
    ["SQL", database],
  ]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          } else {
            entry.target.classList.remove(styles.visible);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const skillCards = document.querySelectorAll(`.${styles.skillCard}`);
    skillCards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return items.map((item) => (
    <div className={`${styles.skillCard}`} key={item[0]}>
      <Image
        style={{ borderRadius: "5px" }}
        src={item[1]}
        alt={item[0]}
        width={50}
        height={50}
      />
      <p style={{ fontSize: "20px" }} className={font.poppinsmedium.className}>
        {item[0]}
      </p>
    </div>
  ));
}

export default function About() {
  return (
    <div className={`${styles.mainbody}`}>
      <div>
        <h1
          style={{ marginBottom: "1rem" }}
          className={`${font.playwriteRegular.className}`}
        >
          About Me
        </h1>
        <div className={`${font.poppinslight.className} ${styles.paragraph}`}>
          Hi, I'm Kifa, a 21 year old boy who lives in Kosovo. I love coding
          random stuff and learning new things everyday for the fun of it. When
          I'm not coding up new projects, you can find me playing and watching
          football, hanging out with friends, or playing video games to unwind.
          <br></br>
          <br></br>I am a web developer and final-year computer science student
          passionate about crafting interactive websites, games, and digital
          experiences. I thrive on solving challenging problems and turning
          creative ideas into functional, user-friendly solutions.
          <br></br>With a strong foundation in both frontend and backend
          development, I enjoy designing sleek, intuitive interfaces and coding
          dynamic features that bring projects to life. Beyond coding, I'm
          constantly exploring new technologies, improving my skills, and
          working on exciting personal projects. I'm driven by curiosity,
          creativity, and a desire to make a meaningful impact through
          technology.
        </div>
        <div className={styles.logo}>
          <Image
            src={fulllogo}
            alt="Kifa's Logo"
            style={{
              borderRadius: "20px",
              maxWidth: "100%",
              maxHeight: "100%",
              objectFit: "cover",
            }}
          />
        </div>
      </div>

      <div className={styles.skillsdiv}>
        <h1
          style={{ marginTop: "5rem", marginBottom: "0.2rem" }}
          className={`${font.playwriteRegular.className}`}
        >
          Skills
        </h1>
        <h4
          className={`${font.poppinsmedium.className}`}
          style={{ marginBottom: "1rem" }}
        >
          Some of my skills include working with:
        </h4>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "1rem",
            paddingBottom: "15rem",
          }}
        >
          <SkillCard />
        </div>
        <ContactModal />
        <p
          className={font.poppinslight.className}
          style={{ paddingBottom: "1rem" }}
        >
          Hakif Kadriu - 2024
        </p>
      </div>
    </div>
  );
}
