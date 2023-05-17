import { View, Text,Pressable,ActivityIndicator,ScrollView, Dimensions } from 'react-native'
import React from 'react'
import colors from '../../helpers/colors'
import { RFPercentage as rp, RFValue as rf } from "react-native-responsive-fontsize";
import CaptionText from '../Typography/CaptionText'
export default function OutGoinMessage() {
  return (
    <View style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"flex-end",marginBottom:rp(2)}}>
            <View>
            <View style={{backgroundColor:colors.navybluelight,paddingHorizontal:rp(3),paddingVertical:rp(1.5),borderRadius:rp(5)}}>
                <CaptionText style={{fontSize:rp(2.3)}} text={"Hey how are you doing today!"} color={colors.navyblue}/>
            </View>
            <View style={{marginTop:rp(1),display:"flex",flexDirection:"row",justifyContent:"flex-end",marginRight:rp(2)}}>
            <CaptionText color={colors.lightblack} text={"10:00 PM"}/>
            </View>
            </View>
        </View>
  )
}