import ThemeToggle from "@/components/theme/BtnChangeMode";
import { useTheme } from "@/contexts/themeMode";

export default function HomePage() {

    return (
        <main className="w-screen h-screen flex items-center justify-center bg-fundo-secundario ">
            <div className="bg-bordo-escuro w-md h-md rounded-2xl p-5">
                <h1 className="text-4xl text-white">Bem-vindo ao Eleva!</h1>
                <ThemeToggle />
            </div>

        </main>
    );
}
