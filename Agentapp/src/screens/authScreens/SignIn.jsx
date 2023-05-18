import { View, Text,Modal,TouchableOpacity,Pressable,Image,StyleSheet,ImageBackground,ScrollView, Dimensions ,TextInput} from 'react-native'
import React from 'react'
import colors from "../../helpers/colors"
import fonts from "../../helpers/fonts"
import Screen from "../../components/Screen"
import Heading from "../../components/Typography/Heading"
import CaptionText from "../../components/Typography/CaptionText"
import SubtitleText from "../../components/Typography/Subtitle"
import Feather from "react-native-vector-icons/Feather"
import { RFPercentage as rp, RFValue as rf } from "react-native-responsive-fontsize";
import ButtonFilled from "../../components/buttons/ButtonFilled"
import ButtonOutline from '../../components/buttons/ButtonOutline'
import ScreenName from "../../helpers/routes"
export default function SigninScreen({navigation,route}) {
    const [email, setemail] = React.useState('');
    const [password,setpassword]=React.useState("")
    const [remember, setremember] = React.useState(false);
    const LoginFunc=()=>{
  navigation.navigate(ScreenName.contactsscreen)
    }
 return (
<Screen>
    <View style={{flex:1}}>
             <ScrollView showsVerticalScrollIndicator={false}>
             <View style={{display:"flex",flexDirection:"row",alignItems:"center",marginHorizontal:rp(2),marginTop:15}}>
              <Pressable onPress={()=>navigation.pop()} style={{backgroundColor:colors.purple,borderRadius:5}}>
              <Feather name="chevron-left" size={28} color={colors.white}/>
              </Pressable>
            </View>
             <View style={{justifyContent:"center",alignItems:"center",marginTop:rp(5)}}>
            
            <Heading text={"Login"} h='h1' style={{marginTop:rp(2),marginBottom:rp(3)}}/>

            <View style={{width:"90%",marginVertical:rp(5)}}>
             <View style={{marginBottom:rp(2)}}>
              <CaptionText text={"Correo"} style={{fontSize:rp(2.3)}}/>
             <TextInput onChangeText={(e)=>setemail(e)} style={{borderRadius:rp(1),paddingHorizontal:rp(2),paddingVertical:rp(1.6),backgroundColor:colors.lightpurple,marginVertical:rp(1)}} placeholder='Email'/>
             </View>
             <View>
              <CaptionText text={"Contraseña"} style={{fontSize:rp(2.3)}}/>
             <TextInput onChangeText={(e)=>setpassword(e)} secureTextEntry style={{borderRadius:rp(1),paddingHorizontal:rp(2),paddingVertical:rp(1.6),backgroundColor:colors.lightpurple,marginVertical:rp(1)}} placeholder='Password'/>
             </View>
            </View>
              <ButtonFilled func={()=>LoginFunc()} text={"Log In"}  textstyle={{
        textTransform:"capitalize"}}/>
        <ButtonOutline text={"Login with Gmail"} style={{marginVertical:rp(2)}} textstyle={{fontSize:rp(2.2),fontFamily:fonts.mmedium,textTransform:"capitalize"}}>
      <Image style={{height:20,width:20,marginRight:rp(2)}} source={require("../../../assets/images/google.png")}/>
      </ButtonOutline>
        <View style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                <Pressable onPress={()=>navigation.navigate(ScreenName.signupScreen)} style={{display:"flex",flexDirection:"row",justifyContent:"center"}}>
                    <SubtitleText size='s'  text={"¿No tienes una cuenta? "} color={colors.lightblack} style={{fontSize:rp(2.3),marginRight:rp(1)}}/>
                    <SubtitleText size='s'  text={"Sign Up"} color={colors.purple} style={{fontSize:rp(2.3)}}/>
                </Pressable>
        </View> 
             </View>
             </ScrollView>
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