'use client'

import InputComponente, { inputCom } from "@/components/Inputs/InputsGeral";
import { useState } from "react";

import Btn from "@/components/button/ButtonGeral";
import { ArrowRight, ChartColumn, ChartPie, File, Goal, LockKeyholeIcon, Mail } from "lucide-react";
import InputPassword from "@/components/Inputs/inputPassword";
import { useRouter } from "next/navigation";
import { TpLogin } from "./types/typeLg";
import { Navigate } from "./types/navigateRouter";
import Login, { } from "./functions/login";
import LoadingComponent from "@/components/loading/loading";
import { useUser } from "@/contexts/userContext";



export default function PageComponentLogin(props: Navigate) {
    const [login, setLogin] = useState<TpLogin>({ email: '', password: '' })
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    const { setUsuario } = useUser();
    return (
        <div className="w-screen flex items-center justify-center p-3 lg:w-md">
            <div className="w-full bg-fundo-secundario  flex flex-col items-center gap-6 p-5 rounded sm:items-center sm:rounded-3xl md:w-md">
                <div className="flex items-center justify-center mt-10 gap-3">

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
                    <a onClick={() => router.push(props.reset)} className="text-bordo-vibrante text-sm font-bold underline cursor-pointer">Esqueceu a Senha</a>
                </div>
                <Btn title="Login" lucide={ArrowRight} callback={async () => {
                    setLoading(true)
                    try {
                        await Login({
                            email: login.email,
                            password: login.password
                        }, router, setUsuario)
                    } finally {
                        setLoading(false)
                    }
                }} />
                <LoadingComponent loading={loading} />
                <div className="flex items-center gap-2 justify-center">
                    <h1 className="text-placeholder text-xs font-bold">Não tem uma conta?</h1>
                    <a onClick={() => router.push(props.register)} className="text-bordo-vibrante text-xs font-bold underline cursor-pointer">Criar conta</a>
                </div>
            </div>
        </div>
    )
}