import { LogIn } from "lucide-react";
import Btn from "../button/ButtonGeral";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

type tpTerm = {
    term: () => Promise<void>;
};

export default function ComponentTrueTerm(props: tpTerm) {
    return (
        <div className="flex flex-col gap-3">
            <div className="flex gap-3 items-center justify-start ">
                <h1 className="text-sm font-bold text-bordo-vibrante">Eu declaro que li, compreendi e concordo com estes Termos de Serviço.</h1>
            </div>
            <div onClick={() => props.term()} className="bg-bordo w-full cursor-pointer gap-1 flex items-center justify-center p-3 rounded-xl sm:w-sm md:w-sm sm:m-auto">
                <h1 className="text-texto-btn">Confirmar</h1>
                <div>
                    <LogIn size={28} className="text-white" />
                </div>
            </div>
        </div>
    )
}