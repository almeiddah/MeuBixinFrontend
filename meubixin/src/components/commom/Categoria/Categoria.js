import "./Categoria.css";
import {FiPackage} from "react-icons/fi";
import {FiUsers} from "react-icons/fi";
import {IoPawOutline} from "react-icons/io5"

export function Categoria(){
    
    return <div className="categoria">
        <h1>Nossas Categorias</h1>
        <div className="categorias">
            <a  className="item active"><FiPackage></FiPackage>Produtos</a>
            <a  className="item"><FiUsers></FiUsers>Serviços</a>
            <a  className="item"><IoPawOutline></IoPawOutline>Adoção</a>
        </div>
    </div>
}