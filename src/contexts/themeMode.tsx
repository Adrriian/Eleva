
"use client";

import {
    createContext,
    useContext,
    useEffect,
    useState,
    type ReactNode,
} from "react";

type Theme = "light" | "dark";

type ThemeContextType = {
    theme: Theme;
    setTheme: (theme: Theme) => void;
    toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(
    undefined
);

export function ThemeProvider({
    children,
}: {
    children: ReactNode;
}) {
    const [theme, setThemeState] = useState<Theme>("light");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");

        if (savedTheme === "dark" || savedTheme === "light") {
            setThemeState(savedTheme);
        }

        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted) return;

        document.documentElement.dataset.theme = theme;
        localStorage.setItem("theme", theme);
    }, [theme, mounted]);

    function setTheme(newTheme: Theme) {
        setThemeState(newTheme);
    }

    function toggleTheme() {
        setThemeState((current) =>
            current === "light" ? "dark" : "light"
        );
    }

    return (
        <ThemeContext.Provider
            value={{ theme, setTheme, toggleTheme }}
        >
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error(
            "useTheme precisa estar dentro de ThemeProvider"
        );
    }

    return context;
}
