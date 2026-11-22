"use client"
import { auth, db } from "@/app/utils/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import type { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { doc, setDoc } from "firebase/firestore";


type Register = {
    email: string
    password: string
    confirm: string
}

export async function Register(props: Register, router: AppRouterInstance) {


    if (!props.email) {
        alert("Digite seu E-mail")
        return
    }
    if (!props.password) {
        alert('Digite Sua Senha')
        return
    }
    if (!props.confirm) {
        alert('Confirme sua Senha')
        return
    }

    try {
        const creteUser = await createUserWithEmailAndPassword(
            auth,
            props.email,
            props.password
        );

        const UID = await creteUser.user.uid

        await setDoc(doc(db, 'users', UID), {
            name: "",
            email: props.email,
            telefone: "",
            dataDeNasc: "",
            termosAceitos: false,
            termosAceitosEm: "",
            termosVersao: "1.0",
            createdAt: "",
            theme: 'light',
            status: false,

        })
        if (UID !== '') {
            router.replace('/termos')
        }

    } catch (error: any) {

        switch (error.code) {
            case "auth/email-already-in-use":
                alert("Este e-mail já está cadastrado.");
                break;

            case "auth/invalid-email":
                alert("Digite um e-mail válido.");
                break;

            case "auth/weak-password":
                alert("A senha é muito fraca.");
                break;

            case "auth/network-request-failed":
                alert("Verifique sua conexão.");
                break;
            default:
                alert("Ocorreu um erro ao cadastrar.");
        }

    }
}