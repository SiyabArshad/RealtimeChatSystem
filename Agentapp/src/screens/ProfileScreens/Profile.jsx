import { View, Text,Modal,TouchableOpacity,Pressable,Image,StyleSheet,ImageBackground } from 'react-native'
import React from 'react'
import colors from "../../helpers/colors"
import fonts from "../../helpers/fonts"
import Screen from "../../components/Screen"
import Heading from "../../components/Typography/Heading"
import SubTitleText from "../../components/Typography/Subtitle"
import CaptionText from "../../components/Typography/CaptionText"
import ButonText from "../../components/Typography/ButtonText"
import EntypoIcon from "react-native-vector-icons/Entypo"
import FeatherIcon from "react-native-vector-icons/Feather"
import MaterialIcon from "react-native-vector-icons/MaterialIcons"
import { RFPercentage as rp, RFValue as rf } from "react-native-responsive-fontsize";
import ButtonFilled from '../../components/buttons/ButtonFilled'
import ButtonOutline from '../../components/buttons/ButtonOutline'
import BodyText from "../../components/Typography/BodyText"
import LableText from "../../components/Typography/LableText"
import { Avatar } from 'react-native-elements'
import AppHeader from '../../components/AppHeader'
import ScreenNames from '../../helpers/routes'
export default function Profile({navigation,route}) {
  return (
 <Screen>
    <AppHeader drawerfunc={() => navigation.openDrawer()} screenname='Profile Details'/>
    <View style={{flex:1}}>
    <View style={{height:rp(4),width:"95%",backgroundColor:colors.lightbrown,marginHorizontal:"2.5%",borderTopRightRadius:rp(1.7),borderTopLeftRadius:rp(1.7),marginTop:rp(4),marginBottom:rp(2)}}/>
    <View style={{display:"flex",justifyContent:"center",alignItems:"center",marginBottom:rp(3)}}>
            <View style={{borderWidth:1,borderColor:colors.brown,marginBottom:rp(.4),padding:rp(.5),display:"flex",justifyContent:"center",alignItems:"center",height:60,width:60,borderRadius:30}}>
            <Avatar rounded size={"medium"} source={require("../../../assets/images/user.png")}/>
            </View>
            <SubTitleText text={"Jean Carla"} size='m'  color={colors.lightblack} style={{marginVertical:rp(1)}}/>
            <Pressable onPress={()=>navigation.navigate(ScreenNames.editProfile)} style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            <FeatherIcon name="edit" size={24} color={colors.brown} />
            </Pressable>
    </View>
     <View style={styles.proinfo}>
        <SubTitleText text={"Name"} size='s' style={{fontSize:rp(2.3)}} color={colors.lightblack}></SubTitleText>
        <CaptionText text={"Jean Carla"} style={{fontSize:rp(2.3),marginVertical:rp(1.2)}} />
        <SubTitleText text={"Email"} size='s' style={{fontSize:rp(2.3),marginTop:rp(1.5)}} color={colors.lightblack}></SubTitleText>
        <CaptionText text={"Jean@gmail.com"} style={{fontSize:rp(2.3),marginVertical:rp(1.2)}} />
        <SubTitleText text={"Phone"} size='s' style={{fontSize:rp(2.3),marginTop:rp(1.5)}} color={colors.lightblack}></SubTitleText>
        <CaptionText text={"+894345355"} style={{fontSize:rp(2.3),marginVertical:rp(1.2)}} />
     </View>
     <ButtonOutline func={()=>navigation.navigate(ScreenNames.changePassword)} text={"Change Password"} style={{borderRadius:rp(5)}}/>
     <ButtonFilled func={()=>navigation.navigate(ScreenNames.HmReferProject)} text={"Refer Project"} style={{borderRadius:rp(5),marginTop:rp(2)}} textstyle={{textTransform:"capitalize"}}/>
     </View>
 </Screen>
  )
}

const styles=StyleSheet.create({
    proinfo:{
        width:"95%",
        marginHorizontal:"2.5%",
        padding:rp(2),
        backgroundColor:colors.lightgrey,
        borderRadius:rp(2),
        marginBottom:rp(2),
    }
})