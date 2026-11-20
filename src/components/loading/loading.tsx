import { LoaderCircle } from "lucide-react"
import ThemeToggle from "../theme/BtnChangeMode"

type Loading = {
    loading: boolean
}
export default function LoadingComponent(props: Loading) {
    return (
        <>
            {props.loading == true && (
                <div className="bg-black/75 w-screen h-screen z-[999] inset-0 absolute flex items-center justify-center">
                    <div className="rounded-xl p-5 bg-bordo-escuro w-sm flex flex-col justify-center items-center">
                        <h1 className="font-bold text-white">
                            Carregando
                        </h1>

                        <LoaderCircle
                            size={25}
                            className="animate-spin text-bordo-vibrante mt-5"
                        />
                    </div>
                </div>
            )
            }
        </>
    )
}
