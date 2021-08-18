import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../App";
import { Banner } from "../../commom/Banner/Banner";
import { Categoria } from "../../commom/Categoria/Categoria";
import { Navbar } from "../../commom/Navbar/Navbar";
import "./PaginaHomePet.css";




export function PaginaHomePet(){

 


    return <div className="home_pagina">
            <Navbar></Navbar>
            <Banner></Banner>
            <Categoria></Categoria>
            <div className="produtos_recentes">
                <div className="titulo">
                    <div className="filtro">
                    <NavLink to="/home/pets" className="filtro_pet">Todos</NavLink>
                    <NavLink to="/home/pets/gato"  className="filtro_pet">Gato</NavLink>
                    <NavLink to="/home/pets/cachorro"  className="filtro_pet">Cachorro</NavLink>
                    <NavLink to="/home/pets/coelho" className="filtro_pet"> Coelho</NavLink>
                    <NavLink to="/home/pets/hamster" className="filtro_pet">Hamster</NavLink>
                    </div>
                </div>
           
            </div>
        
        </div>

}