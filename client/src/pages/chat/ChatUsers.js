import React, { useEffect, useState } from "react";
import { TextField, Box,Badge,Grid,Divider, List,ListItemIcon,ListItem,ListItemText,Avatar,Paper,FormControl,OutlinedInput, Typography } from "@mui/material";
import { makeStyles } from '@mui/styles';
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import "./styles.css"
import Users from "./Users";
import http from '../../utils/http';
import { useParams } from "react-router-dom";
import Loading from '../../components/Loading';
const useStyles = makeStyles({
    root: {
      '& .MuiOutlinedInput-root': {
        borderRadius: 0,

      },
    },
  });
export default function ChatUsers({calluser,getprof}) {
      const [loading,setloading]=React.useState(false)
      const classes = useStyles();
      const [search,setsearch]=React.useState("")
      const [lastconvs,setlastconvs]=React.useState([])
      const [list, setList] = React.useState([]);
      const searchfunc = (e) => {
        const searchString = e.target.value;
        setsearch(searchString);
        if (searchString === '') {
          setlastconvs(list);
        } else {
          setlastconvs(lastconvs?.filter((item, i) => item?.name.toLowerCase().includes(searchString.toLowerCase())));
        }
      };
      const params=useParams()
      const getallcons=async()=>{
        setloading(true)
        try{
          http.get(`http://localhost:5000/api/chat/lastconversations`).then((res) => {
            setList(res.data);
            setlastconvs(res.data)        
        });
        }
        catch{
        }
        finally{
          setloading(false)
        }
      }
    React.useEffect(() => {
   getallcons()
    }, []);
  return (
    <div>
        <Loading loading={loading}/>
        <FormControl sx={{ width: '100%'}}>
                <TextField size="medium" 
                 variant="outlined"
                 className={classes.root}
                placeholder="Search" 
                onChange={(e)=>searchfunc(e)}
                value={search}
                />
        </FormControl>
        <div className="parts">
            <Users list={lastconvs} calluser={calluser}/>
        </div>
    </div>
  )
}
