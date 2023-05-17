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
import SearchBox from '../../components/SearchBox'
import MemberCard from '../../components/Members/MemberCard'
import ScreenNames from '../../helpers/routes'
export default function InviteMember({navigation,route}) {
    const [search,setsearch]=React.useState("")
  return (
    <Screen>
    <ScreenHeader backfunc={()=>navigation.pop()} screenname='Invite Members'/>
     <View style={{flex:1,justifyContent:"space-between"}}>
     <SearchBox val={search} changefunc={(e)=>setsearch(e)} style={{marginVertical:rp(2),borderWidth:0,backgroundColor:colors.lightgrey}} placeholder='Search People'/>
    <View style={{flex:1,paddingBottom:rp(1),paddingHorizontal:rp(2)}}>
        <ScrollView showsVerticalScrollIndicator={false}>
        {
            [1,2,3,4,5,6,7,8,9,10].map((item,i)=>(
                <MemberCard key={i}/>
            ))

        }
</ScrollView>
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
     <ButtonFilled text={"Invite Members"} style={{borderRadius:rp(5),marginVertical:rp(2)}} textstyle={{textTransform:"capitalize"}}/>
     <ButtonOutline text={"Cancel"} style={{borderRadius:rp(5),marginBottom:rp(2)}}/>
</View>
</View>
 </Screen>
  )
}
const styles=StyleSheet.create({

})