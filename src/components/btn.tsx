import { LucideIcon } from "lucide-react";

type BtnCompo = {
    lucide: LucideIcon,
    title: string
}
export default function Btn(props: BtnCompo) {
    const Icon = props.lucide
    return (
        <div className="bg-bordo w-full cursor-pointer gap-1 flex items-center justify-center p-3 rounded-xl md:w-sm">
            <h1 className="text-texto-btn">{props.title}</h1>
            <div>
                <Icon className="text-texto-btn" size={20} />
            </div>
        </div>
    )
}