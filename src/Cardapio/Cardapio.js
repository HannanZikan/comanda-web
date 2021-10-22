import React from 'react'
import  './Cardapio.css'
// import {BrowserRouter, Route} from 'react-router-dom'
import { BiLogIn, BsSearch } from 'react-icons/bs';




function  cardapio () {
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
                <h1>Cardápio</h1>
            </div>

         <div className="pesquisa-cardapio ">

            <input 
            type="text"
            placeholder=" pesquisar item"

        />

            <BsSearch className="butom"/>
            <button>Adicionar</button>
            </div>   

            <div className="table">
    <table>
  <tr>
    <th>#</th>
    <th>Nome</th>
    <th>Descrição</th>
    <th>Valor</th>  
    <th>Status</th>
    <th>Ações</th>
  </tr>
  <tr>
    <td>999</td>
    <td>X Comanda</td>
    <td>Dois hambúrgueres, alface, queijo, molho especial, cebola, picles e pão com gergelim</td>
    <td>R$ 999,99</td>
    <td>Ativo</td>
    <td><img src="icon-edit.png"></img></td>
  </tr>
  
</table>
</div>
       </div>
    )
}
export default cardapio;