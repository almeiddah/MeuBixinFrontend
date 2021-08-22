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

export function inserirPet(pet_info, token){
    console.log("entrou no axios", pet_info, token);
    return axios({
        method: "POST",
        url: "http://localhost:8393/pets",
        headers:{
            "token": token,
        },
        data: pet_info,
    })
}

export function removerPet(id, token){
    console.log("entrou no axios", id, token);
    return axios({
        method: "DELETE",
        url: `http://localhost:8393/pets/${id}/excluir`,
        headers:{
            "token": token,
        }
    })
}

