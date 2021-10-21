import React from 'react';
import {Switch, Route, BrowserRouter } from 'react-router-dom';


import CadastrarItemCardapio from './CadastrarItemCardapio/CadastrarItemCardapio';
import TelaLogin from './TelaLogin/TelaLogin';
import Cardapio from './Cardapio/Cardapio';
import ListaPedidos from './ListaPedidos/ListaPedidos';
import RegistrarPagamento from './RegistrarPagamento/RegistrarPagamento';
import AtualizarItem from './AtualizarItem/AtualizarItem';
import ListaFuncionarios from './ListaFuncionarios/ListaFuncionarios';




export default () =>{

    return (
        <BrowserRouter>
    
        {/* <Main/>
        <Cadastro/>   */}
 
        <Switch>
             <Route exact path="/">
                 <TelaLogin/>
            </Route>
            
            <Route exact path="/CadastrarItemCardapio">
                 <CadastrarItemCardapio/>
            </Route>

            <Route exact path="/Cardapio">
                 <Cardapio/>
            </Route>
            <Route exact path="/ListaPedidos">
                 <ListaPedidos/>
            </Route>

            <Route exact path="/RegistraPagamento">
                 <RegistrarPagamento/>
            </Route>

            <Route exact path="/AtualizarItem">
                 <AtualizarItem/>
            </Route>

            <Route exact path="/ListaFuncionarios">
                 <ListaFuncionarios/>
            </Route>
          </Switch>
       
      
     </BrowserRouter>
   

    
    )
        
}