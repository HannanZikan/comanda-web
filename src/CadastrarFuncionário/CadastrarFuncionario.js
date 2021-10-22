import React from 'react'
import  './CadastrarFuncionario.css'
import {BrowserRouter, Route} from 'react-router-dom'



function  CadastrarFuncionario() {
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
                <h1>Cadastrar Funcionário</h1>
            </div>   

            <div className="nome">
                <h4>Nome</h4>
                <input type="text">
                </input>  
            
         </div>

         <div className="Função">
                <h4>Função</h4>
                <input type="text">
                </input> 
        </div>

        <div className="E-mail">
                <h4>E-mail</h4>
                <input type="text">
                </input> 
        </div>
        
        
        <div className="TipoUsuario">
                <h4>Tipo de Usuário</h4>
                <input type="text">
                </input> 
        </div>

        <div className="Senha">
                <h4>Senha</h4>
                <input type="text">
                </input> 
        </div>

        <div className="ConfirmarSenha">
                <h4>Confirmar Senha</h4>
                <input type="text">
                </input> 
        </div>

            
                <button className="butom01">Cancelar</button>                
                 <button className="butom02">Adicionar</button>
            
        </div>
            
        

        

     
    )
}
export default CadastrarFuncionario;