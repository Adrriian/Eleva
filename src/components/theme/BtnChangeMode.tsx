
"use client";
import { useTheme } from "@/contexts/themeMode";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="transition hover:opacity-80 "
        >
            {theme === 'light' ?
                <div className="bg-slate-900 p-2 rounded-full">
                    <Moon className="text-white" />
                </div> :
                <div className="bg-white p-2 rounded-full">
                    <Sun className="text-yellow-600" />
                </div>
            }
        </button>
    );
}
