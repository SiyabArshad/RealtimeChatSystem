import { View, Text } from 'react-native'
import React from 'react'
import colors from '../../helpers/colors'
import fonts from '../../helpers/fonts'
import { RFPercentage as rp, RFValue as rf } from "react-native-responsive-fontsize";
const fontSizeMapping = {
    l: 3.5,
    m: 2.8,
    s: 1.8,
  };
export default function SubTitle({text,color=colors.black,size="l",style}) {
    const fontSize = fontSizeMapping[size] || fontSizeMapping.l; // Default to h1 if the heading level is not found in the mapping
  return (
    <Text style={[{color:color,fontFamily:fonts.mmedium,fontSize:rp(fontSize)},style]}>
        {
            text
        }
    </Text>
  )
}