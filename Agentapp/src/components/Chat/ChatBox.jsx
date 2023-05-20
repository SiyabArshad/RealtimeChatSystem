import { View, Text,Pressable,ActivityIndicator,ScrollView, Dimensions } from 'react-native'
import React from 'react'
import { RFPercentage as rp, RFValue as rf } from "react-native-responsive-fontsize";
import OutGoinMessage from './OutGoinMessage'
import IncommingMessage from './IncommingMessage'
export default function ChatBox({messages}) {
  return (
    <View style={{flex:1,paddingVertical:rp(2)}}>
        <ScrollView showsVerticalScrollIndicator={false}>
        {
                messages&&messages.map((item,i)=>(
                    item?.msgType==='outbound'?<OutGoinMessage message={item}/>:<IncommingMessage message={item}/>
                ))
            }
        </ScrollView>
    </View>
  )
}