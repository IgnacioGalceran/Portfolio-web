"use client";
import { useDarkMode } from "@/app/Context/DarkMode";

export default function Projects() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return <h1>Projects</h1>;
}
