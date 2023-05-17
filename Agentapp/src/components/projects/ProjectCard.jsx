import { View, Text,Modal,TouchableOpacity,Pressable,Image,StyleSheet,ImageBackground,ScrollView,TextInput } from 'react-native'
import React from 'react'
import colors from "../../helpers/colors"
import SubTitleText from "../Typography/Subtitle"
import CaptionText from "../Typography/CaptionText"
import EvilIcons from "react-native-vector-icons/EvilIcons"
import { RFPercentage as rp, RFValue as rf } from "react-native-responsive-fontsize";
import { LinearProgress } from 'react-native-elements'
import { Divider,Badge, ProgressBar, MD3Colors,Avatar} from 'react-native-paper'
import Feather from "react-native-vector-icons/Feather"
import ScreenNames from '../../helpers/routes'
export default function ProjectCard({navigation}) {
  return (
    <Pressable onPress={()=>navigation.navigate(ScreenNames.HmProjectDetails)}  style={{width:"90%",marginHorizontal:"5%",marginBottom:rp(2),borderWidth:1,borderColor:colors.lightgrey,
    shadowColor: "#000000",
shadowOffset: {
width: 0,
height: 1,
},
shadowOpacity:  0.16,
shadowRadius: 1.51,
elevation: 2,
    borderRadius:rp(1.4),paddingHorizontal:rp(1.8),paddingVertical:rp(1.5),backgroundColor:colors.white}}>
            <SubTitleText text={"Construction of Tiny Home"}  style={{fontSize:rp(2.3)}}/>
            
            <View style={{marginVertical:rp(1.2),display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
            <LinearProgress style={{width:"90%",height:rp(1),borderRadius:rp(2)}} color={colors.green} variant='determinate' value={0.5}/>
            <SubTitleText size='m' text={"50%"} color={colors.green} style={{marginLeft:rp(.7),fontSize:rp(2.4)}}/>
            </View>
            <View style={{marginBottom:rp(2),display:"flex",flexDirection:"row",alignItems:"center"}}>
                <Avatar.Image size={32} source={require("../../../assets/images/user.png")}/>
                <Avatar.Image style={{position:"relative",left:-10,zIndex:10}} size={32} source={require("../../../assets/images/user.png")}/>
                <Avatar.Image style={{position:"relative",left:-20,zIndex:11}} size={32} source={require("../../../assets/images/user.png")}/>
                <Avatar.Text style={{backgroundColor:colors.grey,position:"relative",left:-30,zIndex:999}} size={32} label={"15"} />
            </View>
            <View style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
            <EvilIcons name="calendar" size={24} color={colors.lightblack} />
            <CaptionText text={"27 Dec 2022 - 23 Nov 2024"} color={colors.lightblack} style={{marginLeft:rp(1)}}/>
            </View>
    </Pressable>
  )
}