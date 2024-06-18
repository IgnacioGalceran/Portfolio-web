"use client";
import { useDarkMode } from "@/app/Context/DarkMode";

export default function About() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return <h1>about</h1>;
}
