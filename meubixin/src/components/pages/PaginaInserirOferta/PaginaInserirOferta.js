import { Banner } from "../../commom/Banner/Banner";
import { Categoria } from "../../commom/Categoria/Categoria";
import { Navbar } from "../../commom/Navbar/Navbar";

export function PaginaHome(){
    
    return <div>
        <h1>OFERTA: PRODUTO/SERVIÇO/PET</h1>
            <Navbar></Navbar>
            <Banner></Banner>
            <Categoria></Categoria>
   
    </div>
}