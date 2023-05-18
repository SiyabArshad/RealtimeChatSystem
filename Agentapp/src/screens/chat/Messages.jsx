import { View, Text,Modal,TouchableOpacity,Pressable,Image,StyleSheet,ImageBackground,ScrollView, Dimensions ,TextInput} from 'react-native'
import React from 'react'
import colors from "../../helpers/colors"
import fonts from "../../helpers/fonts"
import Screen from "../../components/Screen"
import Heading from "../../components/Typography/Heading"
import CaptionText from "../../components/Typography/CaptionText"
import Feather from "react-native-vector-icons/Feather"
import { RFPercentage as rp, RFValue as rf } from "react-native-responsive-fontsize";
import ButtonFilled from "../../components/buttons/ButtonFilled"
import ButtonOutline from '../../components/buttons/ButtonOutline'
import SubTitleText from "../../components/Typography/Subtitle"
import Entypo from "react-native-vector-icons/Entypo"
import LabelText from "../../components/Typography/LableText"
import { LinearProgress,Avatar } from 'react-native-elements'
import ConversationCard from '../../components/ConversationCard'
import ContactCard from "../../components/ContactCard"
import ScreenName from "../../helpers/routes"
export default function Messages({navigation,route}) {
    const[tab,settab]=React.useState(0)
  return (
    <Screen>
    <View style={{flex:1}}>
    <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginVertical:rp(3),paddingHorizontal:rp(2)}}>
    <Pressable onPress={()=>navigation.openDrawer()} style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
    <Feather name="menu" size={24} color={colors.skyBlue} />
    </Pressable>
    <View style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
        <Pressable onPress={()=>settab(0)} style={{display:"flex",justifyContent:"center",alignItems:"center",paddingBottom:rp(1),borderBottomWidth:tab===0?2:0,borderBottomColor:colors.skyBlue}}>
            <CaptionText color={tab===0?colors.skyBlue:colors.lightblack} text={"Conversations"}/>
        </Pressable>
        <Pressable onPress={()=>settab(1)} style={{marginLeft:rp(3),display:"flex",justifyContent:"center",alignItems:"center",paddingBottom:rp(1),borderBottomWidth:tab===1?2:0,borderBottomColor:colors.skyBlue}}>
            <CaptionText text={"Contacts"} color={tab===1?colors.skyBlue:colors.lightblack}/>
        </Pressable>
    </View>
   
    </View>
    <View style={{flex:1}}>
        <ScrollView>
           {
            tab===0&&
            <View>
            {
            [1,2,3,4,5,6,7,8,9,10,11].map((item,i)=>(
                <ConversationCard func={()=>navigation.navigate(ScreenName.inbox)} key={i}/>
            ))
            }
            </View>
           }
                      {
            tab===1&&
            <View>
            {
            [1,2,3,4,5,6,7,8,9,10,11].map((item,i)=>(
                <ContactCard func={()=>navigation.navigate(ScreenName.inbox)} key={i}/>
            ))
            }
            </View>
           }
            </ScrollView>
    </View>
    </View>
     </Screen>   
  )
}