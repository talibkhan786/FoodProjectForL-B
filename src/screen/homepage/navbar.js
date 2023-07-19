import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';

export default function AccountMenu({ setLoginUser }) {

  const navigate = useNavigate()

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);

  };

  const handleLogout = (e) => {

    navigate('/signin.js')
  }
  
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment >
      <Box  sx={{ position: 'sticky', top: 0, zIndex: 100, display: 'flex', alignItems: 'center', textAlign: 'center', bgcolor: 'success.main', mb: 2, minHeight: 80,}}>
        <Typography sx={{ minWidth: 100, fontSize: 30 }}>Yummy Food</Typography>
        <Typography sx={{ minWidth: 100, fontWeight: 'bold',}} style={{cursor:"pointer"}} onClick={()=>navigate("/")}>Home </Typography>
        <Typography sx={{ minWidth: 100,fontWeight: 'bold',}} style={{cursor:"pointer"}} onClick={()=>navigate("/about")}>About </Typography>
        <Typography sx={{
          minWidth:100,
          position: 'absolute',
          right: 0,
          top: 0,
          mr: 10,
          mt: 3,
          cursor:"pointer",
          fontWeight: 'bold',
        }}>
          My Orders</Typography>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{
              position: 'absolute',
              right: 0,
              top: 0,
              mr: 2,
              mt: 2,
            }}
            //sx={{display: 'flex', alignItems: 'right', textAlign: 'right'}}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 32, height: 32, }}>M</Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose}>
          <Avatar /> Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Avatar /> My account
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon >
            <Logout fontSize="small" onClick={()=>handleLogout} />
          </ListItemIcon >
          Logout
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
