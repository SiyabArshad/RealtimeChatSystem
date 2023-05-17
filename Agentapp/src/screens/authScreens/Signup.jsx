import { View, Text,Modal,TouchableOpacity,Pressable,Image,StyleSheet,ImageBackground,ScrollView, Dimensions } from 'react-native'
import React from 'react'
import colors from "../../helpers/colors"
import fonts from "../../helpers/fonts"
import Screen from "../../components/Screen"
import Heading from "../../components/Typography/Heading"
import ButonText from "../../components/Typography/ButtonText"
import CaptionText from "../../components/Typography/CaptionText"
import LableText from "../../components/Typography/LableText"
import SubtitleText from "../../components/Typography/Subtitle"
import EntypoIcon from "react-native-vector-icons/Entypo"
import FeatherIcon from "react-native-vector-icons/Feather"
import MaterialIcon from "react-native-vector-icons/MaterialIcons"
import { RFPercentage as rp, RFValue as rf } from "react-native-responsive-fontsize";
import ButtonFilled from "../../components/buttons/ButtonFilled"
import { TextInput,DefaultTheme } from 'react-native-paper';
import OutlinedTextInput from '../../components/Inputs/OutlinedTextInput'
import PasswordInput from '../../components/Inputs/PasswordInput'
import ScreenNames from '../../helpers/routes'
export default function SignupScreen({navigation,route}) {
    const [email, setemail] = React.useState('');
    const [name,setname]=React.useState("")
    const [password,setpassword]=React.useState("")
    const [confirmpassword,setconfirmpassword]=React.useState("")
  return (
<Screen>
    <ImageBackground  source={require("../../../assets/images/Onboarding.png")} style={{flex:1}}>
             <ScrollView showsVerticalScrollIndicator={false}>
             <View style={{width:Dimensions.get("screen").width,height:Dimensions.get("screen").height,justifyContent:"center",alignItems:"center"}}>
             <Image resizeMode='contain' style={{height:120,width:120}} source={require("../../../assets/images/logo.png")}/>
            <SubtitleText text={"Create an Account"} size='m' style={{marginTop:rp(2),marginBottom:rp(3)}}/>
            <OutlinedTextInput changefunc={(e)=>setname(e)} val={name} lable='Full Name' placeholder='Full Name' style={{marginBottom:rp(1.5)}}/>
            <OutlinedTextInput  changefunc={(e)=>setemail(e)} val={email} lable='Email' placeholder='Email' style={{marginBottom:rp(1.5)}}/>
            <PasswordInput  changefunc={(e)=>setpassword(e)} val={password} lable='Password' placeholder='Password' style={{marginBottom:rp(1.5)}}/>
            <PasswordInput  changefunc={(e)=>setconfirmpassword(e)} val={confirmpassword} lable='Confirm Password' placeholder='Confirm Password' style={{marginBottom:rp(1.5)}}/>
            <ButtonFilled text={"Sign Up"} style={{marginVertical:rp(3)}} textstyle={{
        textTransform:"capitalize"}}/>
        <View style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                <Pressable onPress={()=>navigation.pop()} style={{display:"flex",flexDirection:"row",justifyContent:"center"}}>
                    <SubtitleText size='s'  text={"Already have an account?"} color={colors.lightblack} style={{fontSize:rp(2.3),marginRight:rp(1)}}/>
                    <SubtitleText size='s'  text={"Sign in"} color={colors.brown} style={{fontSize:rp(2.3)}}/>
                </Pressable>
        </View> 
             </View>
             </ScrollView>
    </ImageBackground>
</Screen>
  )
}

const styles =StyleSheet.create({
    btn:{
        display:"flex"
        ,flexDirection:"row",
        alignItems:"center"
        ,justifyContent:"space-between",
        backgroundColor:colors.lightbrown,
        paddingHorizontal:rp(1.8),
        paddingVertical:rp(1.3),
        borderRadius:rp(1),
        width:"80%",
        borderWidth:1,
        borderColor:colors.brown,
        marginBottom:rp(2),

    }
})