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

export async function trueTerm(router: AppRouterInstance) {
    try {

        await setDoc(doc(db, 'users',), {
            termosAceitos: true,
            termosAceitosEm: "",
            termosVersao: "1.0",
            createdAt: "",
            theme: 'light',
            status: true,

        })

        router.replace('/home')


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