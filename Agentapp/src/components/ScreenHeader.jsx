import { View, Text,Modal,TouchableOpacity,Pressable,Image,StyleSheet } from 'react-native'
import React from 'react'
import colors from '../helpers/colors'
import Feather from "react-native-vector-icons/Feather"
import SubTitle from './Typography/Subtitle'
import CaptionText from './Typography/CaptionText'
import { RFPercentage as rp, RFValue as rf } from "react-native-responsive-fontsize";
export default function ScreenHeader({backfunc=()=>{},screenname="Screen Name",bidstatus="Open",bidscreen=false,children}) {
  return (
    <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginTop:rp(1),paddingHorizontal:rp(2)}}>
        <View style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
            <TouchableOpacity onPress={backfunc}>
            <Feather name="chevron-left" size={28} color={colors.lightblack} />
            </TouchableOpacity>
            <CaptionText text={screenname}  color={colors.black} style={{marginLeft:rp(2),fontSize:rp(2.6)}}/>
            {
              bidscreen&&
              <View style={{backgroundColor:bidstatus==='Accepted'?colors.lightgreen1:colors.navybluelight,marginLeft:rp(2),paddingHorizontal:rp(1.3),paddingVertical:rp(.7),borderRadius:rp(.7)}}>
              <CaptionText text={bidstatus} color={bidstatus==='Accepted'?colors.green:colors.navyblue}/>
            </View>
            }
        </View>
        {
          children
        }
    </View>
  )
}