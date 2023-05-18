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
export default function AddContact({navigation}) {
    const[fistname,setfirstname]=React.useState("")
    const[lastname,setlastname]=React.useState("")
    const[email,setemail]=React.useState("")
    const[phone,setphone]=React.useState("")

  return (
    <Screen>
    <View style={{flex:1}}>
    <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginVertical:rp(3),paddingHorizontal:rp(2)}}>
    <Pressable onPress={()=>navigation.openDrawer()} style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
    <Feather name="menu" size={24} color={colors.skyBlue} />
    </Pressable>

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
             <TextInput onChangeText={(e)=>setemail(e)} style={{borderRadius:rp(1),paddingHorizontal:rp(2),paddingVertical:rp(1.6),backgroundColor:colors.lightpurple,marginVertical:rp(1)}} placeholder='Email'/>
             </View>
             <View>
             <TextInput maxLength={15} keyboardType='decimal-pad' value={phone} onChangeText={(e)=>setphone(e)}  style={{borderRadius:rp(1),paddingHorizontal:rp(2),paddingVertical:rp(1.6),backgroundColor:colors.lightpurple,marginVertical:rp(1)}} placeholder='Phone'/>
             </View>
            </View>
              <ButtonFilled  text={"Create Contact"}  textstyle={{
        textTransform:"capitalize"}}/> 
             </View>
             </ScrollView>

    </View>
    </Screen>
  )
}