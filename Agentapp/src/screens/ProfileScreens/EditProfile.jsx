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
import ScreenHeader from "../../components/ScreenHeader"
import OutlinedTextInput from '../../components/Inputs/OutlinedTextInput'
import ScreenNames from '../../helpers/routes'
export default function EditProfile({navigation,route}) {
    const [email, setemail] = React.useState('');
    const [name,setname]=React.useState("")
  return (
    <Screen>
    <ScreenHeader backfunc={()=>navigation.pop()} screenname='Edit Profile'/>
     <View style={{flex:1,justifyContent:"space-between"}}>
    <View style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:rp(4)}}>
            <View style={{borderWidth:1,borderColor:colors.brown,marginBottom:rp(.4),padding:rp(.5),display:"flex",justifyContent:"center",alignItems:"center",height:60,width:60,borderRadius:30}}>
            <Avatar rounded size={"medium"} source={require("../../../assets/images/user.png")}/>
            </View>
            <OutlinedTextInput changefunc={(e)=>setname(e)} val={name} lable='Full Name' placeholder='Full Name' style={{marginBottom:rp(1.5)}}/>
            <OutlinedTextInput  changefunc={(e)=>setemail(e)} val={email} lable='Email' placeholder='Email' style={{marginBottom:rp(1.5)}}/>
    </View>
<View style={{
backgroundColor:colors.white,
shadowColor: "#000000",
shadowOffset: {
  width: 0,
  height: 3,
},
shadowOpacity:  0.18,
shadowRadius: 4.59,
elevation: 5
}}
>
     <ButtonFilled text={"Save Changes"} style={{borderRadius:rp(5),marginVertical:rp(2)}} textstyle={{textTransform:"capitalize"}}/>
     <ButtonOutline text={"Cancel"} style={{borderRadius:rp(5),marginBottom:rp(2)}}/>
</View>
</View>
 </Screen>
  )
}
const styles=StyleSheet.create({

})