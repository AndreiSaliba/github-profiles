import { useState, useEffect, createContext, useContext } from "react";

const ThemeContext = createContext(null);

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState<string>();

    const toggleTheme = () =>
        theme === "dark" ? setTheme("light") : setTheme("dark");

    useEffect(() => {
        setTheme(
            localStorage.getItem("theme")
                ? localStorage.getItem("theme")
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
