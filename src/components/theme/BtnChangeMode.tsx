
"use client";
import { useTheme } from "@/contexts/themeMode";

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="rounded-lg border border-bordas-input bg-fundo-pricipal px-4 py-2  transition hover:opacity-80"
        >
            {theme === "light"
                ? "Ativar tema escuro"
                : "Ativar tema claro"}
        </button>
    );
}
