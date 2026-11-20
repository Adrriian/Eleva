import PageComponentRegister from "@/components/auth/register/pages";

export default function PageRegister() {
    return (
        <main className="flex justify-center items-center w-full">
            <PageComponentRegister reset="../reset" login="../login" />
        </main>
    );
}