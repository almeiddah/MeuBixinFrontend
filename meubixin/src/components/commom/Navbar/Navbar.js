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
   
    let nome_perfil = auth.nome_completo.split(' ');


    return <div className="navbar">
            <Link to="/home" className="logo">
                <img src={logo} className="logo1"/>
            </Link>
            <div className="pesquisar">
            <FiSearch  />
                <input placeholder="Pesquisar por pets, produtos etc..."></input>
            </div>
            
            <div className="itens">
            <NavLink to="/home"  className="item_1">
                    <div  className="home ">Tela inicial</div>
                </NavLink>

                <NavLink  to="/minhalista" className="item_2">
                    <FiHeart className="Fi"/>
                    <div className="usuario"> Minha Lista</div>
                </NavLink>

                <NavLink  to="/meuperfil" className="item_2">
                    <FiUser className="Fi"/>
                    <div className="usuario"> {nome_perfil[0]} {nome_perfil[1]}</div>
                </NavLink>
            </div>
            
    </div>
}