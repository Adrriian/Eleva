'use client'
import ThemeToggle from "@/components/theme/BtnChangeMode";
import { CircleX, Goal, LayoutDashboard, Menu, UserCog, UserRoundCog } from "lucide-react";
import { useState } from "react";

export default function RootLayoutApp({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    const [menu, setMenu] = useState(false)
    const openMenu = () => {
        setMenu(true)
    }
    const closeMenu = () => {
        setMenu(false)
    }
    return (
        <html>
            <body >
                <div className="w-screen h-screen flex bg-fundo-principal">
                    <div className={`bg-fundo-secundario transition-all ease-linear border-r-2 border-fundo-principal duration-300 overflow-hidden h-full inset-0 z-999 absolute lg:w-75 lg:static ${!menu ? 'w-0' : 'w-70'}`}>
                        <div onClick={closeMenu} className="ml-5  flex gap-3 px-3 pt-7 pb-3 justify-between items-center">
                            <div className="flex gap-5 items-center">
                                <img src="/assests/logo/logo3.svg" className="w-10" />
                                <h1 className="text-2xl">Eleva</h1>
                            </div>
                            <CircleX size={28} className="text-bordo-vibrante lg:hidden" />

                        </div>
                        <div className=" px-2 lg:px-0">
                            <div className="bg-fundo-principal h-0.5 px-2 w-full"></div>
                        </div>
                        <div className="flex flex-col justify-between h-4/5  ">
                            <div className="p-5">
                                <h1>Menu Principal</h1>
                            </div>

                            <div className="flex flex-col">
                                <div className=" px-2 lg:px-0">
                                    <div className="bg-fundo-principal h-0.5 px-2 w-full"></div>
                                </div>
                                <div className="p-5 flex gap-2 items-center">
                                    <UserCog className="text-bordo-vibrante" />
                                    <h1 className="text-xl">Perfil</h1>
                                </div>

                            </div>
                        </div>

                    </div>
                    <div className="flex flex-col justify-between w-full lg:justify-start ">
                        <div className="w-full bg-fundo-secundario p-3 grid grid-cols-3 items-center justify-center gap-2 border-b-2 border-fundo-principal lg:grid-cols-1 lg:justify-end">
                            <div onClick={openMenu} className="ml-5 lg:hidden">
                                <Menu size={28} className="text-bordo-vibrante" />
                            </div>
                            <h1 className="text-center text-xl text-bordo-vibrante lg:hidden">Eleva</h1>
                            <div className="flex items-center justify-end gap-2">
                                <ThemeToggle />
                                <div className="p-2 rounded-full bg-bordo-vibrante flex">
                                    <h1 className="text-texto-principal">AA</h1>
                                </div>
                            </div>
                        </div>
                        {children}
                        <div className="grid grid-cols-3 bg items-center justify-around bg-fundo-secundario py-5 border-t-2 border-fundo-principal lg:hidden">
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
