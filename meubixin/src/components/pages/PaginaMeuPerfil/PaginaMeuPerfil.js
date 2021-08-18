import { AuthContext } from "../../../App";
import { useContext, useState, useEffect } from "react";
import { listarUsuarioPorId } from "../../../api/usuarioAPI";
import { Navbar } from "../../commom/Navbar/Navbar";
import { Banner } from "../../commom/Banner/Banner";


export function PaginaMeuPerfil(){
    const {auth} = useContext(AuthContext);
    
    const [usuario, setUsuario] = useState([]);
    console.log("aut do meu perfil:", auth);
    useEffect(()=>{
        
        listarUsuarioPorId(auth._id, auth.token).then(
            (response) =>{
                setUsuario(response.data);
            }).catch(
            (error=>{
                console.log(error);
            })
        )
    },[]);

    return <div>
        <Navbar></Navbar>
        
        
    </div>
}