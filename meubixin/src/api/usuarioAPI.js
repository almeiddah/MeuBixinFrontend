import axios from "axios";

export function listarUsuarioPorId(){ 
    return axios({
        method: "GET",
        url: "http://localhost:8393/usuarios/:id",
        params: {
            id: this.selectedRoute
        }
    })
}

export function obterProdutos(){ 
    return axios({
        method: "GET",
        url: "http://localhost:8393/usuarios/:id/produtos",
        params: {
            id: this.selectedRoute
        }
    })
}

export function obterServicos(){ 
    return axios({
        method: "GET",
        url: "http://localhost:8393/servicos/:id/servicos",
        params: {
            id: this.selectedRoute
        }
    })
}