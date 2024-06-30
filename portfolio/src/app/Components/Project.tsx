"use client";
import { useDarkMode } from "@/app/Context/DarkMode";
import Link from "next/link";
import Image from "next/image";

import styles from "@/app/page.module.css";
import Button from "./Button";
import { url } from "../Constants/paths";

export default function Header() {
  const { isDarkMode } = useDarkMode();

  return (
    <section className={isDarkMode ? styles.darkProjects : styles.projects}>
      <h2>Projects</h2>
      <h3>Here are some of my recent web projects.</h3>
      <Button
        props={{ url: `${url}/Portfolio/Skills`, text: "Go to Skills" }}
      />
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
        <div className={styles.project}>
          <div className={styles.projectText}>
            <h3>Find the number game.</h3>
            <p>
              This project is a game to find a specific number between a minimum
              and a maximum. There is a level with the help of the "machine"
              where I applied binary search to find the number between 1 and 1
              millon with 20 tries, and never fails.
            </p>
            <Link
              href={
                "https://ignaciogalceran.github.io/LabNet2023/Lab.Ejercicio5/Ejercicio5.html"
              }
              target={"_blank"}
            >
              Click here to go to the page
            </Link>
          </div>
          <div className={styles.stack}>
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
          </div>
        </div>
        <div className={styles.project}>
          <div className={styles.projectText}>
            <h3>Minesweeper Game</h3>
            <p>
              This project is a classic Minesweeper game where players uncover
              squares on a grid, trying to avoid hidden mines. To enhance the
              gameplay, I implemented the Breadth-First Search (BFS) algorithm,
              which efficiently reveals all adjacent non-mine squares when a
              square with no neighboring mines is uncovered. This makes the game
              more fluid and helps in quickly expanding safe areas on the board.
            </p>
            <Link
              href={"https://minesweeper-igna.vercel.app"}
              target={"_blank"}
            >
              Click here to go to the page
            </Link>
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
          </div>
        </div>
        <div className={styles.project}>
          <div className={styles.projectText}>
            <h3>Tic Tac Toe Game</h3>
            <p>This project is a Tic Tac Toe game, developed with ReactJS</p>
            <Link href={"https://ta-te-ti-igna.vercel.app"} target={"_blank"}>
              Click here to go to the page
            </Link>
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
          </div>
        </div>
      </div>
    </section>
  );
}
