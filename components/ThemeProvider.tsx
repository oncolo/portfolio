"use client";
import { createContext, useContext, useEffect, useState } from "react";

const Ctx = createContext({ dark: false, toggle: () => {} });
export const useTheme = () => useContext(Ctx);

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") setDark(true);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <Ctx.Provider value={{ dark, toggle: () => setDark(p => !p) }}>
      {children}
    </Ctx.Provider>
  );
}
