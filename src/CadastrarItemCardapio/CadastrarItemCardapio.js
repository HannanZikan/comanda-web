import './CadastrarItemCardapio.css'
import React from 'react'



// import props from 'react'

function CadastrarItemCardapio  ()  {


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
                        <h1>Cadastrar Item</h1>
            </div>
               
                
                <div>
                    <form >
                        <div className="nome">
                            <h4>Nome</h4>
                            <input type="text" placeholder="Nome" name="nome" >
                            </input>

                        </div>

                        <div className="Descrição">
                            <h4>Descrição</h4>
                            <input type="text" placeholder="Descrição" name="descricao" >
                            </input>
                        </div>

                        <div className="Valor">
                            <h4>Valor</h4>
                            <input type="text" placeholder="Valor" name="valor" 
                            >
                            </input>
                        </div>


                        <div className="Status">
                            <h4>Status</h4>
                            <input type="text" placeholder="Status" name="status" >
                            </input>
                        </div>


                        <button className="butom1" type="submit" >Cancelar</button>
                        <button className="butom2" type="submit">Adicionar</button>
                    </form>

                </div>

        </div>
       
    )
}
export default CadastrarItemCardapio;