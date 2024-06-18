"use client";
import { useDarkMode } from "@/app/Context/DarkMode";
import Link from "next/link";
import Image from "next/image";

import styles from "@/app/page.module.css";

export default function Header() {
  const { isDarkMode } = useDarkMode();

  return (
    <section className={isDarkMode ? styles.darkProjects : styles.projects}>
      <h2>Projects</h2>
      <h3>Here are some of my recent web projects.</h3>
      <div className={styles.projectList}>
        <div className={styles.project}>
          <div className={styles.projectText}>
            <h3>Stock management app.</h3>
            <p>
              This project is a web-based auto parts inventory management system
              integrated with MercadoLibre API.
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
  );
}
