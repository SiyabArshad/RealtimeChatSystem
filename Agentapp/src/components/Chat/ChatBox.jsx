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
import OutGoinMessage from './OutGoinMessage'
import IncommingMessage from './IncommingMessage'
export default function ChatBox() {
  return (
    <View style={{flex:1,paddingVertical:rp(2)}}>
        <ScrollView showsVerticalScrollIndicator={false}>
        <MessageDate/>
            <OutGoinMessage/>
            <OutGoinMessage/>
            <IncommingMessage/>
            <OutGoinMessage/>
            <MessageDate/>
            <OutGoinMessage/>
            <OutGoinMessage/>
            <IncommingMessage/>
            <OutGoinMessage/>
        </ScrollView>
    </View>
  )
}