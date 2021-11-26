import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';

export const mainListItems = (
	<div>
		{/* <ListItem button component="a" href="/TelaInicial">
     <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText secondary="Inicio"/>
    </ListItem> */}

		<ListItem button component="a" href="/DadosEstabelecimento">
			<ListItemIcon>
				<DashboardIcon />
			</ListItemIcon>
			<ListItemText secondary="Dados Estabelecimento" />
		</ListItem>
		<ListItem button component="a" href="/Cardapio">
			<ListItemIcon>
				<ShoppingCartIcon />
			</ListItemIcon>
			<ListItemText secondary="Cardápio" />
		</ListItem>
		<ListItem button component="a" href="/CadastrarFuncionario">
			<ListItemIcon>
				<PeopleIcon />
			</ListItemIcon>
			<ListItemText secondary="Cadastrar Funcionário" />
		</ListItem>
		<ListItem button component="a" href="/CadastrarItemCardapio">
			<ListItemIcon>
				<BarChartIcon />
			</ListItemIcon>
			<ListItemText secondary="Cadastrar Item " />
		</ListItem>
		<ListItem button component="a" href="/ListaFuncionarios" >
			<ListItemIcon>
				<LayersIcon />
			</ListItemIcon>
			<ListItemText secondary="Lista de
     Funcionários" />
		</ListItem>

		<ListItem button component="a" href="/ListaPedidos">
			<ListItemIcon>
				<LayersIcon />
			</ListItemIcon>
			<ListItemText secondary="Lista de Pedidos" />
		</ListItem>
		<ListItem button component="a" href="/RegistrarPagamento">
			<ListItemIcon>
				<LayersIcon />
			</ListItemIcon>
			<ListItemText secondary="Registrar Pagamento" />
		</ListItem>
	</div>
);

export const secondaryListItems = (
	<div>

	</div>
);