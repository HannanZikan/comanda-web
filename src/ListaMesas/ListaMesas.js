import React from 'react'
import  '../ListaFuncionarios/ListaFuncionarios.css'
import {BrowserRouter, Route} from 'react-router-dom'
import { BiLogIn, BsSearch } from 'react-icons/bs';




function  ListarMesas () {
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
                <h1>Listar Mesas</h1>
           
            
            
            <div className="pesquisa">

          <input 
          type="text"
          placeholder=" pesquisar mesa"
          
       />
      
        <BsSearch className="butom"/>
        <button>Listar</button>
      </div>
      
           
            </div> 

            <div className="table">
            <table>
  <tr>
    <th>#</th>
    <th>Número da Mesa</th>
    <th>Ações</th>
  </tr>
  <tr>
    <td>999</td>
    <td>7495</td>
    
    <td><img src="icon-edit.png"></img></td>
  </tr>
  
</table>
            
            

        </div> 
            
    </div> 
        

    
        
        // </Route>
        // {//* </BrowserRouter> */}
    )
}
export default ListarMesas;