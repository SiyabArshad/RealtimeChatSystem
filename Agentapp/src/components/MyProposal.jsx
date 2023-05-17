import { View, Text,Modal,TouchableOpacity,Pressable,Image,StyleSheet } from 'react-native'
import React from 'react'
import colors from '../helpers/colors'
import AntIcon from "react-native-vector-icons/AntDesign"
import IconicIcons from "react-native-vector-icons/Ionicons"
import SubTitle from './Typography/Subtitle'
import CaptionText from './Typography/CaptionText'
import { RFPercentage as rp, RFValue as rf } from "react-native-responsive-fontsize";
import BodyText from './Typography/BodyText'
import Heading from './Typography/Heading'
import ScreenNames from '../helpers/routes'
export default function MyProposal({item,navigation,func=()=>{}}) {
  return (
    <Pressable onPress={func} style={{width:"95%",marginHorizontal:"2.5%",marginBottom:rp(2),backgroundColor:colors.lightgrey,paddingHorizontal:rp(2),paddingVertical:rp(1.5),borderRadius:rp(1)}}>
        <View style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
            <CaptionText color={colors.lightblack} text={"Sent on 09/03/2023"}/>
            <View style={{backgroundColor:colors.navybluelight,paddingHorizontal:rp(2),paddingVertical:rp(.7),borderRadius:rp(.8)}}>
            <CaptionText text={"Proposed"} color={colors.navyblue}/>
             </View>
        </View>
        <SubTitle size='m' style={{fontSize:rp(2.2),marginVertical:rp(1)}} text={"App Patent Idea: Social Network"}/>
        <CaptionText style={{fontSize:rp(2.2),lineHeight:rp(3.5)}} color={colors.lightblack} text={"Do you have an original Social App idea that does not exist? We are .."}/>
        <View style={{marginTop:rp(3),display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
        <SubTitle text={"$1500"} size='m'/>
        <CaptionText text={"7 Bidders"} color={colors.lightblack}  />
        </View>
    </Pressable>
  )
}