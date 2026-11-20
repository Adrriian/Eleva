type login = {
    email: string
    password: string
}

export function Login(props: login) {
    if (!props.email) {
        alert("Digite seu E-mail")
        return
    }
    if (!props.password) {
        alert('Digite Sua Senha')
        return
    }
}