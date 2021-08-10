import './App.css';

import { PaginaLogin } from './components/pages/PaginaLogin/PaginaLogin';
import { PaginaHome } from './components/pages/PaginaHome/PaginaHome';
import { PaginaCadastro } from './components/pages/PaginaCadastrarUser/PaginaCadastrarUser'

import {Router, Route} from 'react-router-dom';
import history from './history';

function App() {
  return (
    <div>
      <Router history={history}>

        <Route exact path='/' component={PaginaLogin}></Route>
        <Route exact path='/cadastrar' component={PaginaCadastro}></Route>
        <Route exact path='/home' component={PaginaHome}></Route>
        
      </Router>
            
   </div>
  );
}

export default App;
