import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import ListItem from '@mui/material/ListItem';
import { Divider, colors } from '@mui/material';
import userimage from "../../assets/images/user2.jpg"
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import http from "../../utils/http.js"
import formatDate from '../../utils/formateddatetime';
import { useParams } from 'react-router-dom';
export default function ContactTile({calluser,item}) {
    let navigate = useNavigate();
    const params=useParams()
	const openChat = (id,item) => {
    calluser(item)
		navigate(`/chat/${id}`)
	}
    const [contactonfo,setcontactinfo]=React.useState()
    const getallcons=async()=>{
          const res2=await http.get(`http://localhost:5000/api/chat/contact/${item?.contactid}`)
          setcontactinfo(res2?.data)
 
      }
    React.useEffect(()=>{
        getallcons()
      },[params.id])
  return (
    <>
    <ListItemButton onClick={()=>openChat(item?.id,item)}>
      <ListItem disablePadding={true}>
        <ListItemAvatar>
          <Avatar>
            {
               contactonfo?.first_name!==null&&contactonfo?.first_name[0].toUpperCase()
            }
            </Avatar>
        </ListItemAvatar>
        <ListItemText
          sx={{}}
          primary={contactonfo?.first_name}
          secondary={
            <React.Fragment>
              {item?.text}
            </React.Fragment>
          }
        />
        <Typography variant='caption'>{formatDate(item?.time)}</Typography>
      </ListItem>
    </ListItemButton>
    <Divider/>
  </>
  )
}
