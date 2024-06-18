import type { Metadata } from "next";
import { Bitter } from "next/font/google";
import { DarkModeProvider } from "./Context/DarkMode";
import Header from "./Components/Header";

import "./globals.css";
import styles from "@/app/Styles/layout.module.css";

const bitter = Bitter({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Ignacio Galcerán - Fullstack developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <DarkModeProvider>
        <body className={bitter.className}>
          <Header />
          <main className={styles.main}>{children}</main>
        </body>
      </DarkModeProvider>
    </html>
  );
}
