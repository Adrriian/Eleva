'use client'
import InputComponente, { inputCom } from "@/components/Inputs/InputsGeral";
import { useState } from "react";

import Btn from "@/components/button/ButtonGeral";
import { ArrowRight, Mail } from "lucide-react";

import { useRouter } from "next/navigation";
import { NavigateReset } from "./types/navigateRouter";
import LoadingComponent from "@/components/loading/loading";
import { Reset } from "./functions/reset";



export default function PageComponentReset(props: NavigateReset) {
    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState<string>('')
    const router = useRouter()

    return (
        <div className="w-screen flex items-center justify-center p-3 lg:w-md">
            <div className="w-full bg-fundo-secundario  flex flex-col items-center gap-6 p-5 rounded sm:items-center sm:rounded-3xl md:w-md">
                <div className="flex items-center justify-center mt-10 gap-3">
                    <img src='/assests/logo/logo3.svg' className="w-20" />
                    <h1 className="text-bordo-vibrante font-bold text-5xl">Eleva</h1>
                </div>
                <div className="flex flex-col gap-3 justify-center items-center">
                    <div className="flex items-center gap-2">
                        <h1 className="font-bold text-2xl text-texto-secundario ">Redefinir</h1>
                        <h1 className="font-bold text-bordo-vibrante text-2xl">Senha</h1>
                    </div>
                    <div className="flex items-center justify-center w-full">
                        <h1 className="text-placeholder text-sm">Redefina a senha da sua conta.</h1>
                    </div>
                </div>
                <div className="w-full flex flex-col gap-4">
                    <InputComponente lucide={Mail} placeholder="Digite seu Email" type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="flex items-center justify-end w-full sm:w-sm">
                    <a onClick={() => router.push(props.login)} className="text-bordo-vibrante text-sm font-bold underline cursor-pointer">Login</a>
                </div>
                <Btn title="Enviar email" lucide={ArrowRight} callback={async () => {
                    setLoading(true)
                    try {
                        await Reset({ email })
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