import axios from "axios";

export function listarPets(token){
    return axios({
        method:"GET",
        url: "http://localhost:8393/pets/get",
        headers: {
            "token" : token,
        }
    })
}
