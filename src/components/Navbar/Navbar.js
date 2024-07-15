import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';
import logo from '../../assets/img/logo-removebg-preview.png'; // Importe sua logo aqui

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: 'white',
  boxShadow: 'none',
  borderBottom: '1px solid #e0e0e0',
}));

const Logo = styled('img')({
  marginRight: '20px',
  maxHeight: '50px',
});

const NavBarButton = styled(Button)(({ theme }) => ({
  color: '#333',
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
}));

function NavBar() {
  return (
    <StyledAppBar position="fixed">
      <Toolbar>
        <Logo src={logo} alt="Logo" />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {/* Pode adicionar um texto ou deixá-lo vazio */}
        </Typography>
        <Box>
          <NavBarButton component={Link} to="/">Home</NavBarButton>
          <NavBarButton component={Link} to="/about">APostas</NavBarButton>
        </Box>
      </Toolbar>
    </StyledAppBar>
  );
}

export default NavBar;
