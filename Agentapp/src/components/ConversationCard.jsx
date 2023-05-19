import { View, Text,Modal,TouchableOpacity,Pressable,Image,StyleSheet,ImageBackground,ScrollView, Dimensions ,TextInput} from 'react-native'
import React from 'react'
import colors from "../helpers/colors"
import fonts from "../helpers/fonts"
import Screen from "./Screen"
import Heading from "./Typography/Heading"
import CaptionText from "./Typography/CaptionText"
import Feather from "react-native-vector-icons/Feather"
import { RFPercentage as rp, RFValue as rf } from "react-native-responsive-fontsize";
import ButtonFilled from "./buttons/ButtonFilled"
import ButtonOutline from './buttons/ButtonOutline'
import SubTitleText from "./Typography/Subtitle"
import Entypo from "react-native-vector-icons/Entypo"
import LabelText from "./Typography/LableText"
import { LinearProgress,Avatar } from 'react-native-elements'
import formatDate from '../helpers/formatdate'
import axios from "axios"
import origin from '../helpers/api'
export default function ConversationCard({func,item}) {
  const [contactonfo,setcontactinfo]=React.useState()
  const {contactid}=item 
  const getallcons=async()=>{
          const {data}=await axios.get(`${origin}/api/chat/contact/${contactid}`)
          setcontactinfo(data)
      }
    React.useEffect(()=>{
        getallcons()
      },[])  
  return (
    <Pressable onPress={func} style={{width:"95%",marginHorizontal:"2.5%",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginBottom:rp(2),backgroundColor:colors.lightgrey,paddingHorizontal:rp(1.5),paddingVertical:rp(2),borderRadius:rp(2.5)}}>
                            <View style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
                         <View style={{height:40,width:40,borderRadius:20,display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:colors.grey}}>
                          <CaptionText text=    {
               contactonfo?.first_name!==null&&contactonfo?.first_name[0].toUpperCase()
            }/>
                         </View>
                            {/* <Avatar rounded size="medium" source={require("../../assets/images/user.png")}/> */}
                            <View style={{marginLeft:rp(2)}}>
                                <SubTitleText text={contactonfo?.first_name} color={colors.lightblack} size='m'/>
                                <LabelText style={{marginTop:rp(1),fontSize:rp(1.8)}} color={colors.lightblack} text={`${item?.text.slice(0,15)}....`}/>
                             </View>
                            </View>
                            <CaptionText text={formatDate(item?.time)}/>
    </Pressable>
  )
}