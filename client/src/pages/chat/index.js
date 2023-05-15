import React from 'react'
import { Grid, Paper, Typography,Button } from '@mui/material'
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
import http from '../../utils/http';
import Useriameg from "../../assets/images/user2.jpg"
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
const Chat = ({user}) => {
	const [selecteduser,setselecteduser]=React.useState(null)
	const [profile,setprofile]=React.useState(null)
	const callbackuser=(state)=>{
		setselecteduser(state)
		}
	const getprof=(state)=>{
		setprofile(state)
	}	
	return (
			<div className='chatparent'>
					<div className='chatcontainer1'>
						<ChatUsers getprof={getprof} calluser={callbackuser}/>
					</div>
					{
						selecteduser&&<div className='chatcontainer2'>
						<Inbox getprof={getprof} user={user} userinfo={selecteduser}/>
						</div>
					}
					{
						selecteduser&&<div className='chatcontainer3'>
						<div className='biodata'>
								<img  className='dp' src={Useriameg}/>
								<Typography sx={{marginTop:1,fontSize:15}}>{`${profile?.first_name?profile?.first_name:"First Name"} ${profile?.last_name?profile?.last_name:"Last Name"}`}</Typography>
								<div className='nmbr'>
									<PhoneEnabledIcon sx={{height:15,width:15}}/>
								<Typography sx={{marginLeft:1,fontSize:15}}>+ {profile?.phone?profile?.phone:"99999999"}</Typography>
								</div>
								<div className='childcon1'>
									<Button disableElevation={true}  sx={{bgcolor:"#2196f3",textTransform:"capitalize",marginBottom:1}} variant='contained'>Open in Crm</Button>
									<Button disableElevation={true} sx={{bgcolor:"rgba(33, 150, 243,0.3)",color:"#2196f3",textTransform:"capitalize"}} variant='contained'>Tranfer to Other Agent</Button>
								</div>
						</div>
				</div>
					}
			</div>
			
	)
}

export default Chat 
