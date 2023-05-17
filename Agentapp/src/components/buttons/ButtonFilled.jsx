import { View, Text,Pressable,ActivityIndicator } from 'react-native'
import React from 'react'
import colors from '../../helpers/colors'
import fonts from '../../helpers/fonts'
import ButtonText from '../Typography/ButtonText'
import { RFPercentage as rp, RFValue as rf } from "react-native-responsive-fontsize";

export default function ButtonFilled({text,style,func=()=>{},textstyle,btnloading}) {
  return (
    <Pressable onPress={()=>func()} style={[{backgroundColor:colors.brown,width:"90%",paddingVertical:rp(1.5),display:"flex",justifyContent:"center",alignItems:"center",marginHorizontal:"5%",borderRadius:rp(2.7)},style]}>
  {
    btnloading?<ActivityIndicator size={24} color={colors.white}/>
    :
    <ButtonText text={text} color={colors.white} style={{fontSize:rp(2.8),textTransform:"uppercase",...textstyle}}/>
  }
</Pressable>
  )
}