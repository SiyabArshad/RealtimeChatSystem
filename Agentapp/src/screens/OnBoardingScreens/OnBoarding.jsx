import { View, Text,Modal,TouchableOpacity,Pressable,Image,StyleSheet,ImageBackground } from 'react-native'
import React from 'react'
import colors from "../../helpers/colors"
import fonts from "../../helpers/fonts"
import Screen from "../../components/Screen"
import Heading from "../../components/Typography/Heading"
import ButonText from "../../components/Typography/ButtonText"
import EntypoIcon from "react-native-vector-icons/Entypo"
import FeatherIcon from "react-native-vector-icons/Feather"
import MaterialIcon from "react-native-vector-icons/MaterialIcons"
import { RFPercentage as rp, RFValue as rf } from "react-native-responsive-fontsize";
import ButtonFilled from '../../components/buttons/ButtonFilled'
import ButtonOutline from '../../components/buttons/ButtonOutline'
import BodyText from "../../components/Typography/BodyText"
import LableText from "../../components/Typography/LableText"
import ScreenNames from '../../helpers/routes'
export default function OnBoarding({navigation,route}) {
  const [index,setindex]=React.useState(0)
  const onboarddata=[
    {
      text:"Set up your account and start tracking projects, messaging, scheduling appointments, and managing bid boards effortlessly with the app's main features.",
      image:require("../../../assets/images/Construction.png")
    }
    ,{
      text:"Learn how to use project tracking, messaging, scheduling, and bid board features effectively with our guidance.",
      image:require("../../../assets/images/Personalsettings.png")
    }
    ,
    {
      text:"Stay organized, and make the most of the app's project tracking, messaging, scheduling appointment, and bid board.",
      image:require("../../../assets/images/Buildingsafety.png")
    }
  ]
  const indexFunc=()=>{
    if(index>=0&&index<2)
    {
      setindex(index+1)
    }
    if(index===2)
    {
      navigation.navigate(ScreenNames.rolesScreen)
      // setindex(0)
    }
  }
  return (
<Screen>
    <ImageBackground  source={require("../../../assets/images/Onboarding.png")} style={{flex:1,flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
      <View style={{marginBottom:rp(3),width:"90%",marginHorizontal:"5%",display:"flex",justifyContent:"center",alignItems:"center"}}>
         <Image source={onboarddata[index].image}/>
            <Heading text={"Getting Started"} color={colors.lightblack} h='h2' style={{marginBottom:rp(2)}}/>
            <LableText text={onboarddata[index].text} color={colors.lightblack} style={{marginTop:rp(2),fontSize:rp(2.5),lineHeight:rp(3.5),textAlign:"center"}}/>
      </View>
  <View style={{width:"100%"}}>
  <View style={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",marginVertical:rp(3)}}>
          <View style={{borderWidth:index!=0?1:0,borderColor:colors.lightblack, height:12,width:12,borderRadius:6,backgroundColor:index===0?colors.brown:colors.white,marginRight:rp(1)}}/>
          <View style={{borderWidth:index!=1?1:0,borderColor:colors.lightblack, height:12,width:12,borderRadius:6,backgroundColor:index===1?colors.brown:colors.white,marginRight:rp(1)}}/>
          <View style={{borderWidth:index!=2?1:0,borderColor:colors.lightblack, height:12,width:12,borderRadius:6,backgroundColor:index===2?colors.brown:colors.white,marginRight:rp(1)}}/>
        </View>
     <ButtonFilled func={indexFunc} text={"Next"} style={{marginBottom:rp(1.5)}}/>
     <ButtonOutline func={()=>navigation.navigate(ScreenNames.rolesScreen)} text={"Skip"}/>
  </View>
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