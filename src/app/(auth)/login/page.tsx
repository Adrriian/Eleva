'use client'
import ThemeToggle from "@/components/btnThemaMode";
import InputComponente, { inputCom } from "@/components/input";
import { useState } from "react";
import { TpLogin } from "./types/TpLogin";
import Btn from "@/components/btn";
import { ArrowRight, ChartColumn, ChartPie, File, Goal, LockKeyholeIcon, Mail } from "lucide-react";
import InputPassword from "@/components/inputPassword";


export default function Input() {

    const [login, setLogin] = useState<TpLogin>({ email: '', password: '' })
    console.log(login.email)
    return (
        <div className="flex flex-col h-screen items-baseline justify-between sm:items-center lg:items-center " >
            <div className="flex items-start justify-start w-full">
                <img src='/assests/logo/ondas_cima.svg' className="w-40 object-cover" />
            </div>
            <div className="flex-row flex lg:gap-5 p-5 lg:absolute lg:items-center lg:mt-20">
                <div className="hidden p-5 lg:flex flex-col w-md items-start justify-start  lg:gap-10">
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
                                <ChartPie />
                            </div>
                            <div>
                                <h1>Controle de gastos</h1>
                                <p>Registre suas movimentações com facilidade.</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="bg-bordo p-2 rounded-full">
                                <Goal />
                            </div>
                            <div>
                                <h1>Metas e sonhos</h1>
                                <p>Planeje o seu futuro.</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="bg-bordo p-2 rounded-full">
                                <ChartColumn />
                            </div>
                            <div>
                                <h1>Relatórios completos</h1>
                                <p>Entenda melhor o seu dinheiro.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hidden p-5 lg:flex flex-col w-sm items-start justify-start  lg:gap-10">
                </div>
                <div className="bg-fundo-secundario  p-5 flex flex-col items-center gap-6 sm:items-center sm:bg-fundo-secundario sm:rounded-3xl ">
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
                        <a className="text-bordo-vibrante text-sm font-bold underline" href="">Esqueceu a Senha</a>
                    </div>
                    <Btn title="Login" lucide={ArrowRight} />

                    <div className="flex items-center gap-2 justify-center">
                        <h1 className="text-placeholder text-xs font-bold">Não tem uma conta?</h1>
                        <h1 className="text-bordo-vibrante text-xs font-bold underline">Criar conta</h1>
                    </div>
                </div>
            </div>
            <img src='/assests/logo/ondas.svg' className="w-full object-cover" />
        </div>

    )
}