import { View, Text,Pressable,ActivityIndicator } from 'react-native'
import React from 'react'
import colors from '../../helpers/colors'
import fonts from '../../helpers/fonts'
import ButtonText from '../Typography/ButtonText'
import { RFPercentage as rp, RFValue as rf } from "react-native-responsive-fontsize";
import { TextInput,DefaultTheme } from 'react-native-paper';

export default function TimeInput({label="Time",placeholder="Time",changefunc=()=>{},val="",style}) {
    const theme = {
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          primary:colors.brown,
          text: colors.black,
        },
      };

    return (
        <TextInput 
        outlineColor={colors.brown}
          value={val}
        theme={theme}
  mode="outlined"
  label={label}
  placeholder={placeholder} 
    style={{width:"44%",fontFamily:fonts.mregular,backgroundColor:colors.white,color: colors.brown,...style}}
    right={<TextInput.Icon onPress={changefunc}  icon={"clock-time-four-outline"} />}
/>
  )
}