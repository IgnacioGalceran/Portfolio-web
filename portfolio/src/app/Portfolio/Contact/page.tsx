"use client";
import { useDarkMode } from "@/app/Context/DarkMode";

export default function Contact() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return <h1>contact</h1>;
}
