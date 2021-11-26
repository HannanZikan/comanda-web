import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import logo from '../Imagens/logo-6.png'
import { width } from '@mui/system';

function Copyright(props) {
	return (
		<Typography variant="body2" color="text.secondary" align="center" {...props}>
			{'Copyright © '}
			<Link color="inherit" href="https://mui.com/">
				Ped App
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}

const theme = createTheme({
	palette: {
		login: {
			main: '#ff6300',
			contrastText: '#fff'
		},
	},
});

export default function SignIn() {
	const handleSubmit = (event) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		// eslint-disable-next-line no-console
		console.log({
			email: data.get('email'),
			password: data.get('password'),
		});
	};

	const history = useHistory()

	const [usuario, setUsuario] = useState('')
	const [senha, setSenha] = useState('')
	const [codigo, setCodigo] = useState('')

	function loginBizurado() {
		if (codigo == "1234") {
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
		<ThemeProvider theme={theme}>
			<Container component="main" maxWidth="xs">
				<CssBaseline />
				<Box
					sx={{
						marginTop: 8,
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
					}}
				>
					{/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
						<Avatar
							alt="PedApp"
							src="logo-6.png"
							sx={{ width: 20, height: 20 }}
						/>
					</Avatar> */}
					<img src="logo-6.png" alt="PedApp" style={{ height: 50, marginBottom: 20 }} />

					<Typography component="h1" variant="h5">
						Entrar
					</Typography>
					<Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
						<TextField
							margin="normal"
							fullWidth
							id="email"
							label="Código de Acesso"
							name="email"
							autoComplete="text"
							autoFocus
							color="warning"
							onChange={e => setCodigo(e.target.value)}
						/>
						<TextField
							margin="normal"
							fullWidth
							id="email"
							label="Email"
							name="email"
							autoComplete="email"
							color="warning"
							onChange={e => setUsuario(e.target.value)}
						/>
						<TextField
							margin="normal"
							fullWidth
							name="password"
							label="Senha"
							type="password"
							id="password"
							autoComplete="current-password"
							color="warning"
							onChange={e => setSenha(e.target.value)}
						/>
						<FormControlLabel
							control={<Checkbox value="lembrarMe" color="warning" />}
							label="Lembrar-me"
						/>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							color="login"
							sx={{ mt: 3, mb: 2 }}
							onClick={() => {
								loginBizurado()
							}}>
							Entrar
						</Button>
					</Box>
				</Box>
				<Copyright sx={{ mt: 8, mb: 4 }} />
			</Container>
		</ThemeProvider>
	);
}