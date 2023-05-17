import { View, Text } from 'react-native'
import React from 'react'
import colors from '../../helpers/colors'
import fonts from '../../helpers/fonts'
import { RFPercentage as rp, RFValue as rf } from "react-native-responsive-fontsize";

export default function CaptionText({text,color=colors.black,style}) {
  return (
    <Text style={[{color:color,fontFamily:fonts.mregular,fontSize:rp(1.9)},style]}>
        {
            text
        }
    </Text>
  )
}