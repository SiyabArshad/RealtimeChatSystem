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
export default function GroupCard({navigation}) {
  return (
    <Pressable onPress={()=>navigation.navigate(ScreenNames.HmGroupDetails)} style={{width:"90%",marginHorizontal:"5%",marginBottom:rp(2),
    borderRadius:rp(1.4),paddingHorizontal:rp(1.8),paddingVertical:rp(1.5),backgroundColor:colors.lightgrey}}>
            <SubTitleText text={"Maintenance Group"}  style={{fontSize:rp(2.3)}}/>
            <View style={{marginVertical:rp(2),display:"flex",flexDirection:"row",alignItems:"center"}}>
                <Avatar.Image size={32} source={require("../../../assets/images/user.png")}/>
                <Avatar.Image style={{position:"relative",left:-10,zIndex:10}} size={32} source={require("../../../assets/images/user.png")}/>
                <Avatar.Image style={{position:"relative",left:-20,zIndex:11}} size={32} source={require("../../../assets/images/user.png")}/>
                <Avatar.Text style={{backgroundColor:colors.grey,position:"relative",left:-30,zIndex:999}} size={32} label={"15"} />
            </View>
            <View style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
            <View style={{display:"flex",flexDirection:"row",alignItems:"center",marginRight:rp(2)}}>
            <Feather name="users" size={20} color={colors.lightblack} />
            <CaptionText  text={"12 Members"} color={colors.lightblack} style={{marginLeft:rp(1),fontSize:rp(2.2)}}/>
            </View>
            <View style={{display:"flex",flexDirection:"row",alignItems:"center",marginRight:rp(2)}}>
            <EvilIcons name="image" size={24} color={colors.lightblack} />
            <CaptionText  text={"40 Photos"} color={colors.lightblack} style={{marginLeft:rp(1),fontSize:rp(2.2)}}/>
            </View>
            </View>
    </Pressable>
  )
}