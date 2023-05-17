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
import ScreenNames from '../../helpers/routes'
export default function RolesScreen({navigation,route}) {
  return (
<Screen>
    <ImageBackground  source={require("../../../assets/images/Onboarding.png")} style={{flex:1,justifyContent:"center",alignItems:"center"}}>
        <Heading text={"Sign In As"} h='h1' color={colors.lightblack} style={{marginBottom:rp(2.5)}}/>
        <Pressable onPress={()=>navigation.navigate(ScreenNames.loginScreen,{role:"homeowner"})} style={styles.btn}>
   <View style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
   <View style={{backgroundColor:colors.brown,marginRight:rp(2),paddingHorizontal:rp(.9),paddingVertical:rp(.5),display:"flex",alignItems:"center",justifyContent:"center",borderRadius:rp(.8)}}>
   <FeatherIcon name="users" size={24} color={colors.white} />
    </View>
            <ButonText text={"Home Owner"} style={{fontSize:rp(2.6)}}/>
   </View>
            <EntypoIcon name="chevron-right" size={24} color={colors.vlightblack} />
        </Pressable>       
        <Pressable onPress={()=>navigation.navigate(ScreenNames.loginScreen,{role:"teammember"})} style={styles.btn}>
   <View style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
   <View style={{backgroundColor:colors.brown,marginRight:rp(2),paddingHorizontal:rp(.9),paddingVertical:rp(.5),display:"flex",alignItems:"center",justifyContent:"center",borderRadius:rp(.8)}}>
   <MaterialIcon name="perm-contact-cal" size={24} color={colors.white} />
    </View>
            <ButonText text={"Team Member"} style={{fontSize:rp(2.6)}}/>
   </View>
            <EntypoIcon name="chevron-right" size={24} color={colors.vlightblack} />
        </Pressable>   
        <Pressable onPress={()=>navigation.navigate(ScreenNames.loginScreen,{role:"tradepartner"})} style={styles.btn}>
   <View style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
   <View style={{backgroundColor:colors.brown,marginRight:rp(2),paddingHorizontal:rp(.9),paddingVertical:rp(.5),display:"flex",alignItems:"center",justifyContent:"center",borderRadius:rp(.8)}}>
   <MaterialIcon name="perm-contact-cal" size={24} color={colors.white} />
    </View>
            <ButonText text={"Trade Partner"} style={{fontSize:rp(2.6)}}/>
   </View>
            <EntypoIcon name="chevron-right" size={24} color={colors.vlightblack} />
        </Pressable>       

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