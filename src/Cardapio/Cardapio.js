import React from 'react'
import  './Cardapio.css'
import {Link,BrowserRouter, Route} from 'react-router-dom'
import { BiLogIn, BsSearch } from 'react-icons/bs';




function  cardapio () {
    return (
       <div className="body">
               <div className="Navbar">
 <span>Comanda inteligente</span>



<div className="Dropdown">
    <ul>
    
    <li> <Link to ="/AtualizarFuncionario" >AtualizarFuncionario</Link></li>     
       
       <li><Link to ="/AtualizarItem">Atualizar Item</Link></li>
       <li><Link to ="/RegistrarPagamento"> Registrar Pagamento</Link></li>
       <li><Link to ="/Cardapio"> Cardapio</Link></li>
       <li><Link to ="/CadastrarFuncionario">Cadastrar Funcionários</Link></li>
       <li><Link to = "/CadastrarItemCardapio">Cadastrar Item no Cardapio</Link></li>
       <li><Link to ="/ListaPedidos"> Listar Pedidos</Link></li>
       <li><Link to ="ListaMesas">Listar Mesas</Link></li>
       <li><Link to ="/ListaFuncionarios">Listar Funcionários</Link></li>
       
            
            

      

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