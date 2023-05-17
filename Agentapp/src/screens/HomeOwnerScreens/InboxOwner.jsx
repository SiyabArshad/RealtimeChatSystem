import { View, Text,Modal,TouchableOpacity,Pressable,Image,StyleSheet,ImageBackground,ScrollView,TextInput } from 'react-native'
import React from 'react'
import colors from "../../helpers/colors"
import fonts from "../../helpers/fonts"
import Screen from "../../components/Screen"
import Heading from "../../components/Typography/Heading"
import SubTitleText from "../../components/Typography/Subtitle"
import CaptionText from "../../components/Typography/CaptionText"
import ButonText from "../../components/Typography/ButtonText"
import EntypoIcon from "react-native-vector-icons/Entypo"
import Ionicons from "react-native-vector-icons/Ionicons"
import EvilIcons from "react-native-vector-icons/EvilIcons"
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
import { Divider,Badge} from 'react-native-paper'
import SearchBox from '../../components/SearchBox'
import ChatBox from '../../components/Chat/ChatBox'
import Feather from "react-native-vector-icons/Feather"
import ScreenNames from '../../helpers/routes'
export default function InboxOwner({navigation,route}) {
    const {type}=route.params
  return (
    <Screen>
    <View style={{flex:1,marginHorizontal:rp(2),display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
    <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginTop:rp(1)
}}>
        <View style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
            <TouchableOpacity onPress={()=>navigation.pop()}>
            <Feather name="chevron-left" size={30} color={colors.lightblack} />
            </TouchableOpacity>
            <View style={{marginLeft:rp(2),display:"flex",flexDirection:"row",alignItems:"center"}}>
                <Avatar rounded size={"small"} source={require("../../../assets/images/user.png")}/>
                <CaptionText text={"Christin Arc"} style={{marginLeft:rp(1),fontSize:rp(2.5)}}/>
                <View style={{marginLeft:rp(1),backgroundColor:type==='Internal'?colors.vlightgreen:colors.navybluelight,paddingHorizontal:rp(1.3),paddingVertical:rp(.7),borderRadius:rp(1)}}>
                    <CaptionText color={type==="Internal"?colors.green:colors.navyblue}  text={type}/>
                </View>
            </View>
        </View>
        <TouchableOpacity >
        <Feather name="more-vertical" size={24} color={colors.lightblack}/>
        </TouchableOpacity>
    </View>
    <ChatBox/>
    <View style={{width:"100%",display:"flex",flexDirection:"row",paddingVertical:rp(1),justifyContent:"space-between",alignItems:"center"}}>
        <Pressable style={{width:"10%"}}>
        <EvilIcons name="image" size={40} color={colors.lightblack} />
        </Pressable>
        <TextInput style={{borderWidth:1,borderColor:colors.lightblack,borderRadius:rp(5),paddingHorizontal:rp(2),paddingVertical:rp(2),width:"80%",marginHorizontal:rp(1)}} placeholder='Your Message'/>
        <Pressable style={{width:"10%"}}>
        <Ionicons name="md-send" size={26} color={colors.darkBrown} />
        </Pressable>
    </View>
    </View>
    </Screen>
  )
}