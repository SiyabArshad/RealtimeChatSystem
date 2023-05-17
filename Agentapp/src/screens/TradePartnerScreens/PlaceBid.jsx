import { View, Text,Modal,TouchableOpacity,Pressable,Image,StyleSheet,ImageBackground,ScrollView } from 'react-native'
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
export default function PlaceBid({navigation,route}) {
    const [title, settitle] = React.useState('');
    const [desc,setdesc]=React.useState("")
    const [amount,setamount]=React.useState(0)
  return (
    <Screen>
    <ScreenHeader  backfunc={()=>navigation.pop()} screenname='Place a Bid'/>
     <View style={{flex:1,justifyContent:"space-between"}}>
     <ScrollView showsVerticalScrollIndicator={false}>
    <View style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:rp(4)}}>
            <OutlinedTextInput changefunc={(e)=>settitle(e)} val={title} lable='Bid Title' placeholder='Bid Title' style={{marginBottom:rp(1.5)}}/>
            <OutlinedTextInput multipleline={true}  changefunc={(e)=>setdesc(e)} val={desc} lable='Bid Description' placeholder='Bid Description' style={{marginBottom:rp(1.5)}}/>
            <OutlinedTextInput  changefunc={(e)=>setamount(e)} val={amount} lable='Bid Amount' placeholder='Bid Amount' style={{marginBottom:rp(1.5)}}/>
    
    </View>
 
    <View style={{marginHorizontal:rp(2)}}>
        <SubTitleText text={"Attachments(Optional)"} size='m' style={{marginVertical:rp(2)}}/>
        <Pressable style={{height:rp(30),borderWidth:1,borderRadius:rp(2),borderColor:colors.brown,borderStyle: 'dashed',display:"flex",justifyContent:"center",alignItems:"center"}}>
        <AntIcon name="cloudupload" size={40} color={colors.lightblack} />
               <View style={{display:"flex",flexDirection:"row",marginTop:rp(2)}}>
                <CaptionText text={"Drop your files here or "} color={colors.lightblack}/>
                <CaptionText text={"Choose File"} color={colors.darkBrown} style={{}} />
                </View> 
                <CaptionText text={"upload file up to 10 mb"} color={colors.lightblack}/>
        </Pressable>
    </View>
    </ScrollView>
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
     <ButtonFilled text={"Place Bid"} style={{borderRadius:rp(5),marginVertical:rp(2)}} textstyle={{textTransform:"capitalize"}}/>
     <ButtonOutline text={"Cancel"} style={{borderRadius:rp(5),marginBottom:rp(2)}}/>
</View>
</View>
 </Screen>
  )
}
const styles=StyleSheet.create({

})