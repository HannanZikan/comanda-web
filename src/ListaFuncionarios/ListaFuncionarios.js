import React from 'react'
import './ListaFuncionarios.css'
import { Link, BrowserRouter, Route } from 'react-router-dom'
import { BiLogIn, BsSearch } from 'react-icons/bs';




function ListaFuncionarios() {
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
                <h1>Lista de Funcionários</h1>

                <div className="pesquisa">

                    <input
                        type="text"
                        placeholder=" pesquisar funcionário"

                    />

                    <BsSearch className="butom" />
                    <button>Adicionar</button>
                </div>
            </div>

            <div className="table">
                <table>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>Função</th>
                        <th>Usuário</th>
                        <th>Tipo</th>
                        <th>Ações</th>
                    </tr>
                    <tr>
                        <td>999</td>
                        <td>Fulano de Tal</td>
                        <td>Atendente e caixa</td>
                        <td>Fulaninho22</td>
                        <td>Atendente e caixa</td>

                        <td><img src="icon-edit.png"></img></td>
                    </tr>

                </table>
            </div>

        </div>

        // </Route>
        // {//* </BrowserRouter> */}
    )
}
export default ListaFuncionarios;