import { View, Text,Modal,TouchableOpacity,Pressable,Image,StyleSheet,ImageBackground,ScrollView,TextInput } from 'react-native'
import React from 'react'
import colors from "../../helpers/colors"
import fonts from "../../helpers/fonts"
import Screen from "../../components/Screen"
import Heading from "../../components/Typography/Heading"
import SubTitleText from "../../components/Typography/Subtitle"
import CaptionText from "../../components/Typography/CaptionText"
import ButonText from "../../components/Typography/ButtonText"
import AntDesign from "react-native-vector-icons/AntDesign"
import Ionicons from "react-native-vector-icons/Ionicons"
import EvilIcons from "react-native-vector-icons/EvilIcons"
import { RFPercentage as rp, RFValue as rf } from "react-native-responsive-fontsize";
import ButtonFilled from '../../components/buttons/ButtonFilled'
import ButtonOutline from '../../components/buttons/ButtonOutline'
import BodyText from "../../components/Typography/BodyText"
import LableText from "../../components/Typography/LableText"
import { LinearProgress } from 'react-native-elements'
import AppHeader from '../../components/AppHeader'
import ScreenHeader from "../../components/ScreenHeader"
import OutlinedTextInput from '../../components/Inputs/OutlinedTextInput'
import DateInput from '../../components/Inputs/DateInput'
import TimeInput from '../../components/Inputs/TimeInput'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import formatDate from '../../helpers/dateFormat'
import formatTime from '../../helpers/formatTime'
import { Divider,Badge, ProgressBar, MD3Colors,Avatar} from 'react-native-paper'
import SearchBox from '../../components/SearchBox'
import ChatBox from '../../components/Chat/ChatBox'
import Feather from "react-native-vector-icons/Feather"
import ProjectCard from '../../components/projects/ProjectCard'
import ScreenNames from '../../helpers/routes'
export default function Projects({navigation,route}) {
    const [search,setsearch]=React.useState("")
  return (
    <Screen>
    <AppHeader drawerfunc={() => navigation.openDrawer()}  screenname='Projects'/>
    <SearchBox val={search} changefunc={(e)=>setsearch(e)} style={{marginVertical:rp(2),borderWidth:0,backgroundColor:colors.lightgrey}} placeholder='Search Projects'/>
    <View style={{flex:1,paddingBottom:rp(1)}}>
        <ScrollView showsVerticalScrollIndicator={false}>
        {
            [1,2,3,4,5,6,6].map((item,i)=>{
                return(
                   <ProjectCard key={i} navigation={navigation}/>
                )
            })
        }
        </ScrollView>
    </View>
    </Screen>
  )
}