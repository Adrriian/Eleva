import { auth, db } from "@/app/utils/firebase"
import { signInWithEmailAndPassword } from "firebase/auth"
import type { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { doc, getDoc } from "firebase/firestore";
import { Usuario } from "@/contexts/userContext";

type login = {
    email: string
    password: string
}

export default async function Login(props: login, router: AppRouterInstance, setUsuario: (usuario: Usuario | null) => void) {

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
            props.password,

        );
        const UID = await creteUser.user.uid

        const ref = doc(db, 'users', UID)
        const snap = await getDoc(ref);

        if (snap.exists()) {
            setUsuario(snap.data() as Usuario);
        }

        const data = await snap.exists() ? snap.data() : null;

        if (data?.status === true && data?.termosAceitos === true) {
            router.replace('/home')
        } else {
            router.replace('/termos')
        }


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