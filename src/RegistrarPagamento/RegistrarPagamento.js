import React from 'react'
import './RegistrarPagamento.css'
import { Link, BrowserRouter, Route } from 'react-router-dom'



function RegistrarPagamento() {
    return (

        <div className="body">
            <div className="Navbar">
                <span>Comanda inteligente</span>

                <div className="Dropdown">
                    <ul>
                        <li> <Link to="/AtualizarFuncionario" >AtualizarFuncionario</Link></li>
                        <li><Link to="/AtualizarItem">Atualizar Item</Link></li>
                        <li><Link to="/RegistrarPagamento"> Registrar Pagamento</Link></li>
                        <li><Link to="/Cardapio"> Cardapio</Link></li>
                        <li><Link to="/CadastrarFuncionario">Cadastrar Funcionários</Link></li>
                        <li><Link to="/CadastrarItemCardapio">Cadastrar Item no Cardapio</Link></li>
                        <li><Link to="/ListaPedidos"> Listar Pedidos</Link></li>
                        <li><Link to="ListaMesas">Listar Mesas</Link></li>
                        <li><Link to="/ListaFuncionarios">Listar Funcionários</Link></li>
                    </ul>

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