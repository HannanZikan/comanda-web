import React from 'react'
import  './AtualizarItem.css'
import {Link,BrowserRouter, Route} from 'react-router-dom'



function  AtualizarItem() {
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
                <h1>Atualizar Item</h1>
            </div>   

            <div className="nome">
                <h4>Nome</h4>
                <input type="text">
                </input>  
            
         </div>

         <div className="Descrição">
                <h4>Descrição</h4>
                <input type="text">
                </input> 
        </div>

        <div className="Valor">
                <h4>Valor</h4>
                <input type="text">
                </input> 
        </div>
        
        
        <div className="Status">
                <h4>Status</h4>
                <input type="text">
                </input> 
        </div>

            
                <button className="butom1">Cancelar</button>                
                 <button className="butom2">Adicionar</button>
            
        </div>
            
       

        

        // </Route>
        // {//* </BrowserRouter> */}
    )
}
export default AtualizarItem;