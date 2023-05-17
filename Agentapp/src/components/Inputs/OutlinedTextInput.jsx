import { View, Text,Pressable,ActivityIndicator } from 'react-native'
import React from 'react'
import colors from '../../helpers/colors'
import fonts from '../../helpers/fonts'
import ButtonText from '../Typography/ButtonText'
import { RFPercentage as rp, RFValue as rf } from "react-native-responsive-fontsize";
import { TextInput,DefaultTheme } from 'react-native-paper';

export default function OutlinedTextInput({lable="Name",placeholder="Your Name",changefunc=()=>{},val="",style,multipleline=false}) {
    const theme = {
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          primary:colors.brown,
          text: colors.black, // Color of the input text
        },
      };
    return (
        <TextInput 
         multiline={multipleline}
        outlineColor={colors.brown}
        onChangeText={(e)=>changefunc(e)}
          value={val}
        theme={theme}
  mode="outlined"
  label={lable}
  placeholder={placeholder}
    style={{width:"90%",fontFamily:fonts.mregular,backgroundColor:colors.white,color: colors.brown,...style}}
/>
  )
}