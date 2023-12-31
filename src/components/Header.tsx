import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import {
  Button,
  IconButton,
  Menu,
  Container,
  Box,
  Typography,
  MenuItem
} from '@mui/material';

import { AppBar, Toolbar } from "@mui/material";
import Image from "../assets/img/bg-topo.png";
import LogoUNILAB from "../assets/img/logo-unilab.png";
import styled from "styled-components";
import { Link } from "react-router-dom";


import Modal from '@mui/material/Modal';




const ImageLogo = styled(({ ...otherProps }) => <img alt="Logo UNILAB" src={LogoUNILAB} {...otherProps} />)`
  width: 300px;
  padding: 25px;
`;

const styles = {
  paperContainer: {
    backgroundImage: `url(${Image})`,
  },
};


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


export const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [openAbout, setOpenAbout] = React.useState(false);
  const handleOpenAbout = () => setOpenAbout(true);
  const handleCloseAbout = () => setOpenAbout(false);

  const [openContact, setOpenContact] = React.useState(false);
  const handleOpenContact = () => setOpenContact(true);
  const handleCloseContact = () => setOpenContact(false);

  const handleOpenNavMenu = (event: any) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" style={styles.paperContainer}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <ImageLogo />


          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                <MenuItem>
                  <Typography
                    sx={{ color: (theme) => theme.palette.primary.main }}
                    textAlign="center">Início</Typography>
                </MenuItem>
              </Link>

              <Link to="/actions" style={{ textDecoration: 'none', color: 'inherit' }}>
                <MenuItem onClick={handleOpenAbout}>
                  <Typography
                    sx={{ color: (theme) => theme.palette.primary.main }}
                    textAlign="center">Integridade</Typography>
                </MenuItem>
              </Link>

              <MenuItem onClick={handleOpenAbout}>
                <Typography
                  sx={{ color: (theme) => theme.palette.primary.main }}
                  textAlign="center">Sobre</Typography>
              </MenuItem>
              <MenuItem onClick={handleOpenContact}>
                <Typography
                  sx={{ color: (theme) => theme.palette.primary.main }}
                  textAlign="center">Contato</Typography>
              </MenuItem>
            </Menu>
          </Box>


          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

            <Button
              component={Link}
              to="/"
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              Início
            </Button>

            <Button
              component={Link} to="/actions"
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              Integridade
            </Button>
            <Button
              onClick={handleOpenAbout}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              Sobre
            </Button>
            <Button
              onClick={handleOpenContact}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              Contato
            </Button>

          </Box>


        </Toolbar>
      </Container>


      <Modal
        open={openAbout}
        onClose={handleCloseAbout}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography align="center" variant="h6" component="h2">
            Sobre
          </Typography>
          <Typography align="center" sx={{ mt: 2 }}>
            O painel abaixo consiste no Mapeamento de Riscos à Integridade, tendo como base o Guia de
            Gestão de Riscos para Integridade da CGU e a participação de unidades detentoras de processos
            caracterizados a riscos iminentes à integridade.
          </Typography>
          <Typography align="center" sx={{ mt: 2 }}>
            O referido Mapa compõe o rol de atividades previstas no Plano de Integridade da Unilab,
            exercícios 2022 a 2024, contendo, em suma, o processo, o evento e a resposta ao risco, bem
            como a situação de prazo de ação da unidade responsável pelo risco.
          </Typography>
        </Box>
      </Modal>



      <Modal
        open={openContact}
        onClose={handleCloseContact}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography align="center" variant="h6" component="h2">
            Dúvidas e ou Sugestões?
          </Typography>
          <Typography id="modal-modal-description" align="center" sx={{ mt: 2 }}>
            Encaminhe sua mensagem por este e-maill: sgit@unilab.edu.br
          </Typography>
        </Box>
      </Modal>

    </AppBar>
  );
};



