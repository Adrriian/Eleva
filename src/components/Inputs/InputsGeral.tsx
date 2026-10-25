import { LogIn, LucideIcon } from "lucide-react";

export type inputCom = {
    lucide: LucideIcon
    type: string,
    placeholder: string,
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export default function InputComponente(props: inputCom) {
    const Icon = props.lucide
    return (
        <div className="w-full flex  items-center sm:justify-center">
            <div className="flex items-center w-full sm:w-sm">
                <Icon className="ml-2 z-2 absolute" size={20} />
                <input className="w-full sm:w-sm rounded-xl bg-bg-input border-bordas-input border-2 py-3 px-10" type={props.type} value={props.value} onChange={props.onChange} placeholder={props.placeholder} />
            </div>
        </div>
    )
}