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
import MessageCard from "../../components/MessageCard"
import { useSelector,useDispatch } from 'react-redux';
import { loginaction } from '../../redux/auth/action'
import axios from 'axios'
import origin from '../../helpers/api'
import jwtDecode from 'jwt-decode';


export default function SigninScreen({navigation,route}) {
    const dispatch=useDispatch()
    const [email, setemail] = React.useState('');
    const [password,setpassword]=React.useState("")
    const [isload,setisload]=React.useState(false)
    const [issubmit,setissubmit]=React.useState(false)
    const [type,settype]=React.useState(false)
    const [Error,setError]=React.useState('')
    const LoginFunc=async()=>{
      setisload(true)
      try{
          if(email.length===0&&password.length===0)
          {
          setError("Some Feilds are Missing")
          settype(false)
          }
          else if(email.length>10&&password.length>5)
          {
              const {data}=await axios.post(`${origin}/api/auth/`,{email,password})
              const decdata=jwtDecode(data) 
              const info={token:data,...decdata}
              await dispatch(loginaction(info))
               settype(true)
               setError("Logged in Successfully")
          }
          else
          {
              setError("Invalid Credentials")
              settype(false)
            
            }
      }
      catch(e){
          setError("Try again later")
          settype(false)   
        }
        finally{
          setissubmit(true)
          setisload(false)
        }
    }
    const callbacksubmit=()=>{
      setissubmit(false)
  }
 return (
<Screen>
<MessageCard  show={issubmit} callshow={callbacksubmit}  message={Error} type={type}/>
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
              <ButtonFilled btnloading={isload} disable={issubmit}  func={()=>LoginFunc()} text={"Log In"}  textstyle={{
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