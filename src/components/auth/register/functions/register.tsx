type Register = {
    email: string
    password: string
    confirm: string
}

export function Register(props: Register) {
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
}