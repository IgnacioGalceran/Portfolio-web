import { ReactNode } from "react";

export type DarkModeType = {
  toggleDarkMode: () => void;
  isDarkMode: boolean;
};

export type DarkModeProviderProps = {
  children: ReactNode;
};
