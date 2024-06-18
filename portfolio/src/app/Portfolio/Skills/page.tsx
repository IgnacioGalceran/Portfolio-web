"use client";
import { useDarkMode } from "@/app/Context/DarkMode";

export default function Skills() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return <h1>skill</h1>;
}
