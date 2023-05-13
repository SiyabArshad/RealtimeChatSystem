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
import formatDate from '../../utils/formateddatetime';
import ContactTile from './ContactTile';
import BroadCastTile from './BoroadCastTile';
export default function Users({list,calluser}) {
  return (
    <div style={{maxHeight: '80vh', overflowY: 'scroll'}}>
      <List
        sx={{ width: '100%', bgcolor: 'background.paper' }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        {list&&list.map((item,i)=>(
          <ContactTile calluser={calluser} item={item}/>
        ))}
      </List>
      <style>{`
        ::-webkit-scrollbar {
          width: 0;
          height: 0;
        }
      `}</style>
    </div>
  );
}
