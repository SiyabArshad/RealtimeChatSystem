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
import ScreenNames from '../../helpers/routes'
export default function UpdateAppointment({navigation,route}) {
    const [title, settitle] = React.useState('');
    const [notes,setnotes]=React.useState("")
    const [location,setlocation]=React.useState("")
    const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);
    const [isStartTimeVisible, setStartTimePickerVisibility] = React.useState(false);
    const [isEndTimeVisible, setEndTimePickerVisibility] = React.useState(false);
    const [date,setdate]=React.useState("")
    const [starttime,setstarttime]=React.useState("")
    const [endtime,setendtime]=React.useState("")

    //date picker
    const showDatePicker = () => {
      setDatePickerVisibility(true);
    };
  
    const hideDatePicker = () => {
      setDatePickerVisibility(false);
    };
  
    const handleConfirm = (date) => {
      let pickeddate=formatDate(date) 
      setdate(pickeddate)
      hideDatePicker();
    };
    //starttime picker
    const showStartTimePicker = () => {
      setStartTimePickerVisibility(true);
    };
  
    const hideStartTimePicker = () => {
      setStartTimePickerVisibility(false);
    };
  
    const handleConfirmStartTime = (date) => {
      let pickedtime=formatTime(date) 
      setstarttime(pickedtime)
      hideStartTimePicker();
    };
    //endtime picker
    const showEndTimePicker = () => {
      setEndTimePickerVisibility(true);
    };
  
    const hideEndTimePicker = () => {
      setEndTimePickerVisibility(false);
    };
  
    const handleConfirmEndTime = (date) => {
      let pickedtime=formatTime(date) 
      setendtime(pickedtime)
      hideEndTimePicker();
    };
    //end
  
  return (
    <Screen>
    <ScreenHeader  backfunc={()=>navigation.pop()} screenname='Edit Appointment'/>
    <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
       <DateTimePickerModal
        isVisible={isStartTimeVisible}
        mode='time'
        onConfirm={handleConfirmStartTime}
        onCancel={hideStartTimePicker}
      />
      <DateTimePickerModal
        isVisible={isEndTimeVisible}
        mode='time'
        onConfirm={handleConfirmEndTime}
        onCancel={hideEndTimePicker}
      />
     <View style={{flex:1,justifyContent:"space-between"}}>
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:rp(4)}}>
            <OutlinedTextInput changefunc={(e)=>settitle(e)} val={title} lable='Appointment Title' placeholder='Appointment Title' style={{marginBottom:rp(1.5)}}/>
            <DateInput changefunc={showDatePicker} val={date} style={{marginBottom:rp(1.5)}}/>
            <View style={{marginBottom:rp(1.5),display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
             <TimeInput val={starttime}  changefunc={showStartTimePicker} label='Start Time' placeholder='Start Time' style={{marginRight:"2%"}}/>
             <TimeInput val={endtime}  changefunc={showEndTimePicker} label='End Time' placeholder='End Time'/>
            </View>
            <OutlinedTextInput changefunc={(e)=>setlocation(e)} val={location} lable='Room or Location' placeholder='Room or Location' style={{marginBottom:rp(1.5)}}/>
            <OutlinedTextInput  multipleline={true} changefunc={(e)=>setnotes(e)} val={notes} lable='Notes' placeholder='Notes' style={{marginBottom:rp(1.5)}}/>
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
     <ButtonFilled text={"Save Changes"} style={{borderRadius:rp(5),marginVertical:rp(2)}} textstyle={{textTransform:"capitalize"}}/>
     <ButtonOutline text={"Cancel"} style={{borderRadius:rp(5),marginBottom:rp(2)}}/>
</View>
</View>
 </Screen>
  )
}