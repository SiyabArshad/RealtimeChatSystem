import { View, Text,Pressable,ActivityIndicator,ScrollView, Dimensions } from 'react-native'
import React from 'react'
import { RFPercentage as rp, RFValue as rf } from "react-native-responsive-fontsize";
import OutGoinMessage from './OutGoinMessage'
import IncommingMessage from './IncommingMessage'

export default function ChatBox({messages,scrollfunc=()=>{},scrollViewRef}) {
  return (
    <View style={{flex:1,paddingVertical:rp(2)}}>
        <ScrollView ref={scrollViewRef} showsVerticalScrollIndicator={false}>
        {
                messages&&messages.map((item,i)=>(
                    item?.msgType==='outbound'?<OutGoinMessage key={i} message={item}/>:<IncommingMessage key={i} message={item}/>
                ))
            }
        </ScrollView>
    </View>
  )
}