import { View, Text,Modal,TouchableOpacity,Pressable,Image,StyleSheet,ImageBackground,ScrollView,TextInput } from 'react-native'
import React from 'react'
import colors from "../../helpers/colors"
import Screen from "../../components/Screen"
import CaptionText from "../../components/Typography/CaptionText"
import Ionicons from "react-native-vector-icons/Ionicons"
import { RFPercentage as rp, RFValue as rf } from "react-native-responsive-fontsize";
import {Avatar} from "react-native-paper"
import ChatBox from '../../components/Chat/ChatBox'
import IncommingMessage from '../../components/Chat/IncommingMessage'
import OutGoinMessage from '../../components/Chat/OutGoinMessage'
import Feather from "react-native-vector-icons/Feather"
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import ScreenNames from '../../helpers/routes'
import Loading from "../../components/Loading"
import origin from "../../helpers/api.js"
import axios from "axios"
import { useSelector,useDispatch } from 'react-redux';
import { GetBroadCast } from '../../redux/broadcast/action'
import { useIsFocused } from '@react-navigation/native';
import io from 'socket.io-client';
// const socket=io(origin);
export default function Inbox({navigation,route}) {
  const focus=useIsFocused()
  const scrollViewRef = React.useRef(null);
  const scrollToBottom = () => {
    const chatWindow = scrollViewRef.current;
    chatWindow.scrollToEnd({ animated: true });
  };

    const userinfo=useSelector(state=>state?.authReducer)
    const [loading,setloading]=React.useState(false)
    const [messages, setMessages] = React.useState([]);
    const [typemessage,settypemessage]=React.useState("")
    const [contactonfo,setcontactinfo]=React.useState()
    const [error, setError] = React.useState(null);
    const {clientID,token,_id}=userinfo?.currentUser
    const chatinfo=route.params?.chatinfo//last message details _id,contactid,from,id,text
    const {broadcast}=useSelector(state=>state?.broadcastReducer)
    const getallcons=async()=>{
        setloading(true)
        try{
          const res=await axios.get(`${origin}/api/chat/conversations?contact_id=${chatinfo?.contactid}`,{
            headers:{
              'Content-Type': 'application/json',
              'x-auth-token':token,
              'clientid':clientID
            }
          })
          const res2=await axios.get(`${origin}/api/chat/contact/${chatinfo?.contactid}`,{
            headers:{
              'Content-Type': 'application/json',
              'x-auth-token':token,
              'clientid':clientID
            }
          })
          setMessages(res?.data)
          setcontactinfo(res2?.data)
        }
        catch(e){
            console.log(e)
          setMessages([])
        }
        finally{
          setloading(false)
        }
      }

      const sendmessage=async()=>{
        if(typemessage.length!==0)
        {
          if(broadcast)
          {
            try {
              let messagedata={
                  msgType:"outbound",
                text:typemessage,
                user:_id,
                from:"+5213314498458" 
              }
              const res=await axios.post(`${origin}/api/chat/broadcast`,messagedata,{
                headers:{
                  'Content-Type': 'application/json',
                  'x-auth-token':token,
                  'clientid':clientID
                }
              });
             } catch (error) {
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
                user:_id,
                contact_id:chatinfo?.contactid,
                from:"+5213314498458" 
              }
              const res=await axios.post(`${origin}/api/chat/conversations`,messagedata,{
                headers:{
                  'Content-Type': 'application/json',
                  'x-auth-token':token,
                  'clientid':clientID
                }
              });
            } catch (error) {
              console.log(error);
              if (error.response && error.response.status === 400) {
                setError(error.response.data);
              } 
            };
          }
          } 
      }  
    React.useEffect(()=>{
      const socket = io(origin);
      socket.connect();
      socket.on('messageevent',(payload)=>{
      setMessages(prev=>[...prev,payload])
      scrollToBottom()
    })
    socket.on('broadcastmessageevent',(payload)=>{
      setMessages(prev=>[...prev,payload])
      scrollToBottom()
    })
      socket.emit("joinChatRoom",{roomid:`chat_${chatinfo?.contactid}`})
        socket.emit("joinBroadCastRoom", { roomid: `broadcast_${clientID}` });
        getallcons() 
        scrollToBottom()
        return () => {
          socket.disconnect();
        };
        },[focus,navigation,route,scrollViewRef.current])
 
  return (
    <Screen>
    <Loading visible={loading}/>
    <View style={{flex:1,marginHorizontal:rp(2),display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
    <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginTop:rp(1)
}}>
        <View style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
            <TouchableOpacity  onPress={()=>navigation.pop()}>
            <Feather name="chevron-left" size={30} color={colors.lightblack} />
            </TouchableOpacity>
            <View style={{marginLeft:rp(2),display:"flex",flexDirection:"row",alignItems:"center"}}>
                <View style={{height:40,width:40,backgroundColor:colors.grey,borderRadius:20,display:"flex",justifyContent:"center",alignItems:"center"}}>
                    <CaptionText text={contactonfo?.first_name!==null&&contactonfo?.first_name[0].toUpperCase()}/>
                </View>
                <CaptionText text={contactonfo?.first_name!==''&&contactonfo?.first_name!==null?contactonfo?.first_name:"Guest"} style={{marginLeft:rp(1),fontSize:rp(2.5)}}/>
            </View>
        </View>
      
    </View>
    <View style={{flex:1,paddingVertical:rp(2)}}>
        <ScrollView ref={scrollViewRef} showsVerticalScrollIndicator={false}>
        {
                messages&&messages.map((item,i)=>(
                    item?.msgType==='outbound'?<OutGoinMessage key={i} message={item}/>:<IncommingMessage key={i} message={item}/>
                ))
          }
        </ScrollView>
    </View>
    <View style={{width:"100%",display:"flex",flexDirection:"row",paddingVertical:rp(1.5),paddingHorizontal:rp(1),alignItems:"center"}}>
        <TextInput value={typemessage} onChangeText={(e)=>settypemessage(e)} style={{width:"70%",paddingHorizontal:rp(2),paddingVertical:rp(2)}} placeholder='Your Message'/>
        <View style={{width:"30%",display:"flex",flexDirection:"row",alignItems:"center"}}>
        <Pressable style={{backgroundColor:colors.skyBlue,paddingHorizontal:rp(.8),paddingVertical:rp(.4),marginRight:rp(.5),borderRadius:rp(.5),display:"flex",alignItems:"center",justifyContent:"center"}}>
        <FontAwesome5 name="laugh" size={20} color={colors.white} />
        </Pressable>
        <Pressable style={{backgroundColor:colors.skyBlue,paddingHorizontal:rp(.8),paddingVertical:rp(.4),marginRight:rp(.5),borderRadius:rp(.5),display:"flex",alignItems:"center",justifyContent:"center"}}>
        <MaterialIcons name="attach-file" size={20} color={colors.white} />
        </Pressable>
        <Pressable onPress={sendmessage} style={{backgroundColor:colors.skyBlue,paddingHorizontal:rp(.8),paddingVertical:rp(.4),marginRight:rp(.5),borderRadius:rp(.5),display:"flex",alignItems:"center",justifyContent:"center"}}>
        <Feather name="send" size={20} color={colors.white} />
        </Pressable>
        </View>
    </View>
    </View>
    </Screen>
  )
}