import axios from "axios";

export function listarUsuarioPorId(_id, token){ 
    return axios({
        method: "GET",
        url: `http://localhost:8393/usuarios/${_id}`,
        headers: {
            "token":token
        }
    })
}

export function obterProdutos(token,_id){ 
    return axios({
        method: "GET",
        url: `http://localhost:8393/usuarios/${_id}/produtos`,
        headers: {
            "token":token
        }
    })
}

export function obterServicos(token,_id){ 
    return axios({
        method: "GET",
        url:`http://localhost:8393/usuarios/${_id}/servicos`,
        headers: {
            "token":token
        }
    })
}