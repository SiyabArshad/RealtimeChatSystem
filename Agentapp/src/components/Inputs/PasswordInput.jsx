import { View, Text,Pressable,ActivityIndicator } from 'react-native'
import React from 'react'
import colors from '../../helpers/colors'
import fonts from '../../helpers/fonts'
import ButtonText from '../Typography/ButtonText'
import { RFPercentage as rp, RFValue as rf } from "react-native-responsive-fontsize";
import { TextInput,DefaultTheme } from 'react-native-paper';

export default function PasswordInput({lable="Name",placeholder="Your Name",changefunc=()=>{},val="",style}) {
    const [show,setshow]=React.useState(false)
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
        outlineColor={colors.brown}
        onChangeText={(e)=>changefunc(e)}
          value={val}
        theme={theme}
  mode="outlined"
  label={lable}
  placeholder={placeholder}
  secureTextEntry={!show}

    style={{width:"90%",fontFamily:fonts.mregular,backgroundColor:colors.white,color: colors.brown,...style}}
    right={<TextInput.Icon color={colors.lightblack} onPress={()=>setshow(!show)} icon={show?"eye-off":"eye"} />}
/>
  )
}