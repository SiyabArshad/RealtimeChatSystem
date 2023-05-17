import { View, Text,Pressable,ActivityIndicator,ScrollView, Dimensions } from 'react-native'
import React from 'react'
import colors from '../../helpers/colors'
import fonts from '../../helpers/fonts'
import ButtonText from '../Typography/ButtonText'
import { RFPercentage as rp, RFValue as rf } from "react-native-responsive-fontsize";
import CaptionText from '../Typography/CaptionText'
import SubTitle from '../Typography/Subtitle'
import EvilIcons from "react-native-vector-icons/EvilIcons"
import MessageDate from './MessageDate'
export default function IncommingMessage() {
  return (
    <View style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"flex-start",marginBottom:rp(2)}}>
            <View>
            <View style={{backgroundColor:colors.lightgrey,paddingHorizontal:rp(3),paddingVertical:rp(1.5),borderRadius:rp(5)}}>
                <CaptionText style={{fontSize:rp(2.3)}} text={"Hey how are you doing today!"} color={colors.black}/>
            </View>
            <View style={{marginTop:rp(1),display:"flex",flexDirection:"row",justifyContent:"flex-start",marginLeft:rp(2)}}>
            <CaptionText color={colors.lightblack} text={"10:00 PM"}/>
            </View>
            </View>
        </View>
  )
}