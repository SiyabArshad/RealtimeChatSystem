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
import Entypo from "react-native-vector-icons/Entypo"
import { RFPercentage as rp, RFValue as rf } from "react-native-responsive-fontsize";
import ButtonFilled from '../../components/buttons/ButtonFilled'
import ButtonOutline from '../../components/buttons/ButtonOutline'
import BodyText from "../../components/Typography/BodyText"
import LableText from "../../components/Typography/LableText"
import { LinearProgress,Avatar } from 'react-native-elements'
import AppHeader from '../../components/AppHeader'
import ScreenHeader from "../../components/ScreenHeader"
import OutlinedTextInput from '../../components/Inputs/OutlinedTextInput'
import DateInput from '../../components/Inputs/DateInput'
import TimeInput from '../../components/Inputs/TimeInput'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import formatDate from '../../helpers/dateFormat'
import formatTime from '../../helpers/formatTime'
import { Divider,Badge, ProgressBar} from 'react-native-paper'
import SearchBox from '../../components/SearchBox'
import ChatBox from '../../components/Chat/ChatBox'
import Feather from "react-native-vector-icons/Feather"
import ProjectCard from '../../components/projects/ProjectCard'
import ProjectProgress from '../../components/projects/ProjectProgress'
import ProjectDetailsBox from '../../components/projects/ProjectDetailsBox'
import MaterialIcon from "react-native-vector-icons/MaterialIcons"
import Member from '../../components/Members/Member'
import ProjectStages from '../../components/projects/ProjectStages'
import ScreenNames from '../../helpers/routes'
export default function ProjectDetails({navigation,route}) {
    const[tab,settab]=React.useState(0)
  return (
    <Screen>
    <ScreenHeader backfunc={()=>navigation.pop()} screenname='Projects Detail'/>
    <View style={{flex:1,paddingBottom:rp(1),marginTop:rp(2),paddingHorizontal:rp(2)}}>
        <ScrollView showsVerticalScrollIndicator={false}>
            <SubTitleText text={"Construction of Tiny Home"} size='m' style={{marginVertical:rp(1.5)}}/>
        <ProjectProgress/>  
        <ProjectDetailsBox/>
        <View style={{marginVertical:rp(2),display:"flex",flexDirection:"row",alignItems:"center"}}>
                
                <Pressable onPress={()=>settab(0)} style={{paddingVertical:rp(1.2),paddingHorizontal:rp(1.5),borderRadius:rp(.7),backgroundColor:tab===0?colors.lightbrown:colors.lightgrey,marginRight:rp(1.3)}}>
                     <BodyText text={"Project Stage"} color={tab===0?colors.darkBrown:colors.lightblack}/>
                 </Pressable>
                 <Pressable onPress={()=>settab(1)} style={{paddingVertical:rp(1.2),paddingHorizontal:rp(1.5),borderRadius:rp(.7),backgroundColor:tab===1?colors.lightbrown:colors.lightgrey,marginRight:rp(1.3)}}>
                     <BodyText text={"Details"} color={tab===1?colors.darkBrown:colors.lightblack}/>
                 </Pressable>
                 <Pressable onPress={()=>settab(2)} style={{paddingVertical:rp(1.2),paddingHorizontal:rp(1.5),borderRadius:rp(.7),backgroundColor:tab===2?colors.lightbrown:colors.lightgrey,marginRight:rp(1.3)}}>
                     <BodyText text={"Members(4)"} color={tab===2?colors.darkBrown:colors.lightblack}/>
                 </Pressable>
                </View>
                {
                    tab===0&&<ProjectStages/>
                }
                {
                tab===1&&<>
                 <View style={{marginHorizontal:rp(2),marginTop:rp(2)}}>
                  <SubTitleText text={"Descriptions"} size='m'  style={{marginBottom:rp(2)}}/>
                  <BodyText color={colors.lightblack} text={`Do you have an original Social App idea that does not exist? We are searching for an original idea for a Patent.
Submit an original Social App idea for people to make friends and share videos, photos, and music. `} 
style={{lineHeight:rp(3.8),fontSize:rp(2.6)}}
/>
                </View>
                <View style={{marginHorizontal:rp(2),marginTop:rp(2),paddingBottom:rp(2)}}>
                  <SubTitleText text={"Attachments"} size='m' style={{marginBottom:rp(2)}}/>
                  <View style={{width:"100%",paddingHorizontal:rp(1.5),paddingVertical:rp(1),backgroundColor:colors.lightgrey,borderRadius:rp(1.2)}}>
                  <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
                    <View>
                      <CaptionText text={"Sample Launch.pdf"}  style={{marginBottom:rp(1),fontSize:rp(2.6)}}/>
                      <CaptionText text={"12 MB"} color={colors.lightblack} style={{fontSize:rp(2.7)}}/>
                    </View>
                    <Pressable style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
                    <MaterialIcon name="file-download" size={30} color={colors.lightblack} />
                    </Pressable>
                  </View>
                </View>
                </View>
                </>
               }
               {
                tab===2&&<View  style={{paddingBottom:rp(5)}}>
                    {
                        [1,2,3,4,5].map((item,i)=>(
                            <Member key={i}/>
                        ))
}
                </View>
               }
        </ScrollView>
    </View>
    </Screen>
  )
}