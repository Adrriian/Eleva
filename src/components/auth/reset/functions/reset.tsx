import { auth } from "@/app/utils/firebase";
import { sendPasswordResetEmail } from "firebase/auth";

type Reset = {
    email: string
}
export async function Reset(props: Reset) {
    if (!props.email) {
        alert("Digite seu E-mail")
        return
    }
    try {
        await sendPasswordResetEmail(auth, props.email);
        alert("E-mail de redefinição de senha enviado, verifique sua caixa de spam")
    } catch (error: any) {
        switch (error.code) {
            case "auth/invalid-email":
                alert("E-mail inválido.");
                break;

            case "auth/user-not-found":
                alert("Usuário não encontrado.");
                break;

            case "auth/missing-email":
                alert("Informe seu e-mail.");
                break;

            case "auth/too-many-requests":
                alert("Muitas tentativas. Tente novamente mais tarde.");
                break;

            default:
                alert("Não foi possível enviar o e-mail.");
                console.log(error);
        }
    }

}