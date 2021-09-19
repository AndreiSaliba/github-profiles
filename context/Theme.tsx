import { useState, useEffect, createContext, useContext } from "react";
import { Theme } from "@utils/types";

const ThemeContext = createContext(null);

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState<Theme>();

    const toggleTheme = () =>
        theme === "dark" ? setTheme("light") : setTheme("dark");

    useEffect(() => {
        const lsTheme = localStorage.getItem("theme") as Theme;
        setTheme(
            localStorage.getItem("theme")
                ? lsTheme
                : window.matchMedia &&
                  window.matchMedia("(prefers-color-scheme: dark)").matches
                ? "dark"
                : "light"
        );
    }, []);

    useEffect(() => {
        theme === "dark"
            ? (document.documentElement.className = "dark")
            : (document.documentElement.className = "");
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
