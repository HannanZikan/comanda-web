import React, { useState } from 'react'
import './TelaLogin.css';
import { BrowserRouter, Link, Route, useHistory } from 'react-router-dom'
import { FaBarcode } from 'react-icons/fa';
import { BiLogIn, } from 'react-icons/bi';
import { RiLockPasswordLine } from 'react-icons/ri';
// import Routes from '../Routes';



function TelaLogin() {
	const history = useHistory()

	const [usuario, setUsuario] = useState('')
	const [senha, setSenha] = useState('')
	const [codigo, setCodigo] = useState('')

	function loginBizurado() {
		if (codigo == "4763") {
			if (usuario == "admin") {
				if (senha == "admin") {
					history.push('/Cardapio')
				} else {
					alert("Erro! Usuário ou senha ou código de acesso inválido.")
				}
			} else {
				alert("Erro! Usuário ou senha ou código de acesso inválido.")
			}
		} else {
			alert("Erro! Usuário ou senha ou código de acesso inválido.")
		}
	}

	return (
		<BrowserRouter>
			<Route>
				<div className="App">
					<div className="login-logo">
						<img src="slogan-1.png" />
					</div>
					<div className="login-right" >
						<h1>Painel de Acesso</h1>

						<div className="loginInputCodEmpresa">
							<FaBarcode />
							<input
								type="text"
								placeholder="Código da Empresa"
								name="codigo"
								onChange={e => setCodigo(e.target.value)}
							/>
						</div>

						<div className="loginInputUsuario">
							<BiLogIn />
							<input
								type="text"
								placeholder="Usuário"
								name="usuario"
								onChange={e => setUsuario(e.target.value)}
							/>
						</div>
						<div className="loginInputSenha">
							<RiLockPasswordLine />
							<input
								type="text"
								placeholder="Senha"
								name="senha"
								onChange={e => setSenha(e.target.value)}
							/>
						</div>

						<button type="button" onClick={() => {
							loginBizurado()
						}}>Entrar</button>
					</div>


				</div>
			</Route>
		</BrowserRouter>
	);
}

export default TelaLogin;