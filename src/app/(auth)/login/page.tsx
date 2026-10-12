'use client'
import ThemeToggle from "@/components/btnThemaMode";
import InputComponente, { inputCom } from "@/components/input";
import { useState } from "react";
import { TpLogin } from "./types/TpLogin";
import Btn from "@/components/btn";
import { ArrowRight, LockKeyholeIcon, Mail } from "lucide-react";
import InputPassword from "@/components/inputPassword";


export default function Input() {

    const [login, setLogin] = useState<TpLogin>({ email: '', password: '' })
    console.log(login.email)
    return (
        <div className="flex flex-col h-screen items-baseline justify-between" >
            <img src='/assests/logo/ondas_cima.svg' className="w-40 object-cover" />
            <div className="bg-fundo-secundario p-5 flex flex-col items-center gap-6">
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
            <img src='/assests/logo/ondas.svg' className="w-full" />
        </div>

    )
}