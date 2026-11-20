type Reset = {
    email: string

}

export function Login(props: Reset) {
    if (!props.email) {
        alert("Digite seu E-mail")
        return
    }

}