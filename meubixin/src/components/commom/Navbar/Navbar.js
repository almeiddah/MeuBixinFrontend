import "./Navbar.css";
import logo from './logo.svg';
import { FiSearch } from "react-icons/fi";
import {FiHeart} from "react-icons/fi";
import {FiUser} from "react-icons/fi";
export function Navbar(){
    
    return <div className="navbar">
            
            <div className="logo">
                <img src={logo} className="logo1"/>
            </div>
            <div className="pesquisar">
            <FiSearch/>
                <input placeholder="Pesquisar por pets, produtos etc..."></input>
            </div>
            <div className="itens">
                <div className="item_1">
                    <FiHeart/>
                    <a href="#" className="minha_lista"> Minha lista</a>
                </div>

                <div className="item_2">
                    <FiUser/>
                    <a href="#" className="usuario"> João Mendoza</a>
                </div>
            </div>
            <a href="#" className="sair">SAIR</a>
    </div>
}