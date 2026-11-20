import PageComponentReset from "@/components/auth/reset/page";

export default function PageResetPassword() {
    return (
        <main className="flex justify-center items-center w-full">
            <PageComponentReset register="../registerUser" login="../login" />
        </main>

    );
}