import { View, Text,Modal,TouchableOpacity,Pressable,Image,StyleSheet,ImageBackground,ScrollView, Dimensions ,TextInput, ActivityIndicator} from 'react-native'
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
import { useIsFocused } from '@react-navigation/native';

export default function ConversationCard({func,item,lastconvs}) {
  const lastmessage=lastconvs?.filter((item2,i)=>item2?.contactid===item._id)
  return (
  <Pressable onPress={func} style={{width:"95%",marginHorizontal:"2.5%",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginBottom:rp(2),backgroundColor:colors.lightgrey,paddingHorizontal:rp(1.5),paddingVertical:rp(2),borderRadius:rp(2.5)}}>
                            <View style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
                         <View style={{height:40,width:40,borderRadius:20,display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:colors.grey}}>
                         <CaptionText text={item?.first_name!==null?item?.first_name[0].toUpperCase():"G"}/>
                        
                         </View>
                            {/* <Avatar rounded size="medium" source={require("../../assets/images/user.png")}/> */}
                            <View style={{marginLeft:rp(2)}}>
                            <SubTitleText text={item?.first_name!==''&&item?.first_name!==null?item?.first_name:"Guest"} color={colors.lightblack} size='m'/>
                                <LabelText style={{marginTop:rp(1),fontSize:rp(1.8)}} color={colors.lightblack} text={lastmessage[0]?`${lastmessage[0].text.slice(0,15)}....`:"Start Conversation"}/>
                             </View>
                            </View>
                            <CaptionText text={lastmessage[0]?.time&&formatDate(lastmessage[0]?.time)}/>
    </Pressable>
  )
}