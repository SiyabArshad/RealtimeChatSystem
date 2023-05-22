import { View, Text,Pressable,ActivityIndicator,ScrollView, Dimensions } from 'react-native'
import React from 'react'
import colors from '../../helpers/colors'
import { RFPercentage as rp, RFValue as rf } from "react-native-responsive-fontsize";
import CaptionText from '../Typography/CaptionText'
import formatDate from '../../helpers/formatdate';
import moment from 'moment';

export default function IncommingMessage({message}) {
  return (
    <View style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"flex-start",marginBottom:rp(2)}}>
            <View>
            <View style={{backgroundColor:colors.lightgrey,paddingHorizontal:rp(3),paddingVertical:rp(1.5),borderRadius:rp(5)}}>
                <CaptionText style={{fontSize:rp(2.3)}} text={message?.text} color={colors.black}/>
            </View>
            <View style={{marginTop:rp(1),display:"flex",flexDirection:"row",justifyContent:"flex-start",marginLeft:rp(2)}}>
            <CaptionText color={colors.lightblack} text={moment(message?.time).calendar()}/>
            </View>
            </View>
        </View>
  )
}