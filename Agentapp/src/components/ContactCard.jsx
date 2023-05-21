import { View, Text,Modal,TouchableOpacity,Pressable,Image,StyleSheet,ImageBackground,ScrollView, Dimensions ,TextInput} from 'react-native'
import React from 'react'
import colors from "../helpers/colors"
import fonts from "../helpers/fonts"
import Screen from "./Screen"
import Heading from "./Typography/Heading"
import CaptionText from "./Typography/CaptionText"
import Feather from "react-native-vector-icons/Feather"
import { RFPercentage as rp, RFValue as rf } from "react-native-responsive-fontsize";
import ButtonFilled from "./buttons/ButtonFilled"
import ButtonOutline from './buttons/ButtonOutline'
import SubTitleText from "./Typography/Subtitle"
import Entypo from "react-native-vector-icons/Entypo"
import LabelText from "./Typography/LableText"
import { LinearProgress,Avatar } from 'react-native-elements'

export default function ContactCard({func,item,index}) {
  return (
    <Pressable onPress={func} style={{width:"100%",marginBottom:rp(.5),backgroundColor:index%2===0?colors.white:colors.ligthbg,paddingHorizontal:rp(1.5),paddingVertical:rp(2)}}>
    <View style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
 <View style={{height:60,width:60,borderRadius:30,display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:colors.navybluelight}}>
 <CaptionText style={{fontWeight:"bold"}} text={item?.first_name!==null?item?.first_name[0].toUpperCase():"G"}/>    
 </View>
    <View style={{marginLeft:rp(2),flex:1}}> 
      <View style={{flex:1,display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
      <SubTitleText text={item?.first_name!==''&&item?.first_name!==null?item?.first_name:"Guest"} size='m' style={{fontWeight:"bold"}}/>
      </View>
      <LabelText style={{fontSize:rp(1.8)}} color={colors.lightblack} text={item?.email}/>
     </View>
    </View>
    
</Pressable>
  )
}