import * as React from 'react';
import { styled, createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { mainListItems, secondaryListItems } from '../components/menu-admin';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';

function Copyright(props) {
	return (
		<Typography variant="body2" color="text.secondary" align="center" {...props}>
			{'Copyright © '}
			<Link color="inherit" href="https://mui.com/">
				Your Website
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
	shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
	zIndex: theme.zIndex.drawer + 1,
	transition: theme.transitions.create(['width', 'margin'], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	...(open && {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	}),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
	({ theme, open }) => ({
		'& .MuiDrawer-paper': {
			// position: 'relative',
			whiteSpace: 'nowrap',
			width: drawerWidth,
			transition: theme.transitions.create('width', {
				easing: theme.transitions.easing.sharp,
				duration: theme.transitions.duration.enteringScreen,
			}),
			boxSizing: 'border-box',
			...(!open && {
				overflowX: 'hidden',
				transition: theme.transitions.create('width', {
					easing: theme.transitions.easing.sharp,
					duration: theme.transitions.duration.leavingScreen,
				}),
				width: theme.spacing(7),
				[theme.breakpoints.up('sm')]: {
					width: theme.spacing(9),
				},
			}),
		},
	}),
);

const mdTheme = createTheme();

const names = [
	'Administrador',
	'Atendente',
	'Cozinha'
];

function DashboardContent() {
	const [open, setOpen] = React.useState(true);
	const toggleDrawer = () => {
		setOpen(!open);
	};
	const theme = useTheme();
	const [personName, setPersonName] = React.useState([]);
	const handleChangeChip = (event) => {
		const {
			target: { value },
		} = event;
		setPersonName(
			typeof value === 'string' ? value.split(',') : value,
		);
	};

	return (
		<ThemeProvider theme={mdTheme}>
			<Box sx={{ display: 'flex' }}>
				<CssBaseline />
				<AppBar position="absolute" style={{ backgroundColor: "#3B4A4D" }} open={open}>
					<Toolbar
						sx={{
							pr: '24px', // keep right padding when drawer closed
						}}
					>
						<IconButton
							edge="start"
							color="inherit"
							aria-label="open drawer"
							onClick={toggleDrawer}
							sx={{
								marginRight: '36px',
								...(open && { display: 'none' }),
							}}
						>
							<MenuIcon />
						</IconButton>
						<Typography
							component="h1"
							variant="h6"
							color="inherit"
							noWrap
							sx={{ flexGrow: 1 }}
						>
							Comanda Inteligente
						</Typography>
						<IconButton color="inherit">
							<img src="logo-6.png" width="80px" height="50px"></img>
						</IconButton>
					</Toolbar>
				</AppBar>
				<Drawer variant="permanent" open={open}>
					<Toolbar
						sx={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'flex-end',

							px: [1],
						}}
					>
						<IconButton onClick={toggleDrawer}>
							<ChevronLeftIcon />
						</IconButton>
					</Toolbar>
					<Divider />
					<List>{mainListItems}</List>
					<Divider />
					<List>{secondaryListItems}</List>
				</Drawer>
				<Box
					component="main"
					sx={{
						backgroundColor: (theme) =>
							theme.palette.mode === 'light'
								? theme.palette.grey[100]
								: theme.palette.grey[900],
						flexGrow: 1,
						height: '100vh',
						overflow: 'auto',
					}}
				>
					<Toolbar />
					<Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>

						<Grid container spacing={3}>
							<Grid item sm={12}>
								<Paper
									style={{
										marginLeft: 150,
										marginTop: 50,
									}}>

									<h2 style={{
										marginTop: 10,
										marginBottom: 50,
										display: "flex",
										justifyContent: "center",
									}}>Cadastrar Funcionário</h2>

									<Grid container spacing={3}
										style={{
											display: "flex",
											justifyContent: "center",
											paddingLeft: 15,
											paddingRight: 15,
										}}>

										<Grid item xs={12}>
											<TextField
												required
												id="firstName"
												name="NomeCompleto"
												label="Nome Completo"
												size="small"
												fullWidth
												autoComplete="given-name"
											/>
										</Grid>
										<Grid item xs={4}>
											<FormControl size="small" sx={{ width: 307 }}>
												<InputLabel id="funcao" required>Função</InputLabel>
												<Select
													labelId="funcao"
													id="funcao"
													required
													multiple
													value={personName}
													onChange={handleChangeChip}
													input={<OutlinedInput id="funcao" label="Função" />}
													renderValue={(selected) => (
														<Box sx={{ display: 'flex', gap: 0.5 }}>
															{selected.map((value) => (
																<Chip key={value} label={value} />
															))}
														</Box>
													)}

												>
													{names.map((name) => (
														<MenuItem
															key={name}
															value={name}
														>
															{name}
														</MenuItem>
													))}
												</Select>
											</FormControl>
										</Grid>
										<Grid item xs={4}>
											<TextField
												required
												id="lastName"
												name="email"
												label="E-mail"
												size="small"
												fullWidth
												autoComplete="family-name"
											/>
										</Grid>
										<Grid item xs={4}>
											<TextField
												required
												id="lastName"
												name="NomeUsuario"
												label="Nome de Usuário"
												size="small"
												fullWidth
												autoComplete="family-name"
											/>
										</Grid>
										<Grid item xs={6}>
											<TextField
												required
												id="lastName"
												name="Senha"
												label="Senha"
												size="small"
												fullWidth
												type="password"
												autoComplete="current-password"
											/>
										</Grid>
										<Grid item xs={6}>
											<TextField
												required
												id="lastName"
												name="ConfirmarSenha"
												label="Confirmar Senha"
												size="small"
												fullWidth
												type="password"
												autoComplete="current-password"
											/>
										</Grid>
									</Grid>
									<Grid
										style={{
											marginTop: 20,
											paddingBottom: 20,
											display: "flex",
											justifyContent: "space-around",
										}}>
										<Button variant="contained" color="error"
											style={{
												marginTop: 25,
											}}>Cancelar</Button>
										<Button variant="contained" color="success"
											style={{
												marginTop: 25,
											}}>Cadastrar</Button>
									</Grid>
								</Paper>
							</Grid>
						</Grid>
					</Container>
				</Box>
			</Box>
		</ThemeProvider>
	);
}

export default function Dashboard() {
	return <DashboardContent />;
}
