import { View, Text,Modal,TouchableOpacity,Pressable,Image,StyleSheet,ImageBackground,ScrollView } from 'react-native'
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
import DateInput from '../../components/Inputs/DateInput'
import TimeInput from '../../components/Inputs/TimeInput'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import formatDate from '../../helpers/dateFormat'
import formatTime from '../../helpers/formatTime'
import { Divider } from 'react-native-paper'
import ScreenNames from '../../helpers/routes'
export default function AppointmentDetails({navigation,route}) {

  
  return (
    <Screen>
    <ScreenHeader backfunc={()=>navigation.pop()} screenname='Appointment'>
       <TouchableOpacity onPress={()=>navigation.navigate(ScreenNames.TmUpdateAppointments)}>
            <FeatherIcon color={colors.lightblack} size={24} name='edit'/>
       </TouchableOpacity>
    </ScreenHeader>
     <View style={{flex:1,justifyContent:"space-between"}}>
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={{marginTop:rp(4),marginHorizontal:rp(2)}}>
        <View style={{marginHorizontal:rp(1),marginBottom:rp(3)}}>
            <CaptionText style={{fontSize:rp(2.9)}} color={colors.lightblack} text={"Appointment Title"} />
            <CaptionText style={{fontSize:rp(2.7),marginVertical:rp(1)}} color={colors.black} text={"Risk Management Description"}  />
            <Divider/>
        </View>
        <View style={{marginHorizontal:rp(1),marginBottom:rp(3)}}>
            <CaptionText style={{fontSize:rp(2.9)}} color={colors.lightblack} text={"Date"} />
            <CaptionText style={{fontSize:rp(2.7),marginVertical:rp(1)}} color={colors.black} text={"07/07/2023"}  />
            <Divider/>
        </View>
        <View style={{marginHorizontal:rp(1),marginBottom:rp(3)}}>
            <View style={{display:"flex",flexDirection:"row"}}>
                <View style={{marginRight:rp(4)}}>
                <CaptionText style={{fontSize:rp(2.9)}} color={colors.lightblack} text={"Start Time"} />
               <CaptionText style={{fontSize:rp(2.7),marginVertical:rp(1)}} color={colors.black} text={"9:00 AM"}  />
                </View>
                <View>
                <CaptionText style={{fontSize:rp(2.9)}} color={colors.lightblack} text={"End Time"} />
               <CaptionText style={{fontSize:rp(2.7),marginVertical:rp(1)}} color={colors.black} text={"10:00 AM"}  />
                </View>
            </View>
            <Divider/>
        </View>
        <View style={{marginHorizontal:rp(1),marginBottom:rp(3)}}>
            <CaptionText style={{fontSize:rp(2.9)}} color={colors.lightblack} text={"Room or Location"} />
            <CaptionText style={{fontSize:rp(2.7),marginVertical:rp(1)}} color={colors.black} text={"Room 5 ,Building xyz"}  />
            <Divider/>
        </View>
        <View style={{marginHorizontal:rp(1),marginBottom:rp(1)}}>
            <CaptionText style={{fontSize:rp(2.9)}} color={colors.lightblack} text={"Notes"} />
            <CaptionText style={{fontSize:rp(2.7),marginVertical:rp(1)}} color={colors.black} text={"There is two storied house that need to be rebuilt using new technologies and the main aim is to...."}  />
            <Divider/>
        </View>
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
     <ButtonFilled text={"Delete"} style={{borderRadius:rp(5),marginVertical:rp(2)}} textstyle={{textTransform:"capitalize"}}/>
     <ButtonOutline text={"Close"} style={{borderRadius:rp(5),marginBottom:rp(2)}}/>
</View>
</View>
 </Screen>
  )
}