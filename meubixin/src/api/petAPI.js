import axios from "axios";

export function listarPets(token,especie){
    return axios({
        method:"GET",
        url: "http://localhost:8393/pets/" +especie,
        headers: {
            "token" : token,
        }
    })
}

export function listarPetsPorUser(token,id){
    return axios({
        method:"GET",
        url: "http://localhost:8393/petsporuser/" +id,
        headers: {
            "token" : token,
        }
    })
}
