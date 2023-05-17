import { View, Text,Modal,TouchableOpacity,Pressable,Image,StyleSheet,ImageBackground,ScrollView,TextInput } from 'react-native'
import React from 'react'
import colors from "../../helpers/colors"
import Screen from "../../components/Screen"
import CaptionText from "../../components/Typography/CaptionText"
import Ionicons from "react-native-vector-icons/Ionicons"
import { RFPercentage as rp, RFValue as rf } from "react-native-responsive-fontsize";
import {Avatar} from "react-native-paper"
import ChatBox from '../../components/Chat/ChatBox'
import Feather from "react-native-vector-icons/Feather"
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import ScreenNames from '../../helpers/routes'
export default function Inbox({navigation,route}) {
  return (
    <Screen>
    <View style={{flex:1,marginHorizontal:rp(2),display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
    <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginTop:rp(1)
}}>
        <View style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
            <TouchableOpacity  onPress={()=>navigation.pop()}>
            <Feather name="chevron-left" size={30} color={colors.lightblack} />
            </TouchableOpacity>
            <View style={{marginLeft:rp(2),display:"flex",flexDirection:"row",alignItems:"center"}}>
                <View style={{height:40,width:40,backgroundColor:colors.grey,borderRadius:20,display:"flex",justifyContent:"center",alignItems:"center"}}>
                    <CaptionText text={"S"}/>
                </View>
                <CaptionText text={"Christin Arc"} style={{marginLeft:rp(1),fontSize:rp(2.5)}}/>
            </View>
        </View>
      
    </View>
    <ChatBox/>
    <View style={{width:"100%",display:"flex",flexDirection:"row",paddingVertical:rp(1.5),paddingHorizontal:rp(1),alignItems:"center"}}>
        <TextInput style={{width:"70%",paddingHorizontal:rp(2),paddingVertical:rp(2)}} placeholder='Your Message'/>
        <View style={{width:"30%",display:"flex",flexDirection:"row",alignItems:"center"}}>
        <Pressable style={{backgroundColor:colors.skyBlue,paddingHorizontal:rp(.8),paddingVertical:rp(.4),marginRight:rp(.5),borderRadius:rp(.5),display:"flex",alignItems:"center",justifyContent:"center"}}>
        <FontAwesome5 name="laugh" size={20} color={colors.white} />
        </Pressable>
        <Pressable style={{backgroundColor:colors.skyBlue,paddingHorizontal:rp(.8),paddingVertical:rp(.4),marginRight:rp(.5),borderRadius:rp(.5),display:"flex",alignItems:"center",justifyContent:"center"}}>
        <MaterialIcons name="attach-file" size={20} color={colors.white} />
        </Pressable>
        <Pressable style={{backgroundColor:colors.skyBlue,paddingHorizontal:rp(.8),paddingVertical:rp(.4),marginRight:rp(.5),borderRadius:rp(.5),display:"flex",alignItems:"center",justifyContent:"center"}}>
        <Feather name="send" size={20} color={colors.white} />
        </Pressable>
        </View>
    </View>
    </View>
    </Screen>
  )
}