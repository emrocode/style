"use client";

import Umbra, { type Options } from "@emrocode/umbra";
import { createContext, type ReactNode, useContext, useState } from "react";
import { KeyboardShortcut } from "./plugins";

const options: Partial<Options> = {
  autoMatchTheme: true,
  useColorScheme: ["#ffffff", "#000000"],
  useStorage: "local",
  usePlugins: [KeyboardShortcut],
};

const umb = new Umbra(options);

const ThemeContext = createContext<{
  theme: string;
  toggleTheme: () => void;
} | null>(null);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<string>(umb.getCurrentTheme());

  const toggleTheme = () => {
    umb.toggleTheme();
    setTheme(umb.getCurrentTheme());
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
