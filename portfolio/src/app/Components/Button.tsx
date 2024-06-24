"use client";
import { useDarkMode } from "@/app/Context/DarkMode";
import { ButtonProps } from "../Types/ButtonProps";
import Link from "next/link";

import styles from "@/app/Styles/button.module.css";

export default function Header({ props }: ButtonProps) {
  const { isDarkMode } = useDarkMode();
  const { url, text } = props;

  return (
    <Link href={url}>
      <button className={isDarkMode ? styles.buttonDark : styles.button}>
        <b>{text}</b>
      </button>
    </Link>
  );
}
