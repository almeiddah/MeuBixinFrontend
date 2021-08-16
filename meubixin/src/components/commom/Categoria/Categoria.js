import "./Categoria.css";
import {Link, NavLink} from 'react-router-dom';

import {FiPackage} from "react-icons/fi";
import {FiUsers} from "react-icons/fi";
import {IoPawOutline} from "react-icons/io5"


export function Categoria(){
    return <div className="categoria">
        <h1>Nossas Categorias</h1>
        <div className="categorias">

            <NavLink  exact to="/home" className="item"><FiPackage></FiPackage>Produtos</NavLink>
            <NavLink exact to="/home/servicos" className="item"><FiUsers></FiUsers>Serviços</NavLink>
            <NavLink exact to="/home/pets" className="item"><IoPawOutline></IoPawOutline>Adoção</NavLink>
        </div>
    </div>
}