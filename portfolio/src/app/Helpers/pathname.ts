"use client";
import { usePathname } from "next/navigation";

export function GetPathname(): string {
  const pathname = usePathname();

  return pathname;
}
