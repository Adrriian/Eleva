'use client'
import ThemeToggle from "@/components/theme/BtnChangeMode";
import InputComponente, { inputCom } from "@/components/Inputs/InputsGeral";
import { use, useState } from "react";

import Btn from "@/components/button/ButtonGeral";
import { ArrowRight, ChartColumn, ChartPie, File, Goal, LockKeyholeIcon, Mail } from "lucide-react";
import InputPassword from "@/components/Inputs/inputPassword";
import { useRouter } from "next/navigation";
import { TPRegister } from "./types/typeRG";
import { NavigateRegister } from "./types/navigateRouter";
import { Register } from "./functions/register";
import LoadingComponent from "@/components/loading/loading";



export default function PageComponentRegister(props: NavigateRegister) {
    const [passwordData, setpasswordData] = useState(false)
    const [passwordTrue, setpasswordTrue] = useState(false)
    const [register, setRegister] = useState<TPRegister>({ email: '', password: '', confirm: '' })
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    const confirms = (value: string) => {
        if (register.password !== value) {
            setpasswordData(true)
            setpasswordTrue(false)
        } else {
            setpasswordData(true)
            setpasswordTrue(true)
        }
    }

    return (
        <div className="w-screen flex items-center justify-center p-3 lg:w-md">
            <div className="w-full bg-fundo-secundario  flex flex-col items-center gap-6 p-5 rounded sm:items-center sm:rounded-3xl md:w-md">
                <div className="flex items-center justify-center mt-10 gap-3">
                    <img src='/assests/logo/logo3.svg' className="w-20" />
                    <h1 className="text-bordo-vibrante font-bold text-5xl">Eleva</h1>
                </div>
                <div className="flex flex-col gap-3 justify-center items-center">
                    <div className="flex items-center gap-2">
                        <h1 className="font-bold text-2xl text-texto-secundario ">Crie Sua</h1>
                        <h1 className="font-bold text-bordo-vibrante text-2xl">Conta</h1>
                    </div>
                    <div className="flex items-center justify-center w-full text-center">
                        <h1 className="text-placeholder text-sm">Crie sua conta e dê o primeiro passo para organizar suas finanças.</h1>
                    </div>
                </div>
                <div className="w-full flex flex-col gap-4">
                    <InputComponente lucide={Mail} placeholder="Digite seu Email" type='email' value={register.email} onChange={e => setRegister({ ...register, email: e.target.value })} />
                    <InputPassword lucideOne={LockKeyholeIcon} placeholder="Digite sua Senha" value={register.password} onChange={e => setRegister({ ...register, password: e.target.value })} />
                    <InputPassword lucideOne={LockKeyholeIcon} placeholder="Confirme sua senha" value={register.confirm} onChange={(e) => {
                        const value = e.target.value
                        setRegister({ ...register, confirm: value })
                        confirms(value)
                    }
                    } />
                    <h1 className="text-[12px]  ml-2 text-gray-600">Senha precisa de letras maiúscula, minúscula, número e símbolo.</h1>
                    <h1 className={` ml-2 text-xs   ${!passwordData ? 'hidden' : 'flex'}  ${!passwordTrue ? 'text-red-500' : 'text-green-600'}`}>{!passwordTrue ? "Senhas não São iguais" : "Senha Iguais"}</h1>
                </div>
                <div className="flex items-center justify-end w-full sm:w-sm">
                    <a onClick={() => router.push(props.reset)} className="text-bordo-vibrante text-sm font-bold underline cursor-pointer">Esqueceu a Senha</a>
                </div>
                <Btn title="Cadastrar" lucide={ArrowRight} callback={async () => {
                    setLoading(true)
                    try {
                        await Register({
                            email: register.email,
                            password: register.password,
                            confirm: register.confirm
                        }, router)
                    } finally {
                        setLoading(false)
                    }
                }}
                />

                <LoadingComponent loading={loading} />
                <div className="flex items-center gap-2 justify-center">
                    <h1 className="text-placeholder text-xs font-bold">Conta cria? Acesse a área de</h1>
                    <a onClick={() => router.push(props.login)} className="text-bordo-vibrante text-xs font-bold underline cursor-pointer">Login</a>
                </div>
            </div>
        </div>
    )
}