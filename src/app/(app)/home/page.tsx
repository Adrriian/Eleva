'use client'
import ThemeToggle from "@/components/theme/BtnChangeMode";
import { useEffect } from "react";
import { useUser } from "@/contexts/userContext";

export default function HomePage() {


    return (
        <main className="flex items-center justify-center bg-fundo-secundario ">
            <h1 className="text-4xl text-white">Bem-vindo ao Eleva!</h1>
            <ThemeToggle />
        </main>
    );
}
