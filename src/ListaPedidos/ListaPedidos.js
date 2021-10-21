import React from 'react'
import  './ListaPedidos.css'
import {BrowserRouter, Route} from 'react-router-dom'
import { BiLogIn, BsSearch } from 'react-icons/bs';




function  Listapedidos () {
    return (
       <div className="body"> 
       
        
            <div className="title">
                <h1>Lista de Pedidos</h1>
            </div>
            
            
            <div className="pesquisa">

          <input 
          type="text"
          placeholder=" pesquisar pedido"
          
       />
      
      <BsSearch className="butom-pedido"/>

            </div> 

            <div className="table">
            <table>
  <tr>
    <th>#</th>
    <th>Clientes</th>
    <th>Itens</th>
    <th>Comentário</th>
    <th>Qtde.</th>
    <th>Ações</th>
  </tr>
  <tr>
    <td>9999</td>
    <td>Fulano de Tal</td>
    <td>X comanda</td>
    <td>sem maionese</td>
    <td>2</td>
    
    <td><button>Preparar</button></td>
  </tr>
  
</table>
            
            

        </div> 
            
    </div> 
        

    
        
        // </Route>
        // {//* </BrowserRouter> */}
    )
}
export default Listapedidos;