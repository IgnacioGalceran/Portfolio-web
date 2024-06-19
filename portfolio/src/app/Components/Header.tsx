"use client";
import { useState } from "react";
import { useDarkMode } from "@/app/Context/DarkMode";
import { headerList } from "../Constants/paths";
import { GetPathname } from "../Helpers/pathname";
import Link from "next/link";
import Image from "next/image";

import styles from "@/app/Styles/header.module.css";

export default function Header() {
  const [openHeader, setOpenHeader] = useState<boolean>(false);
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const list = headerList;

  return (
    <header className={isDarkMode ? styles.darkHeader : styles.header}>
      <ul className={openHeader ? styles.openUl : ""}>
        <div className={styles.menu} onClick={() => setOpenHeader(!openHeader)}>
          <Image src={"/menu.png"} width={30} height={30} alt="" />
        </div>
        {list.map((e, index: number) => {
          let ePath = e.path.split("/");
          let path = GetPathname().split("/");
          return (
            <li
              key={index}
              onClick={() => setOpenHeader(false)}
              className={
                ePath[ePath.length - 1] === path[path.length - 1]
                  ? styles.active
                  : ""
              }
            >
              <Link href={e.path}>{e.title}</Link>
            </li>
          );
        })}
        <li onClick={() => toggleDarkMode()}>
          {isDarkMode ? (
            <Image src={"/moon.png"} width={30} height={30} alt="" />
          ) : (
            <Image src={"/sun.png"} width={30} height={30} alt="" />
          )}
        </li>
      </ul>
    </header>
  );
}
