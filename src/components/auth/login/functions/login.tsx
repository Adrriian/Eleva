import { auth } from "@/app/utils/firebase"
import { signInWithEmailAndPassword } from "firebase/auth"
import { useRouter } from "next/navigation"
import type { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

type login = {
    email: string
    password: string
}

export default async function Login(props: login, router: AppRouterInstance) {

    if (!props.email) {
        alert("Digite seu E-mail")
        return
    }
    if (!props.password) {
        alert('Digite Sua Senha')
        return
    }

    try {
        const creteUser = await signInWithEmailAndPassword(
            auth,
            props.email,
            props.password
        );

        if (creteUser.user.uid !== '') {
            router.replace('/home')
        }
        console.log(props.email)

    } catch (error: any) {
        switch (error.code) {

            case "auth/invalid-email":
                alert("E-mail inválido.");
                break;

            case "auth/invalid-credential":
                alert("E-mail ou senha incorretos.");
                break;

            case "auth/user-disabled":
                alert("Esta conta está desativada.");
                break;

            case "auth/too-many-requests":
                alert("Muitas tentativas. Tente novamente mais tarde.");
                break;

            default:
                alert("Erro ao realizar login.");
                console.log(error);
        }
    }
}