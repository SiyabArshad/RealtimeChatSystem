import { View, Text,Modal,TouchableOpacity,Pressable,Image,StyleSheet,ImageBackground,ScrollView, Dimensions ,TextInput} from 'react-native'
import React from 'react'
import colors from "../../helpers/colors"
import fonts from "../../helpers/fonts"
import Screen from "../../components/Screen"
import Heading from "../../components/Typography/Heading"
import CaptionText from "../../components/Typography/CaptionText"
import Feather from "react-native-vector-icons/Feather"
import { RFPercentage as rp, RFValue as rf } from "react-native-responsive-fontsize";
import ButtonFilled from "../../components/buttons/ButtonFilled"
import ButtonOutline from '../../components/buttons/ButtonOutline'
import SubTitleText from "../../components/Typography/Subtitle"
import Entypo from "react-native-vector-icons/Entypo"
import LabelText from "../../components/Typography/LableText"
import { LinearProgress,Avatar } from 'react-native-elements'
import ConversationCard from '../../components/ConversationCard'
import ContactCard from "../../components/ContactCard"
import ScreenName from "../../helpers/routes"
import MessageCard from "../../components/MessageCard"
import { useSelector,useDispatch } from 'react-redux';
import { loginaction,getCurrentuser } from '../../redux/auth/action'
import axios from 'axios'
import origin from '../../helpers/api'
export default function AddContact({navigation}) {
    const[fistname,setfirstname]=React.useState("")
    const[lastname,setlastname]=React.useState("")
    const[email,setemail]=React.useState("")
    const[phone,setphone]=React.useState("")
    const [issubmit,setissubmit]=React.useState(false)
    const [isload,setisload]=React.useState(false)
    const [type,settype]=React.useState(false)
    const [Error,setError]=React.useState('')
    const userinfo=useSelector(state=>state?.authReducer)
    const {clientID,token,_id}=userinfo?.currentUser
    const AddFunc=async()=>{
      setisload(true)
      try{
          if(email.length===0&&phone.length===0&&fistname.length===0)
          {
          setError("Some Feilds are Missing")
          settype(false)
          }
          else if(email.length>10&&phone.length>8)
          {
              const {data}=await axios.post(`${origin}/api/chat/contact`,{first_name:fistname,last_name:lastname,email,phone,user:_id},{
                headers:{
                  'Content-Type': 'application/json',
                  'x-auth-token':token,
                  'clientid':clientID
                }
              })
              console.log(data)
               settype(true)
               setError("Contact Added Successfully")
          }
          else
          {
              setError("InComplete Details")
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
    <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginVertical:rp(3),paddingHorizontal:rp(2)}}>
    <Pressable onPress={()=>navigation.pop()} style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
    <Entypo name="chevron-left" size={30} color={colors.skyBlue}/>
    </Pressable>
    <CaptionText color={colors.lightblack} text="Add Contacts"/>
   
    </View>
    
    <ScrollView showsVerticalScrollIndicator={false}>
             <View style={{justifyContent:"center",alignItems:"center",marginTop:rp(5)}}>
            
            <Heading text={"Create Contact"} h='h1' style={{marginTop:rp(2),marginBottom:rp(3)}}/>

            <View style={{width:"90%",marginVertical:rp(5)}}>
            <View style={{marginBottom:rp(2)}}>
             <TextInput onChangeText={(e)=>setfirstname(e)} value={fistname} style={{borderRadius:rp(1),paddingHorizontal:rp(2),paddingVertical:rp(1.6),backgroundColor:colors.lightpurple,marginVertical:rp(1)}} placeholder='First Name'/>
             </View>
             <View style={{marginBottom:rp(2)}}>
             <TextInput onChangeText={(e)=>setlastname(e)} value={lastname} style={{borderRadius:rp(1),paddingHorizontal:rp(2),paddingVertical:rp(1.6),backgroundColor:colors.lightpurple,marginVertical:rp(1)}} placeholder='Last Name'/>
             </View>
             <View style={{marginBottom:rp(2)}}>
             <TextInput onChangeText={(e)=>setemail(e)} value={email} style={{borderRadius:rp(1),paddingHorizontal:rp(2),paddingVertical:rp(1.6),backgroundColor:colors.lightpurple,marginVertical:rp(1)}} placeholder='Email'/>
             </View>
             <View>
             <TextInput maxLength={15} keyboardType='decimal-pad' value={phone} onChangeText={(e)=>setphone(e)}  style={{borderRadius:rp(1),paddingHorizontal:rp(2),paddingVertical:rp(1.6),backgroundColor:colors.lightpurple,marginVertical:rp(1)}} placeholder='Phone'/>
             </View>
            </View>
              <ButtonFilled  btnloading={isload} disable={issubmit}  func={()=>AddFunc()} text={"Create Contact"}  textstyle={{
        textTransform:"capitalize"}}/> 
             </View>
             </ScrollView>

    </View>
    </Screen>
  )
}