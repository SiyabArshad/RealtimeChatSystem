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
import AnimatedFab from '../../components/AnimatedFab'
import formatDate from '../../helpers/formatdate'
import { FAB } from 'react-native-elements'
export default function Messages({navigation,route}) {
    const focus=useIsFocused()
    const[tab,settab]=React.useState(0)
    const userinfo=useSelector(state=>state?.authReducer)
    const [loading,setloading]=React.useState(false)
    const [lastconvs,setlastconvs]=React.useState([])
    const {clientID,token,_id}=userinfo?.currentUser
    const[contacts,setcontacts]=React.useState([])
    const [visible, setVisible] = React.useState(true);
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
        <Pressable onPress={()=>settab(0)} style={{width:"50%",display:"flex",justifyContent:"center",alignItems:"center",paddingBottom:rp(3),borderBottomWidth:2,borderBottomColor:tab===0?colors.skyBlue:colors.lightgrey}}>
            <CaptionText color={tab===0?colors.skyBlue:colors.lightblack} style={{fontSize:rp(2.8),fontWeight:600}}  text={"Conversations"}/>
        </Pressable>
        <Pressable onPress={()=>settab(1)} style={{width:"50%",display:"flex",justifyContent:"center",alignItems:"center",paddingBottom:rp(3),borderBottomWidth:2,borderBottomColor:tab===1?colors.skyBlue:colors.lightgrey}}>
            <CaptionText text={"Contacts"} style={{fontSize:rp(2.8),fontWeight:600}} color={tab===1?colors.skyBlue:colors.lightblack}/>
        </Pressable>
    </View>
    <View style={{flex:1}}>
        <ScrollView>
           {
            tab===0&&
            <View>
            {
            contacts&&contacts.map((item,i)=>(
                <ConversationCard index={i}  lastconvs={lastconvs} item={item} func={()=>navigation.navigate(ScreenName.inbox,{chatinfo:{contactid:item?._id}})} key={i}/>
            ))
            }
            </View>
           }
                      {
            tab===1&&
            <View>
            {
            contacts&&contacts.map((item,i)=>(
                <ContactCard index={i} func={()=>navigation.navigate(ScreenName.inbox,{chatinfo:{contactid:item?._id}})} item={item}  key={i}/>
            ))
            }
            </View>
           }
            </ScrollView>
    </View>
    </View>
    <AnimatedFab navigation={navigation}/>
     </Screen>   
  )
}