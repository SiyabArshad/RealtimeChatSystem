import { View, Text,Modal,TouchableOpacity,Pressable,Image,StyleSheet,ImageBackground,ScrollView,TextInput } from 'react-native'
import React from 'react'
import colors from '../../helpers/colors'
import { RFPercentage as rp, RFValue as rf } from "react-native-responsive-fontsize";
import MaterialIcon from "react-native-vector-icons/MaterialIcons"
import Feather from "react-native-vector-icons/Feather"
import SubTitleText from "../Typography/Subtitle"
import CaptionText from "../Typography/CaptionText"
import Entypo from "react-native-vector-icons/Entypo"
import { LinearProgress,Avatar,CheckBox } from 'react-native-elements'

export default function MemberCard() {
    const [check, setcheck] = React.useState(false);
  return (
    <Pressable style={{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginBottom:rp(2),backgroundColor:check?colors.vlightbrown:colors.lightgrey,paddingHorizontal:rp(1.5),paddingVertical:rp(2),borderRadius:rp(2.5)}}>
                            <View style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
                            <Avatar rounded size="small" source={require("../../../assets/images/user.png")}/>
                            <View style={{marginLeft:rp(2)}}>
                                <SubTitleText text={"Christin Arc"} color={colors.lightblack} size='m'/>
                                <View style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
                                <Feather name="smartphone" size={20} color={colors.lightblack} style={{marginRight:rp(1)}}/>
                                <CaptionText style={{marginTop:rp(1),fontSize:rp(2.4)}} color={colors.lightblack} text={"+975134455435"}/>
                             
                                </View>
                             </View>
                            </View>
                            <CheckBox
                style={{margin:0}}
                 checked={check}
                 onPress={() => setcheck(!check)}
           iconType="material-community"
           checkedIcon="checkbox-marked"
           uncheckedIcon="checkbox-blank-outline"
           checkedColor={colors.brown}
          
         />
    </Pressable>
  )
}