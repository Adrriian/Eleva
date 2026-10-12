import ThemeToggle from "@/components/btnThemaMode";

export default function login() {
    return (
        <div className="bg-fundo-pricipal h-screen flex flex-col justify-between items-center ">
            <div>
                <h1 className="text-texto-principal">ola povo</h1>
            </div>
            <div>
                <h1 className="text-texto-principal">ola povo</h1>
                <ThemeToggle />
            </div>
        </div>
    )
}