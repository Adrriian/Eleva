'use client'
import ThemeToggle from "@/components/theme/BtnChangeMode";
import InputComponente, { inputCom } from "@/components/Inputs/InputsGeral";
import { useState } from "react";
import { TpLogin } from "./types/TpLogin";
import Btn from "@/components/button/ButtonGeral";
import { ArrowRight, ChartColumn, ChartPie, File, Goal, LockKeyholeIcon, Mail } from "lucide-react";
import InputPassword from "@/components/Inputs/inputPassword";
import { useRouter } from "next/navigation";
import PageComponentLogins from "@/components/auth/login/pages";

export default function PageComponentLogin() {
    const [login, setLogin] = useState<TpLogin>({ email: '', password: '' })
    const router = useRouter()
    const [navigate, setNavigate] = useState({ reset: '/reset', register: 'registerUser' })
    return (
        <div className="flex absolute z-999 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex-col sm:items-center lg:items-center lg:flex-row lg:justify-around lg:w-full " >
            <div className="flex-row flex lg:gap-10 lg:items-center">
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
                                <h1>Controle de gastos</h1>
                                <p>Registre suas movimentações com facilidade.</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="bg-bordo p-2 rounded-full">
                                <Goal color={'#fff'} />
                            </div>
                            <div>
                                <h1>Metas e sonhos</h1>
                                <p>Planeje o seu futuro.</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="bg-bordo p-2 rounded-full">
                                <ChartColumn color={'#fff'} />
                            </div>
                            <div>
                                <h1>Relatórios completos</h1>
                                <p>Entenda melhor o seu dinheiro.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <PageComponentLogins />
        </div>

    )
}