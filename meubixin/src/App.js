import './App.css';

import { PaginaLogin } from './components/pages/PaginaLogin/PaginaLogin';
import { PaginaHome } from './components/pages/PaginaHome/PaginaHome';
import { PaginaCadastro } from './components/pages/PaginaCadastrarUser/PaginaCadastrarUser'

import {Route, BrowserRouter, Redirect} from 'react-router-dom';
import { createContext, useState } from 'react';
import { PaginaInserirOferta } from './components/pages/PaginaInserirOferta/PaginaInserirOferta';
import { PaginaHomeServicos } from './components/pages/PaginaHomeServicos/PaginaHomeServicos';
import { PaginaMeuPerfil } from './components/pages/PaginaMeuPerfil/PaginaMeuPerfil';
import { PaginaHomePet } from './components/pages/PaginaHomePet/PaginaHomePet';
import { PaginaHomePetCachorro } from './components/pages/PaginaHomePet/PaginaHomePetCachorro';
import { PaginaHomePetGato } from './components/pages/PaginaHomePet/PaginaHomePetGato';
import { PaginaHomePetCoelho } from './components/pages/PaginaHomePet/PaginaHomePetCoelho';
import { PaginaHomePetHamster } from './components/pages/PaginaHomePet/PaginaHomePetHamster';
import { PaginaDetalheproduto } from './components/pages/PaginaDetalheProduto/PaginaDetalheProduto';
import { PaginaInserirOferta_Servico } from './components/pages/PaginaInserirOferta/PaginaInserirOferta_Servico';
import { PaginaInserirOferta_Pet } from './components/pages/PaginaInserirOferta/PaginaInserirOferta_Pet';
import { PaginaMinhaLista } from './components/pages/PaginaMinhaLista/PaginaMinhaLista';
import { PaginaDetalhePet } from './components/pages/PaginaDetalhePet/PaginaDetalhePet';

export const AuthContext = createContext(null);

function App() {

  const [auth, setAuth] = useState({token:localStorage.getItem("token"),nome_completo:localStorage.getItem("nome_completo"),_id:localStorage.getItem("_id") });
  const setAuthLS = (newAuth) =>{
    setAuth(newAuth);
    localStorage.setItem("token",newAuth.token);
    localStorage.setItem("nome_completo",newAuth.nome_completo);
    localStorage.setItem("_id",newAuth._id);
  }
  return (
    <div>
      <AuthContext.Provider value={{auth:auth, setAuth: setAuthLS}}>
        <BrowserRouter>
          <Route exact path="/" component={PaginaLogin}/>
          <Route exact path="/cadastrar" component={PaginaCadastro}/>
          <Route exact path="/home">
            {auth.token==null?<Redirect to="/"></Redirect>:<PaginaHome></PaginaHome>}
          </Route>

          <Route exact path="/meuperfil" component={PaginaMeuPerfil}></Route>
          <Route exact path="/meu_perfil" component={PaginaMeuPerfil}></Route>

          <Route exact path="/minhalista" component={PaginaMinhaLista}></Route>
          <Route exact path="/minhalista/_" component={PaginaMinhaLista}></Route>

          <Route exact path="/PaginaHomeextend" component={PaginaInserirOferta}></Route>
          <Route exact path="/home/servicos" component={PaginaHomeServicos}></Route>
          <Route exact path="/home/pets" component={PaginaHomePet}></Route>
          <Route exact path="/home/pets/cachorro" component={PaginaHomePetCachorro}></Route>
          <Route exact path="/home/pets/gato" component={PaginaHomePetGato}></Route>
          <Route exact path="/home/pets/coelho" component={PaginaHomePetCoelho}></Route>
          <Route exact path="/home/pets/hamster" component={PaginaHomePetHamster}></Route>

          <Route exact path="/meuperfil/adicionarProduto" component={PaginaInserirOferta}></Route>
          <Route exact path="/meuperfil/adicionarServico" component={PaginaInserirOferta_Servico}></Route>
          <Route exact path="/meuperfil/adicionarPet" component={PaginaInserirOferta_Pet}></Route>
          <Route exact path="/home/produtos/:id" component={PaginaDetalheproduto}></Route>
          <Route exact path="/home/pets/:id" component={PaginaDetalhePet}></Route>
        
        
        </BrowserRouter>
      </AuthContext.Provider>
   </div>
  );
}

export default App;
