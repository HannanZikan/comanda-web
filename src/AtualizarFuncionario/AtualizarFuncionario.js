import React from 'react'
import  '../CadastrarFuncionário/CadastrarFuncionario.css'
import {Link,Switch,BrowserRouter, Route} from 'react-router-dom'
import '../Menu/Menu.css'
import '../routes'




function  AtualizarFuncionario() {
    
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
             
                <h1>Atualizar Funcionário</h1>
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
                <h4>Nova Senha</h4>
                <input type="text">
                </input> 
        </div>

        <div className="ConfirmarSenha">
                <h4>Confirmar Nova Senha</h4>
                <input type="text">
                </input> 
        </div>

            
                <button className="butom01">Cancelar</button>                
                 <button className="butom02">Adicionar</button>


                 
               


       </div> 
            
        

      

        // </Route>
        // {//* </BrowserRouter> */}
    )
}
export default AtualizarFuncionario;