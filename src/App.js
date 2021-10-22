// import logo from './logo.svg';
import './App.css';
import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import routes from './routes';
import TelaLogin from './TelaLogin/TelaLogin';
import CadastrarItemCardapio from './CadastrarItemCardapio/CadastrarItemCardapio';
import Cardapio from './Cardapio/Cardapio';
import ListaPedidos from './ListaPedidos/ListaPedidos';
import RegistrarPagamento from './RegistrarPagamento/RegistrarPagamento';
import AtualizarItem from './AtualizarItem/AtualizarItem';
import ListaFuncionarios from './ListaFuncionarios/ListaFuncionarios';
import CadastrarFuncionario from './CadastrarFuncionário/CadastrarFuncionario';
import ListaMesas from './ListaMesas/ListaMesas';
import AtualizarFuncionario from './AtualizarFuncionario/AtualizarFuncionario';



function App() {
  return (
       
    <BrowserRouter>
    
    
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
           <Route exact path="/RegistrarPagamento">
                <RegistrarPagamento/>
           </Route>

           <Route exact path="/AtualizarItem">
                <AtualizarItem/>
           </Route>

           <Route exact path="/ListaFuncionarios">
                <ListaFuncionarios/>
           </Route> 

           <Route exact path="/CadastrarFuncionario">
                <CadastrarFuncionario/>
           </Route> 

           <Route exact path="/ListaMesas">
                <ListaMesas/>
           </Route> 
           <Route exact path="/AtualizarFuncionario">
                <AtualizarFuncionario/>
           </Route> 

         </Switch>
      
     
    </BrowserRouter>
  
  );
}

export default App;
