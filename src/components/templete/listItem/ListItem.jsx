import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddIcon from '@mui/icons-material/Add';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';

export const ListItem = () => {
  const navigate = useNavigate();

  return (
      
    <React.Fragment>
    
    <ListItemButton onClick={()=>navigate('#')}>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>
    
    <ListItemButton onClick={()=>navigate('orders')}>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Orders" />
    </ListItemButton>
    
    <ListItemButton onClick={()=>navigate('additem')}>
      <ListItemIcon>
        <AddIcon/>
      </ListItemIcon>
      <ListItemText primary="Add Items" />
    </ListItemButton>
  
    <ListItemButton onClick={()=>navigate('/')}>
      <ListItemIcon>
        <LogoutIcon/>
      </ListItemIcon>
      <ListItemText primary="Log Out" />
    </ListItemButton>
  
  </React.Fragment>
    )
}