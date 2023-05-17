import { View, Text,Modal,TouchableOpacity,Pressable,Image,StyleSheet } from 'react-native'
import React from 'react'
import colors from '../helpers/colors'
import AntIcon from "react-native-vector-icons/AntDesign"
import IconicIcons from "react-native-vector-icons/Ionicons"
import SubTitle from './Typography/Subtitle'
import CaptionText from './Typography/CaptionText'
import { RFPercentage as rp, RFValue as rf } from "react-native-responsive-fontsize";
export default function AppHeader({drawerfunc=()=>{},notifunc=()=>{},screenname="Screen Name"}) {
  return (
    <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginTop:rp(1),paddingHorizontal:rp(2)}}>
        <View style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
            <TouchableOpacity onPress={drawerfunc}>
            <AntIcon name="menufold" size={24} color={colors.lightblack} />
            </TouchableOpacity>
            <CaptionText text={screenname}  color={colors.black} style={{marginLeft:rp(2),fontSize:rp(2.6)}}/>
        </View>
        <TouchableOpacity onPress={notifunc}>
        <IconicIcons name="notifications-outline" size={28} color={colors.lightblack} />
            </TouchableOpacity>
    </View>
  )
}