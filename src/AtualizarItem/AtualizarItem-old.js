import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
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
import  Button  from '@mui/material/Button';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { mainListItems, secondaryListItems } from '../components/menu-admin';




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

function DashboardContent() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar  position="absolute" style={{backgroundColor: "#3B4A4D"}} open={open}>
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
            height:310,
            marginLeft:150,
            marginTop:50,
          }}
        >
        <h2
          style={{
            marginTop:10,
            marginLeft:380,
          }}
        
        >Atualizar Item</h2>
        <Grid container spacing={3}>         
        <Grid item xs={12} sm={4}>
          <TextField
            style={{marginLeft:10,marginTop:30}}
            required
            id="firstName"
            name="Nome"
            label="Nome"
            fullWidth
            autoComplete="given-name"
            // variant="standard"
          />
        </Grid>
        <Grid  item xs={12} sm={4}>
          <TextField
            style={{marginLeft:5,marginTop:30}}
            required
            id="lastName"
            name="Valor"
            label="Valor"
            fullWidth
            autoComplete="family-name"
            // variant="standard"
          />
        </Grid>
        <Grid  item xs={12} sm={4}>
          <TextField
            style={{marginLeft:-5,marginTop:30}}
            required
            id="lastName"
            name="Status"
            label="Status"
            fullWidth
            autoComplete="family-name"
            // variant="standard"
          />
        </Grid>
        <Grid  item xs={12} sm={6}>
          <TextField
            style={{marginLeft:10, marginTop:20}}
            required
            id="lastName"
            name="Descricao"
            label="Descrição"
            fullWidth
            autoComplete="family-name"
            // variant="standard"
          />
        </Grid>
        <Grid  item xs={12} sm={6}>
          <TextField
            style={{marginLeft:-5, marginTop:20}}
            required
            id="lastName"
            name="imagem"
            label="Selecionar Imagem"
            fullWidth
            autoComplete="family-name"
            // variant="standard"
          />
        </Grid>
        
        </Grid>
        <Button variant="outlined" color="success"

          style={{
            marginTop:25,
            marginLeft:180,
          }}
        
        >Cadastrar</Button>
        <Button variant="outlined" color="secondary"
        
        style={{
          marginTop:25,
          marginLeft:300,
        
        
        }}
        
        >Cancelar</Button>

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


