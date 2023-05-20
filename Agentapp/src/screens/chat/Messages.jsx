import { View, Text,Modal,TouchableOpacity,Pressable,Image,StyleSheet,ImageBackground,ScrollView, Dimensions ,TextInput} from 'react-native'
import React from 'react'
import colors from "../../helpers/colors"
import fonts from "../../helpers/fonts"
import Screen from "../../components/Screen"
import Heading from "../../components/Typography/Heading"
import CaptionText from "../../components/Typography/CaptionText"
import Feather from "react-native-vector-icons/Feather"
import { RFPercentage as rp, RFValue as rf } from "react-native-responsive-fontsize";
import ButtonFilled from "../../components/buttons/ButtonFilled"
import ButtonOutline from '../../components/buttons/ButtonOutline'
import SubTitleText from "../../components/Typography/Subtitle"
import Entypo from "react-native-vector-icons/Entypo"
import LabelText from "../../components/Typography/LableText"
import { LinearProgress,Avatar } from 'react-native-elements'
import ConversationCard from '../../components/ConversationCard'
import ContactCard from "../../components/ContactCard"
import ScreenName from "../../helpers/routes"
import Loading from "../../components/Loading"
import origin from "../../helpers/api.js"
import axios from "axios"
import { useSelector,useDispatch } from 'react-redux';
import { useIsFocused } from '@react-navigation/native';
import formatDate from '../../helpers/formatdate'
export default function Messages({navigation,route}) {
    const focus=useIsFocused()
    const[tab,settab]=React.useState(0)
    const userinfo=useSelector(state=>state?.authReducer)
    const [loading,setloading]=React.useState(false)
    const [lastconvs,setlastconvs]=React.useState([])
    const {clientID,token,_id}=userinfo?.currentUser
    const[contacts,setcontacts]=React.useState([])
    const getallcons=async()=>{
        setloading(true)
        try{
         const {data}= await axios.get(`${origin}/api/chat/lastconversations`,{
            headers:{
                'Content-Type': 'application/json',
                'x-auth-token':token,
                'clientid':clientID
              }    
        })
         const res=await axios.get(`${origin}/api/chat/contact`,{
            headers:{
                'Content-Type': 'application/json',
                'x-auth-token':token,
                'clientid':clientID
              }    
        })
            setcontacts(res?.data)
            setlastconvs(data)        
        }
        catch{
        }
        finally{
          setloading(false)
        }
      }
    
React.useEffect(()=>{
        getallcons()
},[focus,route,navigation])

  return (
    <Screen>
            <Loading visible={loading}/>

    <View style={{flex:1}}>
    <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginVertical:rp(3),paddingHorizontal:rp(2)}}>
    <Pressable onPress={()=>navigation.openDrawer()} style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
    <Feather name="menu" size={24} color={colors.skyBlue} />
    </Pressable>
    <View style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
        <Pressable onPress={()=>settab(0)} style={{display:"flex",justifyContent:"center",alignItems:"center",paddingBottom:rp(1),borderBottomWidth:tab===0?2:0,borderBottomColor:colors.skyBlue}}>
            <CaptionText color={tab===0?colors.skyBlue:colors.lightblack} text={"Conversations"}/>
        </Pressable>
        <Pressable onPress={()=>settab(1)} style={{marginLeft:rp(3),display:"flex",justifyContent:"center",alignItems:"center",paddingBottom:rp(1),borderBottomWidth:tab===1?2:0,borderBottomColor:colors.skyBlue}}>
            <CaptionText text={"Contacts"} color={tab===1?colors.skyBlue:colors.lightblack}/>
        </Pressable>
    </View>
   
    </View>
    <View style={{flex:1}}>
        <ScrollView>
           {
            tab===0&&
            <View>
            {
            contacts&&contacts.map((item,i)=>(
                <ConversationCard lastconvs={lastconvs} item={item} func={()=>navigation.navigate(ScreenName.inbox,{chatinfo:{contactid:item?._id}})} key={i}/>
            ))
            }
            </View>
           }
                      {
            tab===1&&
            <View>
            {
            contacts&&contacts.map((item,i)=>(
                <ContactCard func={()=>navigation.navigate(ScreenName.inbox,{chatinfo:{contactid:item?._id}})} item={item}  key={i}/>
            ))
            }
            </View>
           }
            </ScrollView>
    </View>
    </View>
     </Screen>   
  )
}