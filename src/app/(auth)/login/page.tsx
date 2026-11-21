'use client'
import { ChartColumn, ChartPie, Goal } from "lucide-react";

import PageComponentLogin from "@/components/auth/login/pages";
import ThemeToggle from "@/components/theme/BtnChangeMode";

export default function PageLogin() {
    return (
        <main className="w-full">
            <div className="flex flex-col  sm:items-center lg:items-center lg:flex-row lg:justify-around lg:w-full " >
                <div className="flex-row flex lg:gap-10 lg:items-center bg-bordo-escuro rounded-2xl">
                    <div className="hidden p-5 lg:flex flex-col w-md items-start justify-start lg:gap-10">
                        <div className="flex flex-col gap-5">
                            <div className="flex flex-col">
                                <h1 className=" text-3xl text-texto-secundario ">Seu Dinheiro</h1>
                                <h1 className="font-bold text-bordo-vibrante text-4xl">no seu controle</h1>
                            </div>
                            <div className="flex items-center justify-center w-sm">
                                <h1 className="text-placeholder text-xl">Organize suas finanças, acompanhe seus gastos e conquiste seus objetivos com mais tranquilidade.</h1>
                            </div>
                        </div>
                        <div className="flex flex-col gap-5">
                            <div className="flex items-center gap-2">
                                <div className="bg-bordo p-2 rounded-full">
                                    <ChartPie color={'#fff'} />
                                </div>
                                <div>
                                    <h1 className="text-placeholder">Controle de gastos</h1>
                                    <p className="text-placeholder">Registre suas movimentações com facilidade.</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="bg-bordo p-2 rounded-full">
                                    <Goal color={'#fff'} />
                                </div>
                                <div>
                                    <h1 className="text-placeholder">Metas e sonhos</h1>
                                    <p className="text-placeholder">Planeje o seu futuro.</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="bg-bordo p-2 rounded-full">
                                    <ChartColumn color={'#fff'} />
                                </div>
                                <div>
                                    <h1 className="text-placeholder">Relatórios completos</h1>
                                    <p className="text-placeholder">Entenda melhor o seu dinheiro.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <PageComponentLogin reset="../reset" register="../registerUser" />
            </div>
        </main>
    )
}