import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import LogoutIcon from '@mui/icons-material/Logout';
import { NavLink } from 'react-router-dom';
import { Avatar } from '@mui/material';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import CreateIcon from '@mui/icons-material/Create';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft({user}) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar color='transparent' elevation={0} position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={open?handleDrawerClose:handleDrawerOpen}
            edge="start"
            sx={{ mr: 2 }}
          >
            <MenuIcon sx={{height:30,width:30}}/>
          </IconButton>

        </Toolbar>

      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <Divider />
        <List>
        <NavLink style={{textDecoration:"none",color:'inherit'}}  to={"/"}>
            <ListItem disablePadding={false}>
              <ListItemButton>
                <ListItemIcon>
                    <HomeIcon/>
                </ListItemIcon>
                <ListItemText primary={"Home"} />
              </ListItemButton>
            </ListItem>
            </NavLink>
            {
                user&&<>
                  <NavLink style={{textDecoration:"none",color:'inherit'}}  to={"/profile"}>
                <ListItem disablePadding={false}>
              <ListItemButton>
                <ListItemIcon>
                    <AccountCircleIcon/>
                </ListItemIcon>
                <ListItemText primary={"Profile"} />
              </ListItemButton>
            </ListItem>
            </NavLink>
            <NavLink style={{textDecoration:"none",color:'inherit'}}  to={"/chat"}>
            <ListItem disablePadding={false}>
              <ListItemButton>
                <ListItemIcon>
                    <ChatBubbleIcon/>
                </ListItemIcon>
                <ListItemText primary={"Chat"} />
              </ListItemButton>
            </ListItem>
            </NavLink>
            <NavLink style={{textDecoration:"none",color:'inherit'}}  to={"/addcontact"}>
            <ListItem disablePadding={false}>
              <ListItemButton>
                <ListItemIcon>
                    <AddCircleIcon/>
                </ListItemIcon>
                <ListItemText primary={"Add Contact"} />
              </ListItemButton>
            </ListItem>
            </NavLink>
            <NavLink style={{textDecoration:"none",color:'inherit'}} to={"/settingspage"}>
            <ListItem disablePadding={false}>
              <ListItemButton>
                <ListItemIcon>
                    <SettingsSuggestIcon/>
                </ListItemIcon>
                <ListItemText primary={"Setting"} />
              </ListItemButton>
            </ListItem>
            </NavLink>
            <NavLink style={{textDecoration:"none",color:'inherit'}}  to={"/logout"}>
            <ListItem disablePadding={false}>
              <ListItemButton>
                <ListItemIcon>
                    <LogoutIcon/>
                </ListItemIcon>
                <ListItemText primary={"Logout"} />
              </ListItemButton>
            </ListItem>
            </NavLink>
                </>
            }
            {
                !user&&<>
                    
                  <ListItem onClick={()=>window.location.pathname="login"} disablePadding={false}>
              <ListItemButton>
                <ListItemIcon>
                    <LockOpenIcon/>
                </ListItemIcon>
                <ListItemText primary={"Login"} />
              </ListItemButton>
            </ListItem>
            <ListItem onClick={()=>window.location.pathname="register"} disablePadding={false}>
              <ListItemButton>
                <ListItemIcon>
                    <CreateIcon/>
                </ListItemIcon>
                <ListItemText primary={"Register"} />
              </ListItemButton>
            </ListItem>
                </>
            }
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
    
      </Main>
    </Box>
  );
}