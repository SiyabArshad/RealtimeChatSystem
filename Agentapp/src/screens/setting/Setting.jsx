import { View, Modal,TouchableOpacity,Pressable,Image,StyleSheet,ImageBackground,ScrollView, Dimensions ,TextInput} from 'react-native'
import React from 'react'
import colors from "../../helpers/colors"
import fonts from "../../helpers/fonts"
import Screen from "../../components/Screen"
import Heading from "../../components/Typography/Heading"
import CaptionText from "../../components/Typography/CaptionText"
import Feather from "react-native-vector-icons/Feather"
import { RFPercentage } from "react-native-responsive-fontsize";
import ButtonFilled from "../../components/buttons/ButtonFilled"
import ButtonOutline from '../../components/buttons/ButtonOutline'
import SubTitleText from "../../components/Typography/Subtitle"
import Entypo from "react-native-vector-icons/Entypo"
import LabelText from "../../components/Typography/LableText"
import { LinearProgress,Avatar } from 'react-native-elements'
import ConversationCard from '../../components/ConversationCard'
import ContactCard from "../../components/ContactCard"
import ScreenName from "../../helpers/routes"
import MessageCard from "../../components/MessageCard"
import axios from 'axios'
import origin from '../../helpers/api'
import { useNavigation } from '@react-navigation/native';
import { loginaction,logoutaction,getCurrentuser } from '../../redux/auth/action'
import { GetBroadCast,UpdateBroadCast } from '../../redux/broadcast/action';
import { GetProfile } from '../../redux/profile/action';
import { useSelector,useDispatch } from 'react-redux';
import {
    useTheme,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch,
  } from 'react-native-paper';
export default function Setting({navigation,route}) {
    const dispatch=useDispatch()
    const userinfo=useSelector(state=>state?.authReducer)
    const {clientID,token,_id}=userinfo?.currentUser
    const binfo=useSelector(state=>state?.broadcastReducer)
    const pinfo=useSelector(state=>state?.profileReducer)
    const [checked,setchecked]=React.useState(binfo?.broadcast||false)
    const fetchdata=async()=>{
      await dispatch(GetBroadCast({clientid:clientID,token}))
      await dispatch(GetProfile({clientid:clientID,token}))
    }
    React.useEffect(()=>{
      fetchdata()
    },[clientID,token])
  return (
    <Screen>
    <View style={{flex:1}}>
    <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginVertical:RFPercentage(3),paddingHorizontal:RFPercentage(2)}}>
    <Pressable onPress={()=>navigation.pop()} style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
    <Entypo name="chevron-left" size={30} color={colors.skyBlue}/>
    </Pressable>
    <CaptionText color={colors.lightblack} text="Settings"/>
    </View>
    
    <View style={styles.userInfoSection}>
           
           <View style={{display:"flex",alignItems:"center",justifyContent:"center",marginVertical:RFPercentage(2)}}>
                  <View style={{borderWidth:1,borderColor:colors.brown,marginBottom:RFPercentage(.4),padding:RFPercentage(.5),display:"flex",justifyContent:"center",alignItems:"center",height:60,width:60,borderRadius:30}}>
               <Avatar rounded size={"medium"} source={require("../../../assets/images/user.png")}/>
               </View>
             <Title style={styles.title}>{pinfo.profile?.name}</Title>
             <CaptionText text={pinfo.profile?.email}/>
           </View>
             <View style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",marginVertical:RFPercentage(2)}}>
               <CaptionText text={"BroadCast"}/>
               <Switch color={colors.purple} value={binfo?.broadcast} onChange={()=>{
                 setchecked(!checked)
                 dispatch(UpdateBroadCast({clientid:clientID,token,broadcast:binfo?.broadcast}))
               }}/>
           </View>
           <TouchableOpacity onPress={()=>dispatch(logoutaction())} style={{display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:colors.purple,paddingVertical:RFPercentage(1),borderRadius:RFPercentage(.5)}}>
            <SubTitleText size='s' text={"Log out"} color={colors.white}/>
           </TouchableOpacity>
           </View>
    </View>
    </Screen>
  )
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingHorizontal: RFPercentage(2.5),
      paddingVertical:RFPercentage(1.5),
    },
    title: {
      color:colors.lightblack,
      fontFamily:fonts.mmedium
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });