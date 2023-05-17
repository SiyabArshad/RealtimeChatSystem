import { View, Text,Pressable,ActivityIndicator,ScrollView, Dimensions } from 'react-native'
import React from 'react'
import colors from '../../helpers/colors'
import fonts from '../../helpers/fonts'
import ButtonText from '../Typography/ButtonText'
import { RFPercentage as rp, RFValue as rf } from "react-native-responsive-fontsize";
import CaptionText from '../Typography/CaptionText'
import SubTitle from '../Typography/Subtitle'
import EvilIcons from "react-native-vector-icons/EvilIcons"

export default function MessageDate() {
  return (
    <View style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",marginVertical:rp(2)}}>
    <View style={{height:1,width:"33%",backgroundColor:colors.vlightblack}}/>
    <CaptionText color={colors.lightblack} style={{fontSize:rp(2.2)}} text={"28 Jun 2023"}/>
    <View style={{height:1,width:"33%",backgroundColor:colors.vlightblack}}/>
</View>
  )
}