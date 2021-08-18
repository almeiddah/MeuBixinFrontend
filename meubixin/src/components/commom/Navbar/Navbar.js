import "./Navbar.css";
import logo from './logo.svg';
import { FiSearch } from "react-icons/fi";
import {FiHeart} from "react-icons/fi";
import {FiUser} from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../App";
import { useContext } from "react";

export function Navbar(){

    const {auth} = useContext(AuthContext); //pegar token e nome
    const {setAuth} = useContext(AuthContext);
   
    return <div className="navbar">
            <Link to="/home" className="logo">
                <img src={logo} className="logo1"/>
            </Link>
            <div className="pesquisar">
            <FiSearch  />
                <input placeholder="Pesquisar por pets, produtos etc..."></input>
            </div>
            <div className="itens">
                
                <div className="item_1">
                    <FiHeart className="Fi"/>
                    <NavLink  to="/minhalista" className="minha_lista"> Minha lista</NavLink>
                </div>

                <NavLink  to="/meuperfil" className="item_2">
                    <FiUser className="Fi"/>
                    <div className="usuario"> {auth.nome_completo}</div>
                </NavLink>
            </div>
            <Link exact to="/" className="sair" onClick={()=> setAuth({token:null,nome_completo:null})} >SAIR</Link>
    </div>
}