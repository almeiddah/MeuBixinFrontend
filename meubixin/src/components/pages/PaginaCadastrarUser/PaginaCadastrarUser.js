
import { useForm } from 'react-hook-form';
import axios from "axios";
import history from "../../../history";


function FormCadastro(){ 
    const {register, handleSubmit} = useForm();
    const submeter = (usuario)=>{
        axios({
            method: "POST",
            url: "http://localhost:8393/usuarios",
            data:usuario,
        }).then((response)=>{
            console.log(response);
            history.push("/login");

        }).catch((error)=>{
            console.log(error);
        })
    }; 

    return (
        <form onSubmit={handleSubmit(submeter)}>
            Nome completo:
                <input type="text" name="nome_completo" {...register("nome_completo")}></input> <br></br>
            Email: 
                <input type="text" name="email" {...register("email")}></input><br></br>
            Senha: 
                <input type="password" name="senha" {...register("senha")}></input><br></br>
            Tipo pessoa: 
                <select name="tipo_pessoa"  id="" {...register("tipo_pessoa")}>
                        <option value="fisica">Fisica</option>
                        <option value="juridica">juridica</option>
                </select>
            Descricao: 
                <input type="text" name="descricao_pessoa" {...register("descricao_pessoa")}></input><br></br>
            Cidade: 
                <input type="text" name="cidade" {...register("cidade")}></input><br></br>
            Endereco: 
                <input type="text" name="endereco" {...register("endereco")}></input><br></br>
            Telefone:
                <input type="text" name="telefone" {...register("telefone")}></input><br></br>

            <button>cadastrar</button>
        </form>
    )
}

export function PaginaCadastro(){
    return(
        <div>
            <FormCadastro></FormCadastro>

        </div>
    );
}