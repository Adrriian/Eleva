"use client"
import { auth, db } from "@/app/utils/firebase";
import type { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { doc, updateDoc } from "firebase/firestore";



export async function trueTerm(router: AppRouterInstance, theme: string) {
    try {
        const date = new Date()
        const UID = await auth.currentUser

        if (!UID) {
            console.log("Usuário não autenticado!");
            return;
        }

        const userRef = doc(db, "users", UID.uid);
        await updateDoc(userRef, {
            termosAceitos: true,
            termosAceitosEm: date,
            termosVersao: "1.0",
            createdAt: date,
            theme: theme,
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