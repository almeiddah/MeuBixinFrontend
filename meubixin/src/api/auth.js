import axios from "axios";

export function logar(login_dados){
    return(
        axios({
            method:"POST",
            url:"http://localhost:8393/usuarios/signin",
            data: login_dados,
        })
    )
}

export function cadastrar(user){
    return (
        axios({
            method: "POST",
            url: "http://localhost:8393/usuarios",
            data:user,
        })
    )
}