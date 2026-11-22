import { LucideIcon } from "lucide-react";

type BtnCompo = {
    lucide: LucideIcon,
    title: string,
    callback?: () => void
}
export default function Btn(props: BtnCompo) {
    const Icon = props.lucide
    return (
        <div onClick={() => props.callback?.()} className="bg-bordo w-full cursor-pointer gap-1 flex items-center justify-center p-3 rounded-xl sm:w-sm md:w-sm sm:m-auto">
            <h1 className="text-texto-btn">{props.title}</h1>
            <div>
                <Icon className="text-texto-btn" size={20} />
            </div>
        </div>
    )
}