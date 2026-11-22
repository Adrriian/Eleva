import { LogIn } from "lucide-react";
import Btn from "../button/ButtonGeral";

export default function TrueTerm() {
    return (
        <div className="flex flex-col gap-3">
            <div className="flex gap-3 items-center justify-start ">
                <input className="scale-150" type="checkbox" value={'false'} />
                <h1 className="text-xs text-texto-principal">Eu declaro que li, compreendi e concordo com estes Termos de Serviço.</h1>
            </div>
            <Btn title="Confirmar" lucide={LogIn} />
        </div>
    )
}