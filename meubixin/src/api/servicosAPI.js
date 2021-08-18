import axios from "axios";

export function listarServicosPorTipo(categoria){ 
    return axios({
        method: "GET",
        url: "http://localhost:8393/servicocategoria/" + categoria,

    })
}

export function listarVeterinario(){ 
    return axios({
        method: "GET",
        url: "http://localhost:8393/veterinarios/veterinario",

    })
}