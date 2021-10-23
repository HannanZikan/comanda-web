import React from 'react'
import './Cardapio.css'
import { Link, BrowserRouter, Route } from 'react-router-dom'
import { BiLogIn, BsSearch } from 'react-icons/bs';

function cardapio() {
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
        <h1>Cardápio</h1>
      </div>

      <div className="pesquisa-cardapio ">

        <input
          type="text"
          placeholder=" pesquisar item"

        />

        <BsSearch className="butom" />
        <button>Adicionar</button>
      </div>

      <div className="table">
        <table>
          <tr>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Ações</th>
          </tr>
          <tr>
            <td>Porção de batata frita</td>
            <td>500g de batata frita com bacon e queijo cheddar</td>
            <td>R$ 15,00</td>
            <td>Lanche</td>
            <td><img src="icon-edit.png"></img></td>
          </tr>
          <tr>
            <td>x-salada</td>
            <td>pão, hamburguer, queijo, alface, tomate</td>
            <td>R$ 5,00</td>
            <td>Lanche</td>
            <td><img src="icon-edit.png"></img></td>
          </tr>
          <tr>
            <td>X-Tudo</td>
            <td>pão, hamburguer, queijo, alface, tomate, picles, cebola, bacon, calabresa, ovo frito</td>
            <td>R$ 10,00</td>
            <td>Lanche</td>
            <td><img src="icon-edit.png"></img></td>
          </tr>
          <tr>
            <td>Pizza de Calabresa</td>
            <td>mutsarela, tomate, calabresa, orégano</td>
            <td>R$ 40,00</td>
            <td>Pizza</td>
            <td><img src="icon-edit.png"></img></td>
          </tr>
          <tr>
            <td>Pizza de brócolis com carne seca</td>
            <td>mutsarela, tomate, brócolis, carne seca, orégano</td>
            <td>R$ 15,00</td>
            <td>Pizza</td>
            <td><img src="icon-edit.png"></img></td>
          </tr>
          <tr>
            <td>Cuba libre</td>
            <td>Rum, coca-cola, gelo e limão</td>
            <td>R$ 20,00</td>
            <td>bebida</td>
            <td><img src="icon-edit.png"></img></td>
          </tr>
          <tr>
            <td>Coca-Cola</td>
            <td>lata 200ml</td>
            <td>R$ 2,00</td>
            <td>Bedida</td>
            <td><img src="icon-edit.png"></img></td>
          </tr>
        </table>
      </div>
    </div>
  )
}
export default cardapio;