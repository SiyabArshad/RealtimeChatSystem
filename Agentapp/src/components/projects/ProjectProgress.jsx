import { View, Text } from 'react-native'
import React from 'react'
import { LinearProgress } from 'react-native-elements'
import SubTitleText from "../Typography/Subtitle"
import { RFPercentage as rp, RFValue as rf } from "react-native-responsive-fontsize";
import colors from '../../helpers/colors';
export default function ProjectProgress() {
  return (
    <View style={{width:"100%",marginBottom:rp(2),borderWidth:1,borderColor:colors.lightgrey,
    shadowColor: "#000000",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity:  0.2,
    shadowRadius: 1,
    elevation: 2,
    borderRadius:rp(1.4),paddingHorizontal:rp(1.8),paddingVertical:rp(1.5),backgroundColor:colors.white}}>
            <SubTitleText text={"Overall Progress"} color={colors.lightblack}  style={{fontSize:rp(2.3)}}/>
            
            <View style={{marginVertical:rp(1.2),display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
            <LinearProgress style={{width:"90%",height:rp(1),borderRadius:rp(2)}} color={colors.green} variant='determinate' value={0.5}/>
            <SubTitleText size='m' text={"50%"} color={colors.green} style={{marginLeft:rp(.7),fontSize:rp(2.4)}}/>
            </View>
    </View>
  )
}