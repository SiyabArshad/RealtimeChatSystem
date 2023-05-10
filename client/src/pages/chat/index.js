import React from 'react'
import { Grid, Paper } from '@mui/material'
import { useStyles } from "./Ressources";
import "./styles.css"
import ChatUsers from './ChatUsers'
import Inbox from './Inbox'
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ContactsIcon from '@mui/icons-material/Contacts';
const Chat = ({user}) => {
	const classes = useStyles();
	const [selecteduser,setselecteduser]=React.useState(null)
	const [value, setValue] = React.useState(0);

	const callbackuser=(state)=>{
		setselecteduser(state)
		}
	return (
			<div className='chatparent'>
					<div className='chatcontainer1'>
		
						<ChatUsers calluser={callbackuser}/>
					</div>
					<div className='chatcontainer2'>
					{selecteduser!==null&&<Inbox user={user} userinfo={selecteduser}/>}
					</div>
			</div>
			
	)
}

export default Chat 
/*
			<Box>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
	    }}
      >
        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Contacts" icon={<ContactsIcon/>} />
       </BottomNavigation>
    </Box>
*/