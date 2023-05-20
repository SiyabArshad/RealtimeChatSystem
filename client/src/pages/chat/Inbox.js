import React,{useState,useEffect,useRef} from 'react'
import "./styles.css"
import { Divider, Typography,IconButton } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SendIcon from '@mui/icons-material/Send';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import IncomingMessage from './IncomingMessage';
import OutgoingMessage from './OutgoingMessage';
import { useParams } from "react-router-dom";
import http from "../../utils/http.js"
import axios from "axios"
import Loading from '../../components/Loading';
import io from 'socket.io-client';
const socket=io('http://localhost:5000');
export default function Inbox({userinfo,user,getprof}) {
  const chatsRef = useRef(null);
  const params=useParams()
  const [confidentiality,setconfidentiality]=React.useState("indivisual")
  const [inputFocused, setInputFocused] = useState(false);
  const [loading,setloading]=React.useState(false)
    const [messages, setMessages] = useState([]);
    const [typemessage,settypemessage]=useState("")
    const [contactonfo,setcontactinfo]=React.useState()
    const [error, setError] = useState(null);

  const handleInputFocus = () => {
    setInputFocused(true);
  };

  const handleInputBlur = () => {
    setInputFocused(false);
  };
const sendmessage=async()=>{
  if(typemessage.length!==0)
  {
    if(confidentiality==="all")
    {
      try {
        let messagedata={
            msgType:"outbound",
          text:typemessage,
          user:user?._id,
          from:"+5213314498458" 
        }
        const res=await http.post('/chat/broadcast',messagedata);
       } catch (error) {
        console.log(error);
        if (error.response && error.response.status === 400) {
          setError(error.response.data);
        } 
      };
    }
    else
    {
      try {
        let messagedata={
            msgType:"outbound",
          text:typemessage,
          user:user?._id,
          contact_id:userinfo?.contactid,
          from:"+5213314498458" 
        }
        const res=await http.post('/chat/conversations',messagedata);
      } catch (error) {
        console.log(error);
        if (error.response && error.response.status === 400) {
          setError(error.response.data);
        } 
      };
    }
    } 
}

const handleScroll = () => {
  const chatsDiv = chatsRef.current;
  if (chatsDiv.scrollTop === 0) {
    alert("start of list")
  }
  if (chatsDiv.scrollTop + chatsDiv.clientHeight === chatsDiv.scrollHeight) {
    alert("end of list")
  }
};
const scrollToBottom = () => {
  const chatWindow = chatsRef.current;
  chatWindow.scrollTop = chatWindow.scrollHeight;
};
const getallcons=async()=>{
  setloading(true)
  try{
    const res=await http.get(`http://localhost:5000/api/chat/conversations?contact_id=${userinfo?.contactid}`)
    const res2=await http.get(`http://localhost:5000/api/chat/contact/${userinfo?.contactid}`)
    const {data}=await http.get(`http://localhost:5000/api/user/companyinfo`)
		setconfidentiality(data?.confidentiality)
    setMessages(res?.data)
    setcontactinfo(res2?.data)
    getprof(res2?.data)
  }
  catch{
    setMessages([])
  }
  finally{
    setloading(false)
  }
}

useEffect(()=>{
  getallcons()
socket.emit("joinChatRoom",{roomid:`chat_${userinfo?.contactid}`})
socket.emit("joinBroadCastRoom", { roomid: `broadcast_${user?.clientID}` });
scrollToBottom();
},[params.id])

useEffect(() => {
   socket.connect()
    socket.on('messageevent',(payload)=>{
    setMessages(prev=>[...prev,payload])
    scrollToBottom();
  })
  socket.on('broadcastmessageevent',(payload)=>{
    setMessages(prev=>[...prev,payload])
    scrollToBottom();
  })
  scrollToBottom();
  const chatsDiv = chatsRef.current;
  chatsDiv.addEventListener('scroll', handleScroll);
  return () => {
    chatsDiv.removeEventListener('scroll', handleScroll);
  };
}, []);
useEffect(() => {
  const chatWindow = chatsRef.current;
  chatWindow.scrollTop = chatWindow.scrollHeight;
}, [messages]);
return (
    <div className='chatbox'>
      <Loading loading={loading}/>
        <div className='topbarchat'>
            <Typography>{contactonfo?.first_name} {`(${confidentiality})`}</Typography>
            <IconButton size='small'><MoreVertIcon/></IconButton>
        </div>
        <div className='chats'  ref={chatsRef}>
            {
                messages&&messages.map((item,i)=>(
                    item?.msgType==='outbound'?<OutgoingMessage message={item}/>:<IncomingMessage message={item}/>
                ))
            }
        </div>
        <div className='searchips'>
            <div  style={{border:inputFocused?"1px solid #0883D3":"1px solid #C8C8C8"}}
                className='inpbox'>
                <input 
                onChange={(e)=>settypemessage(e.target.value)}
                    placeholder='Type a message here....'
                  onFocus={handleInputFocus}
                  onBlur={handleInputBlur}
                />
                <div className='btns'>
                <IconButton size='small'><SentimentSatisfiedAltIcon/></IconButton>
                <IconButton size='small'><AttachFileIcon/></IconButton>
                <IconButton onClick={()=>sendmessage()} color='primary'  size='small'><SendIcon/></IconButton>
                </div>
            </div>
        </div>
    </div>
  )
}
