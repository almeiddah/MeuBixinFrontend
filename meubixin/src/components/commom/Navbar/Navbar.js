import "./Navbar.css";
import logo from './logo.svg';
import { FiSearch } from "react-icons/fi";
import {FiHeart} from "react-icons/fi";
import {FiUser} from "react-icons/fi";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../App";
import { useContext } from "react";

export function Navbar(){
    
    const {auth} = useContext(AuthContext);
    const {setAuth} = useContext(AuthContext);
   
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
                    <a href="#" className="usuario"> {auth.nome_completo}</a>
                </div>
            </div>
            <Link exact to="/" className="sair" onClick={()=> setAuth({token:null,nome_completo:null})} >SAIR</Link>
    </div>
}