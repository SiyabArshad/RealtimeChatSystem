import { View, Text,Pressable,ActivityIndicator,ScrollView, Dimensions } from 'react-native'
import React from 'react'
import { RFPercentage as rp, RFValue as rf } from "react-native-responsive-fontsize";
import OutGoinMessage from './OutGoinMessage'
import IncommingMessage from './IncommingMessage'
export default function ChatBox() {
  return (
    <View style={{flex:1,paddingVertical:rp(2)}}>
        <ScrollView showsVerticalScrollIndicator={false}>
            <OutGoinMessage/>
            <OutGoinMessage/>
            <IncommingMessage/>
            <OutGoinMessage/>
            <OutGoinMessage/>
            <OutGoinMessage/>
            <IncommingMessage/>
            <OutGoinMessage/>
        </ScrollView>
    </View>
  )
}