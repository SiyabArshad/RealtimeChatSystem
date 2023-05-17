import { View, Text,Pressable,ActivityIndicator,ScrollView, Dimensions } from 'react-native'
import React from 'react'
import colors from '../../helpers/colors'
import fonts from '../../helpers/fonts'
import ButtonText from '../Typography/ButtonText'
import { RFPercentage as rp, RFValue as rf } from "react-native-responsive-fontsize";
import CaptionText from '../Typography/CaptionText'
import SubTitle from '../Typography/Subtitle'
import Entypo from "react-native-vector-icons/Entypo"
export default function AppointmentDates() {
    const [selecteddate,setselecteddate]=React.useState(-1)
  return (
    <View style={{marginHorizontal:rp(2),marginVertical:rp(1)}}>
        <View style={{marginVertical:rp(2),display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                <View style={{backgroundColor:colors.brown,paddingHorizontal:rp(2),paddingVertical:rp(.7),borderRadius:rp(1)}}>
                    <CaptionText text={"Today"} color={colors.white}/>
                </View>
                <View style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
                    <Pressable style={{backgroundColor:colors.lightgrey,borderRadius:rp(.78)}}>
                    <Entypo name="chevron-small-left" size={26} color={colors.lightblack}/>
                    </Pressable>
                        <View style={{marginHorizontal:rp(1),display:"flex",flexDirection:"row",alignItems:"center"}}>
                            <CaptionText text={"07 Jan"} color={colors.lightblack}/>
                            <CaptionText text={" - "} color={colors.lightblack}/>
                            <CaptionText text={"13 Jan"} color={colors.lightblack}/>
                            <CaptionText text={" 2023"} color={colors.lightblack}/>
                        </View>
                        <Pressable style={{backgroundColor:colors.lightgrey,borderRadius:rp(.78)}}>
                    <Entypo name="chevron-small-right" size={26} color={colors.lightblack} />
                    </Pressable>
                    
                </View>
        </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {
                datesinterval.map((item,i)=>{
                    return(
                        <Pressable onPress={()=>setselecteddate(item.date)} style={{marginRight:rp(2),paddingHorizontal:rp(2),backgroundColor:item.date===selecteddate?colors.lightbrown:colors.lightgrey,paddingVertical:rp(1),borderRadius:rp(1),display:"flex",justifyContent:"center",alignItems:"center"}}>
                            <SubTitle text={item.date} color={item.date===selecteddate? colors.darkBrown:colors.black} size='m'/>
                            <CaptionText color={ item.date===selecteddate?colors.brown:colors.lightblack} text={item.day}/>
                        </Pressable>
                    )
                })
            }
      </ScrollView>
    </View>
  )
}

const datesinterval=[
    {
        date:"07",
        day:"Mon"
    },
    {
        date:"08",
        day:"Tue"
    },
    {
        date:"09",
        day:"Wed"
    },
    {
        date:"10",
        day:"Thu"
    },
    {
        date:"11",
        day:"Fri"
    },
    {
        date:"12",
        day:"Sat"
    },
    {
        date:"13",
        day:"Sun"
    }
]