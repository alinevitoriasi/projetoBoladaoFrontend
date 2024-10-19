import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../../services/auth';

// import Typography from '../Typography/Typography';

import Diversity2Icon from '@mui/icons-material/Diversity2';
import HomeIcon from '@mui/icons-material/Home';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import PostAddIcon from '@mui/icons-material/PostAdd';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import SupportIcon from '@mui/icons-material/Support';
import InfoIcon from '@mui/icons-material/Info';
import { Icon } from '@mui/material';

const MainNav = () => {
  const userNav = [
    { label: 'Inicio', to: '/', icon: <HomeIcon /> },
    { label: 'Nova Publicação', to: '/novopost', icon: <PostAddIcon /> },
    {
      label: 'Minhas Publicações',
      to: '/myposts',
      icon: <LocalPostOfficeIcon />,
    },
    { label: 'Ajuda', to: '/', icon: <SupportIcon /> },
    { label: 'Sobre', to: '/', icon: <InfoIcon /> },
  ];

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div>
      <Toolbar>
        <Icon fontSize='large' style={{ color: 'rgba(3, 34, 84)' }}>
          <Diversity2Icon />
        </Icon>
        {/* <Typography variant='body1' sx={{ mx: 5 }}>
          CAMPUS JUNTOS
        </Typography> */}
      </Toolbar>
      {/* <Divider /> */}
      <List>
        {userNav.map(({ label, to, icon }, index) => (
          <Link key={index} to={to} style={{ textDecoration: 'none' }}>
            <ListItem key={label} disablePadding>
              <ListItemButton>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={label} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
        <ListItem key={'Sair'} disablePadding>
          <ListItemButton onClick={() => handleLogout()}>
            <ListItemIcon>
              <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText primary={'Sair'} />
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );
};

export default MainNav;