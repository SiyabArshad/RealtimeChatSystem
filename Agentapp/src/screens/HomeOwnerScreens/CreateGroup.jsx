import { View, Text,Modal,TouchableOpacity,Pressable,Image,StyleSheet,ImageBackground,ScrollResponderEvent,ScrollView } from 'react-native'
import React from 'react'
import colors from "../../helpers/colors"
import fonts from "../../helpers/fonts"
import Screen from "../../components/Screen"
import Heading from "../../components/Typography/Heading"
import SubTitleText from "../../components/Typography/Subtitle"
import CaptionText from "../../components/Typography/CaptionText"
import ButonText from "../../components/Typography/ButtonText"
import AntIcon from "react-native-vector-icons/AntDesign"
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
export default function CreateGroup({navigation,route}) {
    const [name, setname] = React.useState('');
   
  return (
    <Screen>
    <ScreenHeader backfunc={()=>navigation.pop()} screenname='Create Group'/>
     <View style={{flex:1,justifyContent:"space-between"}}>
    <View style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:rp(4)}}>
            <OutlinedTextInput changefunc={(e)=>setname(e)} val={name} lable='Group Name' placeholder='Group Name' style={{marginBottom:rp(1.5)}}/>
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
     <ButtonFilled text={"Create Group"} style={{borderRadius:rp(5),marginVertical:rp(2)}} textstyle={{textTransform:"capitalize"}}/>
     <ButtonOutline text={"Cancel"} style={{borderRadius:rp(5),marginBottom:rp(2)}}/>
</View>
</View>
 </Screen>
  )
}
const styles=StyleSheet.create({

})