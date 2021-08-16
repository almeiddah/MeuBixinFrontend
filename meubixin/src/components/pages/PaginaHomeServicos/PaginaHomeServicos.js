import { Banner } from "../../commom/Banner/Banner"
import { Categoria } from "../../commom/Categoria/Categoria"
import { Navbar } from "../../commom/Navbar/Navbar"

export function PaginaHomeServicos(){


    return <div className="home_pagina">
            <Navbar></Navbar>
            <Banner></Banner>
            <Categoria></Categoria>
           <h1>Serviços</h1>
    </div>
}