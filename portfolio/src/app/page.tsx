"use client";
import Image from "next/image";
import { useDarkMode } from "./Context/DarkMode";

import styles from "./page.module.css";
import Link from "next/link";
import { url } from "./Constants.ts/paths";

export default function Home() {
  const { isDarkMode } = useDarkMode();

  return (
    <>
      <section className={isDarkMode ? styles.darkSection : styles.section}>
        <h1 className={styles.title}>
          Hi, my name is <b>Igna</b>
          <span>.</span>
        </h1>
        <h2 className={styles.subtitle}>
          I'm a creative <b>Fullstack developer</b> from Rosario, Argentina{" "}
          <Image
            className={styles.argentina}
            src={"/argentina.png"}
            width={50}
            height={50}
            alt=""
          />
        </h2>
        <div className={styles.container}>
          <Link href="mailto:igna.galceran@gmail.com">
            <Image
              className={styles.email}
              src={"/gmail.png"}
              width={40}
              height={40}
              alt=""
            />
          </Link>
          {isDarkMode ? (
            <Link href="https://github.com/IgnacioGalceran">
              <Image
                className={styles.github}
                src={"/github-dark.png"}
                width={50}
                height={50}
                alt=""
              />
            </Link>
          ) : (
            <Link href="https://github.com/IgnacioGalceran">
              <Image
                className={styles.github}
                src={"/github-light.png"}
                width={50}
                height={50}
                alt=""
              />
            </Link>
          )}

          <Link href="https://wa.me/+5493462536843">
            <Image
              className={styles.whatsapp}
              src={"/whatsapp.png"}
              width={45}
              height={45}
              alt=""
            />
          </Link>
        </div>
      </section>
      <section className={isDarkMode ? styles.darkSection1 : styles.section1}>
        <div className={styles.letters}>
          <span className={styles.word}>SCROLL</span>
        </div>
        <div className={styles.line}></div>
      </section>
      <section className={isDarkMode ? styles.darkSection2 : styles.section2}>
        <span className={styles.title}>
          <b>Let's work together</b>
          <span>.</span>
        </span>
        <div className={styles.subrayado}></div>
        <span className={styles.text}>
          From landing pages designs to scaleable backend systems. Single-page
          apps connected with REST API's. I help people to build ambitious yet
          accessible web projects - <b>the wilder, the better.</b>
        </span>
        <Link href={`${url}/Portfolio/About`}>
          <button className={styles.about}>
            <b>About me</b>
          </button>
        </Link>
      </section>
      <section className={isDarkMode ? styles.darkProjects : styles.projects}>
        <h2>Projects</h2>
        <h3>Here are some of my recent web projects.</h3>
        <div className={styles.projectList}>
          <div className={styles.project}>
            <div className={styles.projectText}>
              <h3>Stock management app.</h3>
              <p>
                This project is a web-based auto parts inventory management
                system integrated with MercadoLibre API.
              </p>
            </div>
            <div className={styles.stack}>
              <div>
                <span>ReactJS</span>
                <Image src={"/react.svg"} width={30} height={30} alt="" />
              </div>
              <div>
                <span>Typescript</span>
                <Image src={"/typescript.svg"} width={30} height={30} alt="" />
              </div>
              <div>
                <span>HTML5</span>
                <Image src={"/html.svg"} width={30} height={30} alt="" />
              </div>
              <div>
                <span>CSS3</span>
                <Image src={"/css.svg"} width={30} height={30} alt="" />
              </div>
              <div>
                <span>MySQL</span>
                <Image src={"/mysql.svg"} width={30} height={30} alt="" />
              </div>
            </div>
          </div>
          <div className={styles.project}>
            <div className={styles.projectText}>
              <h3>Leasing and Pawn Loan Calculator.</h3>
              <p>
                This is a public web calculator designed for a business in the
                leasing and pawn loan industry.
              </p>
              <Link
                href={"https://calculadora.msmleasing.com.ar"}
                target={"_blank"}
              >
                Click here to go to the page
              </Link>
            </div>
            <div className={styles.stack}>
              <div>
                <span>Angular</span>
                <Image src={"/angular.svg"} width={30} height={30} alt="" />
              </div>
              <div>
                <span>HTML5</span>
                <Image src={"/html.svg"} width={30} height={30} alt="" />
              </div>
              <div>
                <span>CSS3</span>
                <Image src={"/css.svg"} width={30} height={30} alt="" />
              </div>
              <div>
                <span>.NET</span>
                <Image src={"/net.svg"} width={30} height={30} alt="" />
              </div>
              <div>
                <span>SQL</span>
                <Image src={"/sqlserver.svg"} width={30} height={30} alt="" />
              </div>
            </div>
          </div>

          <div className={styles.project}>
            <div className={styles.projectText}>
              <h3>Gym administration app.</h3>
              <p>
                This project is an app designed to manage gym classes and
                schedules.
              </p>
            </div>
            <div className={styles.stack}>
              <div>
                <span>ReactJS</span>
                <Image src={"/react.svg"} width={30} height={30} alt="" />
              </div>
              <div>
                <span>Javascript</span>
                <Image src={"/javascript.svg"} width={30} height={30} alt="" />
              </div>
              <div>
                <span>HTML5</span>
                <Image src={"/html.svg"} width={30} height={30} alt="" />
              </div>
              <div>
                <span>CSS3</span>
                <Image src={"/css.svg"} width={30} height={30} alt="" />
              </div>
              <div>
                <span>MongoDB</span>
                <Image src={"/mongodb.svg"} width={30} height={30} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
