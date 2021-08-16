import './App.css';

import { PaginaLogin } from './components/pages/PaginaLogin/PaginaLogin';
import { PaginaHome } from './components/pages/PaginaHome/PaginaHome';
import { PaginaCadastro } from './components/pages/PaginaCadastrarUser/PaginaCadastrarUser'

import {Router, Route, BrowserRouter} from 'react-router-dom';
import { createContext, useState } from 'react';
import { PaginaInserirOferta } from './components/pages/PaginaInserirOferta/PaginaInserirOferta';
import { PaginaHomeServicos } from './components/pages/PaginaHomeServicos/PaginaHomeServicos';

export const AuthContext = createContext(null);

function App() {

  const [auth, setAuth] = useState({token:localStorage.getItem("token"),nome_completo:localStorage.getItem("nome_completo")});
  console.log(auth.nome_completo);
  const setAuthLS = (newAuth) =>{
    setAuth(newAuth);
    localStorage.setItem("token",newAuth.token);
    localStorage.setItem("nome_completo",newAuth.nome_completo);
  }
  return (
    <div>
      <AuthContext.Provider value={{auth:auth, setAuth: setAuthLS}}>
        <BrowserRouter>
          <Route exact path="/" component={PaginaLogin}/>
          <Route exact path="/cadastrar" component={PaginaCadastro}/>
          <Route exact path="/home" component={PaginaHome}></Route>
          <Route exact path="/PaginaHomeextend" component={PaginaInserirOferta}></Route>
          <Route exact path="/home/servicos" component={PaginaHomeServicos}></Route>
        </BrowserRouter>
      </AuthContext.Provider>
   </div>
  );
}

export default App;
