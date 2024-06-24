"use client";
import { useDarkMode } from "@/app/Context/DarkMode";
import Link from "next/link";
import Image from "next/image";
import { url } from "@/app/Constants/paths";

import styles from "@/app/page.module.css";
import Button from "./Button";

export default function Header() {
  const { isDarkMode } = useDarkMode();

  return (
    <>
      <section className={isDarkMode ? styles.darkSection : styles.section}>
        <h1 className={styles.title}>
          Hi, my name is <b>Igna</b>
          <span>.</span>
        </h1>
        <h2 className={styles.subtitle}>
          I'm a creative <b>Fullstack developer</b> from Villa Cañás, Argentina{" "}
          <Image
            className={styles.argentina}
            src={"/argentina.png"}
            width={50}
            height={50}
            alt=""
          />
        </h2>
        <div className={styles.container}>
          <Link href="mailto:igna.galceran@gmail.com" target={"_blank"}>
            <Image
              className={styles.email}
              src={"/gmail.png"}
              width={40}
              height={40}
              alt=""
            />
          </Link>
          {isDarkMode ? (
            <Link href="https://github.com/IgnacioGalceran" target={"_blank"}>
              <Image
                className={styles.github}
                src={"/github-dark.png"}
                width={50}
                height={50}
                alt=""
              />
            </Link>
          ) : (
            <Link href="https://github.com/IgnacioGalceran" target={"_blank"}>
              <Image
                className={styles.github}
                src={"/github-light.png"}
                width={50}
                height={50}
                alt=""
              />
            </Link>
          )}
          <Link href="https://wa.me/+5493462536843" target={"_blank"}>
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
        <Button
          props={{ url: `${url}/Portfolio/About`, text: "Go to About me" }}
        />
      </section>
    </>
  );
}
