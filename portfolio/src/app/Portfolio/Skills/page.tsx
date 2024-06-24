"use client";
import { useDarkMode } from "@/app/Context/DarkMode";
import Image from "next/image";

import skillsStyles from "./skills.module.css";
import styles from "@/app/page.module.css";

export default function Skills() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <>
      <section
        className={
          isDarkMode
            ? `${styles.darkSection} ${skillsStyles.skillsDarkSection}`
            : `${styles.section} ${skillsStyles.skillsSection}`
        }
      >
        <h1 className={skillsStyles.title}>
          <b>
            My skills <span>.</span>
          </b>
          <div className={styles.subrayado}></div>
        </h1>
        <h2 className={skillsStyles.subtitle}>
          As a junior full-stack developer, I am building a strong foundation in
          both frontend and backend technologies. I am in constant learning
          mode, eager to expand my skills and adept at quickly grasping new
          concepts.
        </h2>
        <div className={skillsStyles.skillsContainer}>
          <div>
            <h2>Frontend Skills</h2>
            <p>
              <Image src={"/javascript.svg"} width={40} height={40} alt="" />
              Proficiency in creating interactive and dynamic applications.
            </p>
            <p>
              <Image src={"/typescript.svg"} width={40} height={40} alt="" />
              Experience using TypeScript to improve the robustness and
              maintainability of JavaScript code, with a strong focus on static
              typing.
            </p>
            <p>
              <Image src={"/html.svg"} width={40} height={40} alt="" />
              Ability to structure semantic and accessible web content.
            </p>
            <p>
              <Image src={"/css.svg"} width={40} height={40} alt="" />
              Capability to design responsive user interfaces with Flexbox and
              Grid Layout.
            </p>
            <p>
              <Image src={"/react.svg"} width={40} height={40} alt="" />
              Experience in development of single-page applications (SPA) using
              React.
            </p>
            <p>
              <Image src={"/angular.svg"} width={40} height={40} alt="" />
              Experience in development of single-page applications (SPA) using
              Angular.
            </p>
            <p>
              <Image src={"/nextjs.svg"} width={40} height={40} alt="" />
              Experience in development of single-page applications (SPA) using
              NextJS.
            </p>
          </div>
          <div>
            <h2>Backend Skills</h2>
            <p>
              Express: Experience in creation of servers and RESTful APIs using
              Express.js.
            </p>
            <p>
              <Image src={"/net.svg"} width={40} height={40} alt="" />
              Experience in building backend systems with .NET Core and
              Framework.
            </p>
            <p>
              <Image src={"/mysql.svg"} width={40} height={40} alt="" />
              Experience in MySQL, including query optimization and schema
              design.
            </p>
            <p>
              <Image src={"/sqlserver.svg"} width={40} height={40} alt="" />
              Experience in SQL Server, including query optimization and schema
              design.
            </p>
            <p>
              <Image src={"/mongodb.svg"} width={40} height={40} alt="" />
              Basic experience in MongoDB, including schema design and query
              optimization.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
