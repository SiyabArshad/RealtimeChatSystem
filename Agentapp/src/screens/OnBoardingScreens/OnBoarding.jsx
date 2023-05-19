import { View, Text,Modal,TouchableOpacity,Pressable,Image,StyleSheet,ImageBackground } from 'react-native'
import React from 'react'
import colors from "../../helpers/colors"
import fonts from "../../helpers/fonts"
import Screen from "../../components/Screen"
import Heading from "../../components/Typography/Heading"
import { RFPercentage as rp, RFValue as rf } from "react-native-responsive-fontsize";
import ButtonFilled from '../../components/buttons/ButtonFilled'
import ButtonOutline from '../../components/buttons/ButtonOutline'
import LableText from "../../components/Typography/LableText"
import ScreenNames from '../../helpers/routes'
export default function OnBoarding({navigation,route}) {
  return (
<Screen>
    <View  style={{flex:1,backgroundColor:colors.white,flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
      <View style={{marginBottom:rp(3),width:"90%",marginHorizontal:"5%",display:"flex",justifyContent:"center",alignItems:"center"}}>
         <Image style={{width:"70%",height:200}} resizeMode='contain' source={require("../../../assets/images/onb.png")}/>
            <Heading text={"Mensajea al instante Todo Integrado"}  h='h3' style={{marginBottom:rp(2),textAlign:"center"}}/>
            <LableText text={"Tu asistente para ventas mas eficientes"} color={colors.lightblack} style={{marginTop:rp(2),fontSize:rp(2.9),lineHeight:rp(3.5),textAlign:"center"}}/>
      </View>
  <View style={{width:"100%"}}>
<View style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
<Pressable onPress={()=>navigation.navigate(ScreenNames.loginScreen)} style={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",marginVertical:rp(3)}}>
  <LableText text={"¿Ya tienes una cuenta? "} color={colors.lightblack} style={{fontSize:rp(2.1)}}/> 
  <LableText text={"Log In"} color={colors.purple} style={{fontSize:rp(2.1)}}/> 
  </Pressable>
</View>
     <ButtonFilled func={()=>navigation.navigate(ScreenNames.signupScreen)}  text={"Registrate con tu Email"} style={{marginBottom:rp(1.5)}} textstyle={{fontSize:rp(2.2),fontFamily:fonts.mmedium,textTransform:"capitalize"}}/>
     <ButtonOutline text={"Registrate con Gmail"}  textstyle={{fontSize:rp(2.2),fontFamily:fonts.mmedium,textTransform:"capitalize"}}>
      <Image style={{height:20,width:20,marginRight:rp(2)}} source={require("../../../assets/images/google.png")}/>
      </ButtonOutline>
  </View>
    </View>
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