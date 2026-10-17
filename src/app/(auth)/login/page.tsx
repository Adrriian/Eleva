'use client'
import ThemeToggle from "@/components/btnThemaMode";
import InputComponente, { inputCom } from "@/components/input";
import { useState } from "react";
import { TpLogin } from "./types/TpLogin";
import Btn from "@/components/btn";
import { ArrowRight, ChartColumn, ChartPie, File, Goal, LockKeyholeIcon, Mail } from "lucide-react";
import InputPassword from "@/components/inputPassword";
import { useRouter } from "next/navigation";


export default function Input() {
    const [login, setLogin] = useState<TpLogin>({ email: '', password: '' })
    const router = useRouter()
    const [navigate, setNavigate] = useState({ reset: '/changePassword', register: 'registerUser' })
    return (
        <div className="flex absolute z-999  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex-col sm:items-center lg:items-center lg:flex-row lg:justify-around lg:w-full " >
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
                <div className="w-screen flex items-center justify-center p-3 lg:w-md">
                    <div className="w-full bg-fundo-secundario  flex flex-col items-center gap-6 p-5 rounded sm:items-center sm:rounded-3xl md:w-md">
                        <div className="flex items-center justify-center mt-10 gap-3">
                            <img src='/assests/logo/logo3.svg' className="w-20" />
                            <h1 className="text-bordo-vibrante font-bold text-5xl">Eleva</h1>
                        </div>
                        <div className="flex flex-col gap-3 justify-center items-center">
                            <div className="flex items-center gap-2">
                                <h1 className="font-bold text-2xl text-texto-secundario ">Bem vindo</h1>
                                <h1 className="font-bold text-bordo-vibrante text-2xl">de volta!</h1>
                            </div>
                            <div className="flex items-center justify-center w-full">
                                <h1 className="text-placeholder text-sm">Acesse sua conta e continue no controle das suas finanças</h1>
                            </div>
                        </div>
                        <div className="w-full flex flex-col gap-4">
                            <InputComponente lucide={Mail} placeholder="Digite seu Email" type='email' value={login.email} onChange={e => setLogin({ ...login, email: e.target.value })} />
                            <InputPassword lucideOne={LockKeyholeIcon} placeholder="Digite sua Senha" value={login.password} onChange={e => setLogin({ ...login, password: e.target.value })} />
                        </div>
                        <div className="flex items-center justify-end w-full sm:w-sm">
                            <a onClick={() => router.push(navigate.reset)} className="text-bordo-vibrante text-sm font-bold underline cursor-pointer">Esqueceu a Senha</a>
                        </div>
                        <Btn title="Login" lucide={ArrowRight} />
                        <div className="flex items-center gap-2 justify-center">
                            <h1 className="text-placeholder text-xs font-bold">Não tem uma conta?</h1>
                            <a onClick={() => router.push(navigate.register)} className="text-bordo-vibrante text-xs font-bold underline cursor-pointer">Criar conta</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}