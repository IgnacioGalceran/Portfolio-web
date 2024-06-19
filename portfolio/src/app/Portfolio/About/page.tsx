"use client";
import { useDarkMode } from "@/app/Context/DarkMode";
import Image from "next/image";

import aboutStyles from "./about.module.css";
import styles from "@/app/page.module.css";

export default function About() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <>
      <section
        className={
          isDarkMode
            ? `${styles.darkSection} ${aboutStyles.aboutDarkSection}`
            : `${styles.section} ${aboutStyles.aboutSection}`
        }
      >
        <h1 className={aboutStyles.title}>
          <b>
            About me <span>.</span>
          </b>
          <div className={styles.subrayado}></div>
        </h1>
        <h2 className={aboutStyles.subtitle}>
          I'm a <b>Systems Engineering</b> student and <b>developer</b> who has
          been building web apps since 2021. I specialice in accessibility,
          performance and usability without sacrificing creativity.
        </h2>
      </section>
      <section className={isDarkMode ? styles.darkSection1 : styles.section1}>
        <div className={styles.letters}>
          <span className={styles.word}>SCROLL</span>
        </div>
        <div className={styles.line}></div>
      </section>
      <section
        className={isDarkMode ? aboutStyles.darkHistory : aboutStyles.history}
      >
        <Image
          className={aboutStyles.field}
          src={"/field.jpg"}
          width={1200}
          height={800}
          alt=""
        />
        <div>
          <p className={aboutStyles.text}>
            I was born in 1998 in Villa Cañas, a peaceful rural town in
            Argentina's fertile pampas. Growing up in the 2000s, I loved
            computers and video games, which sparked my interest in programming.
            This passion led me to study Systems Engineering at university.
            Moving to Rosario, a city 200 kilometers away from my hometown, was
            a big step for my studies. It gave me a great opportunity to learn
            more and grow in technology.
          </p>
          <p className={aboutStyles.text}>
            During university, I worked on several projects where I applied what
            I learned in real-life situations. This helped me get better at
            software development, system design, and managing projects. It also
            taught me the importance of teamwork and solving problems
            creatively.
          </p>
          <p className={aboutStyles.text}>
            Since 2023, I've been working at Neoris, where I've gained valuable
            experience and learned a lot about how technology works in business.
          </p>
          <p className={aboutStyles.text}>
            Looking ahead, I'm excited to keep exploring new technologies and
            finding ways to use them to solve important problems in Systems
            Engineering.
          </p>
        </div>
      </section>
      <section
        className={isDarkMode ? aboutStyles.darkHobbies : aboutStyles.hobbies}
      >
        <Image
          className={aboutStyles.avion}
          src={"/avion.jpg"}
          width={1280}
          height={593}
          alt=""
        />
        <div>
          <h2 className={aboutStyles.subtitle}>
            <b>
              My passion<span>.</span>
            </b>
          </h2>

          <p className={aboutStyles.text}>
            Besides programming, I have a deep passion for aviation, especially
            flying gliders. Since I was young, I've been fascinated by the idea
            of soaring through the air without an engine. It's been my dream to
            become a glider pilot.
          </p>
          <p className={aboutStyles.text}>
            In the near future, I'm working towards making this dream a reality
            by getting my pilot's license for gliders. I love everything about
            gliding—reading the wind, understanding aerodynamics, and
            experiencing the freedom of flight.
          </p>
        </div>
      </section>
    </>
  );
}
