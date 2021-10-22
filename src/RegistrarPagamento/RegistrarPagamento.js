import React from 'react'
import  './RegistrarPagamento.css'
import {BrowserRouter, Route} from 'react-router-dom'



function  RegistrarPagamento() {
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
                <h1>Registrar Pagamento</h1>
            </div>
            
             <h4 className="txt">Código da Comanda</h4>  
             <div className="pesq">
               
              <input type="text">
                  
              </input>  
              </div> 

              <button className="buton-1">Cancelar</button>                
              <button className="buton-2">Registrar Pagamento</button>
             
             </div>
        // </Route>
        // {//* </BrowserRouter> */}
    )
}
export default RegistrarPagamento;