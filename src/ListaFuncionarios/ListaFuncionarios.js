import React from 'react'
import  './ListaFuncionarios.css'
import {BrowserRouter, Route} from 'react-router-dom'
import { BiLogIn, BsSearch } from 'react-icons/bs';




function  ListaFuncionarios () {
    return (
       <div className="body"> 
          <div className="Navbar">
 <span>Comanda inteligente</span>



<div className="Dropdown">
    <ul>
    
        <li  >AtualizarFuncionario</li>
        <li>Atualizar Item</li>
        <li> Registrar Pagamento</li>
        <li>Cadastrar Mesas</li>
        <li> Cardapio</li>
        <li>Cadastrar Funcionários</li>
        <li>Cadastrar Item no Cardapio</li>
        <li> Listar Pedidos</li>
        <li>Listar Mesas</li>
        <li>Listar Funcionários</li>
        <li>Comandas Fechadas</li>
            

      

    </ul>
    
          <div className="barra">
         <h1>oi</h1> 
    </div>

    </div>
    
    
</div>
       
            <div className="title">
             <h1>Lista de Funcionários</h1>
            
            
            
            <div className="pesquisa">

          <input 
          type="text"
          placeholder=" pesquisar funcionário"
          
       />
      
        <BsSearch className="butom"/>
        <button>Adicionar</button>
      </div>
      
           
            </div> 

            <div className="table">
            <table>
  <tr>
    <th>#</th>
    <th>Nome</th>
    <th>Função</th>
    <th>Usuário</th>
    <th>Tipo</th>
    <th>Ações</th>
  </tr>
  <tr>
    <td>999</td>
    <td>Fulano de Tal</td>
    <td>Atendente e caixa</td>
    <td>Fulaninho22</td>
    <td>Atendente e caixa</td>
    
    <td><img src="icon-edit.png"></img></td>
  </tr>
  
</table>
            
            

        </div> 
            
    </div> 
        

    
        
        // </Route>
        // {//* </BrowserRouter> */}
    )
}
export default ListaFuncionarios;