import { View, Text } from 'react-native'
import React from 'react'
import { LinearProgress } from 'react-native-elements'
import SubTitleText from "../Typography/Subtitle"
import CaptionText from "../Typography/CaptionText"
import { RFPercentage as rp, RFValue as rf } from "react-native-responsive-fontsize";
import colors from '../../helpers/colors';
import { Divider,Badge, ProgressBar, MD3Colors,Avatar} from 'react-native-paper'
export default function ProjectDetailsBox() {
  return (
    <View style={{width:"100%",paddingHorizontal:rp(1.8),paddingVertical:rp(2),backgroundColor:colors.lightgrey,borderRadius:rp(1.2)}}>
        <SubTitleText text={"Project Duration"} color={colors.lightblack} style={{fontSize:rp(2.2)}}/>
        <CaptionText text={"27 Dec 2022 - 23 Nov 2024"} style={{fontSize:rp(2.4),marginVertical:rp(1)}}/>
        <SubTitleText text={"Project Manager"} color={colors.lightblack} style={{fontSize:rp(2.2),marginTop:rp(1)}}/>
        <View style={{marginVertical:rp(1),display:"flex",flexDirection:"row",alignItems:"center"}}>
            <Avatar.Image size={32} source={require("../../../assets/images/user.png")}/>
            <SubTitleText text={"Christin Arc"} color={colors.lightblack} style={{fontSize:rp(2.6),marginLeft:rp(1.5)}}/>
        </View>
    </View>
  )
}