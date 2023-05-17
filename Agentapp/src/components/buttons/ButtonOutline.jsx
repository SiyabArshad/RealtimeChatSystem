import { View, Text,Pressable } from 'react-native'
import React from 'react'
import colors from '../../helpers/colors'
import fonts from '../../helpers/fonts'
import ButtonText from '../Typography/ButtonText'
import { RFPercentage as rp, RFValue as rf } from "react-native-responsive-fontsize";

export default function ButtonOutline({text,style,func=()=>{},textstyle,children}) {
  return (
    <Pressable onPress={()=>func()} style={[{borderWidth:1,borderColor:colors.purple,width:"90%",paddingVertical:rp(1.5),display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",marginHorizontal:"5%",borderRadius:rp(2.7)},style]}>
  {
    children
  }
    <ButtonText text={text} color={colors.purple} style={{fontSize:rp(2.7),...textstyle}}/>
</Pressable>
  )
}