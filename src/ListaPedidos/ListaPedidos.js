import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
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
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';



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

const theme = createTheme({
    palette: {
        edit: {
            main: '#FFCA2C',
            contrastText: '#fff'
        },
    },
});

function DashboardContent() {
    const [open, setOpen] = React.useState(true);
    const toggleDrawer = () => {
        setOpen(!open);
    };

    function createData(id, cliente, itens, comentarios, quantidade, mesa) {
        return { id, cliente, itens, comentarios, quantidade, mesa };
    }

    const rows = [
        createData('#1548', 'Roberto Guimarães', ['X-Tudo', 'Coca-Cola'], ['Sem Maionese', 'Com gelo e limão'], [1, 1], '15'),
        createData('#1549', 'Matheus Ramos', ['Pizza de Calabresa', 'Fanta Laranja'], ['Sem comentários', 'Com gelo'], [1, 2], '03'),
        createData('#1550', 'Pedro Matias', ['Poção de Batata Frita', 'Cuba Libre'], ['Bastante cheddar', 'Sem Comentários'], [1, 3], '09'),
    ];

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
                                        display: "flex",
                                        justifyContent: "center",
                                    }}>Lista de Pedidos</h2>

                                    <Grid container xs={11}
                                        style={{
                                            marginLeft: 40,
                                            marginTop: 30,
                                            flexDirection: "row",
                                        }}>

                                        <Paper
                                            component="form"
                                            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
                                        >
                                            <InputBase
                                                sx={{ ml: 1, flex: 1 }}
                                                placeholder="Pesquisar Pedido"
                                                inputProps={{ 'aria-label': 'pesquisar pedido' }}
                                            />
                                            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                                            <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                                                <SearchIcon />
                                            </IconButton>
                                        </Paper>
                                    </Grid>


                                    <TableContainer component={Paper}>
                                        <Table sx={{ minWidth: 600, }} aria-label="a dense table"
                                            style={{
                                                marginTop: 50,
                                                marginBottom: 20,
                                                paddingLeft: 15,
                                                paddingRight: 15,
                                            }}>
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell align="left"></TableCell>
                                                    <TableCell align="left">Cliente</TableCell>
                                                    <TableCell align="left">Itens</TableCell>
                                                    <TableCell align="left">Comentários</TableCell>
                                                    <TableCell align="left">Qtde.</TableCell>
                                                    <TableCell align="left">Mesa</TableCell>
                                                    <TableCell align="left">Ações</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {rows.map((row) => (
                                                    <TableRow
                                                        key={row.id}
                                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                    >
                                                        <TableCell component="th" scope="row" align="left">
                                                            {row.id}
                                                        </TableCell>
                                                        <TableCell align="left">{row.cliente}</TableCell>
                                                        <TableCell align="left">
                                                            <List>
                                                                {row.itens.map((array) => {
                                                                    return (
                                                                        <ListItem disablePadding style={{ marginBottom: 10 }}>
                                                                            {array}
                                                                        </ListItem>
                                                                    )
                                                                })}
                                                            </List>
                                                        </TableCell>
                                                        <TableCell align="left">
                                                            <List>
                                                                {row.comentarios.map((array) => {
                                                                    return (
                                                                        <ListItem disablePadding style={{ marginBottom: 10 }}>
                                                                            {array}
                                                                        </ListItem>
                                                                    )
                                                                })}
                                                            </List>
                                                        </TableCell>
                                                        <TableCell align="left">
                                                            <List>
                                                                {row.quantidade.map((array) => {
                                                                    return (
                                                                        <ListItem disablePadding style={{ marginBottom: 10 }}>
                                                                            {array}
                                                                        </ListItem>
                                                                    )
                                                                })}
                                                            </List>
                                                        </TableCell>
                                                        <TableCell align="left">{row.mesa}</TableCell>
                                                        <TableCell align="left">
                                                            <List>
                                                                <ListItem disablePadding>
                                                                    <Button variant="contained" color="primary" style={{ marginBottom: 5 }}>Preparar</Button>
                                                                </ListItem>
                                                                <ListItem disablePadding>
                                                                    <Button variant="contained" color="success">Entregar</Button>
                                                                </ListItem>
                                                            </List>
                                                        </TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </Box>
        </ThemeProvider >
    );
}

export default function Dashboard() {
    return <DashboardContent />;
}


