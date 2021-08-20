import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { listarPets } from "../../../api/petAPI";
import { AuthContext } from "../../../App";
import { Banner } from "../../commom/Banner/Banner";
import { Card_pet } from "../../commom/Card_pet/Card_pet";
import { Categoria } from "../../commom/Categoria/Categoria";
import { Navbar } from "../../commom/Navbar/Navbar";
import "./PaginaHomePet.css";


export function Pets({pets}){
    let posts = pets.map((post)=>(<Card_pet post={post}> </Card_pet>))

    return ( 
            <div className="pets">
               {posts}
            </div>
            )
}

export function PaginaHomePetGato(){

    const {auth} = useContext(AuthContext);
    let especie = "Gato";
    const [pets, setPets] = useState([]);
    useEffect(()=>{
        listarPets(auth.token, especie).then(
            (response) =>{
                console.log(response.data);
                setPets(response.data);
                
            }).catch(
            (error=>{
                console.log(error);
            })
        )
    },[]);


    return <div className="home_pagina">
            <Navbar></Navbar>
            <Banner></Banner>
            <Categoria></Categoria>
            <div className="produtos_recentes">
                <div className="titulo">
                    <div className="filtro">
                    <NavLink exact to="/home/pets" className="filtro_pet">Todos</NavLink>
                    <NavLink exact to="/home/pets/gato"  className="filtro_pet">Gato</NavLink>
                    <NavLink exact to="/home/pets/cachorro"  className="filtro_pet">Cachorro</NavLink>
                    <NavLink exact to="/home/pets/coelho" className="filtro_pet"> Coelho</NavLink>
                    <NavLink exact to="/home/pets/hamster" className="filtro_pet">Hamster</NavLink>
                    </div>
                </div>
           
            </div>
            <div>
                <Pets pets={pets}></Pets>
            </div>


        
        </div>

}