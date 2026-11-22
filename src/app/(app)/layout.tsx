import ThemeToggle from "@/components/theme/BtnChangeMode";
import { BowArrow, Goal, LayoutDashboard, Menu, UserRoundCog } from "lucide-react";

export default function RootLayoutApp({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html>
            <body>
                <div className="w-screen h-screen flex">
                    <div className="bg-bordo-escuro w-0 overflow-hidden h-full inset-0 z-999 absolute">
                        <h1>ola</h1>
                    </div>
                    <div className="flex flex-col justify-between">
                        <div className="w-full bg-fundo-secundario p-3 grid grid-cols-3 items-center justify-center gap-2 border-b-2 border-fundo-principal">
                            <div className="ml-5">
                                <Menu size={28} className="text-bordo-vibrante" />
                            </div>
                            <h1 className="text-center text-xl text-bordo-vibrante">Eleva</h1>
                            <div className="flex items-center justify-end gap-2">
                                <ThemeToggle />
                                <div className="p-2 rounded-full bg-bordo-vibrante flex">
                                    <h1 className="text-texto-principal">AA</h1>
                                </div>
                            </div>
                        </div>
                        {children}
                        <div className="grid grid-cols-3 bg items-center justify-around bg-fundo-secundario py-5 border-t-2 border-fundo-principal">
                            <div className="flex flex-col items-center gap-2">
                                <LayoutDashboard className="text-bordo-vibrante" />
                                <h1>Dashbord</h1>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <Goal className="text-bordo-vibrante" />
                                <h1>Perfil</h1>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <UserRoundCog className="text-bordo-vibrante" />
                                <h1>Perfil</h1>
                            </div>
                        </div>
                    </div>
                </div>

            </body>
        </html>
    );
}
