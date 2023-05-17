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
import AntDesign from "react-native-vector-icons/AntDesign"
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
import AppointmentList from '../../components/Appointments/AppointmentList'
import AppointmentDates from '../../components/Appointments/AppointmentDates'
import ScreenNames from '../../helpers/routes'
export default function Appointments({navigation,route}) {
  return (
        <Screen>
            <AppHeader drawerfunc={() => navigation.openDrawer()} screenname='Appointments'/>
            <View style={{flex:1}}>
                <AppointmentDates/>
                <AppointmentList navigation={navigation}/>
                <TouchableOpacity onPress={()=>navigation.navigate(ScreenNames.TmScheduleAppointments)} style={{backgroundColor:colors.brown,position:"absolute",width:60,height:60,borderRadius:30,display:"flex",alignItems:"center",justifyContent:"center",bottom:20,right:10}}>
                <AntDesign name="calendar" size={28} color={colors.white} />
                </TouchableOpacity>
            </View>
        </Screen>
  )
}