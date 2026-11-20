import { auth } from "@/app/utils/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/router";
import { useState } from "react";

type Register = {
    email: string
    password: string
    confirm: string
}

export async function Register(props: Register) {
    const router = useRouter()
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

        if (creteUser.user.uid !== '') {
            router.replace('/home')
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