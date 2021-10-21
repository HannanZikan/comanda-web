import React from 'react'
import './TelaLogin.css';
import {BrowserRouter, Route} from 'react-router-dom'
import { FaBarcode } from 'react-icons/fa';
import { BiLogIn, } from 'react-icons/bi';
 import { RiLockPasswordLine } from 'react-icons/ri';
// import Routes from '../Routes';



function TelaLogin() {
  return (
    <BrowserRouter>
    <Route>
    <div className="App">
       {/* <img src="background.png"></img> */}
      <div className="login-logo">
        <img src= "slogan-1.png"  />
      </div>
      <div className="login-right" >
        <h1>Painel de Acesso</h1>
      
      <div className="loginInputCodEmpresa">
           <FaBarcode/> 
          <input 
          type="text"
          placeholder="Código da Empresa"
         
       />
      </div>

      <div className="loginInputUsuario">
         <BiLogIn/> 
        <input
          type="text"
          placeholder="Usuário"
          />
      </div>
      <div className="loginInputSenha">
         <RiLockPasswordLine/> 
        <input
          type="text"
          placeholder="Senha"
          />
      </div>
        <button type="submit">Entrar </button>
      </div>
      <img src ="logo-6.png"/>
      

    </div>
    </Route>
    </BrowserRouter>
  );
}

export default TelaLogin;