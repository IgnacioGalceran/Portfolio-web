import { HeaderList } from "../Types/HeaderList";

export const url = process.env.NEXT_PUBLIC_URL || "";

export const headerList: HeaderList[] = [
  {
    path: `${url}/`,
    title: "Hello",
  },
  {
    path: `${url}/Portfolio/About`,
    title: "About",
  },
  {
    path: `${url}/Portfolio/Skills`,
    title: "Skills",
  },
  // {
  //   path: `${url}/Portfolio/Contact`,
  //   title: "Contact",
  // },
];
