import { View, Text,Modal,TouchableOpacity,Pressable,Image,StyleSheet } from 'react-native'
import React from 'react'
import colors from '../helpers/colors'
import AntIcon from "react-native-vector-icons/AntDesign"
import IconicIcons from "react-native-vector-icons/Ionicons"
import SubTitle from './Typography/Subtitle'
import CaptionText from './Typography/CaptionText'
import { RFPercentage as rp, RFValue as rf } from "react-native-responsive-fontsize";
import BodyText from './Typography/BodyText'
import Heading from './Typography/Heading'
import { Avatar } from 'react-native-elements'

export default function BidCard({item}) {
  return (
    <View style={{width:"95%",marginHorizontal:"2.5%",paddingHorizontal:rp(2),paddingVertical:rp(2),borderWidth:1,borderColor:colors.lightgrey,borderRadius:rp(1),marginBottom:rp(2),
    shadowColor: "#000000",
shadowOffset: {
  width: 0,
  height: 1,
},
shadowOpacity:  0.16,
shadowRadius: 1.51,
elevation: 2
    }}>
      <View style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",marginVertical:rp(2)}}>
            <View style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
            <Avatar rounded size={"small"} source={require("../../assets/images/user.png")}/>
            <View style={{marginLeft:rp(1)}}>
                <CaptionText  text={"Lina Moretti"}/>
                <CaptionText color={colors.lightblack} text={"Placed on 12 Jan 2020"}/>    
                </View>
            </View>
            <View>
                <CaptionText style={{textAlign:"right"}} text={"Bid"}/>
                <SubTitle size="m" text={"$ 1300"}/>
            </View>
      </View>
      <CaptionText style={{lineHeight:rp(3)}} color={colors.lightblack} text={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout...."}/>
    </View>
  )
}

