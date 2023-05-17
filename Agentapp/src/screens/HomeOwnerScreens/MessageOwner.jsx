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
import { Divider,Badge } from 'react-native-paper'
import SearchBox from '../../components/SearchBox'
import ScreenNames from '../../helpers/routes'
export default function MessageOwner({navigation,route}) {
    const[search,setsearch]=React.useState("")
    const[tab,settab]=React.useState(0)
  return (
    <Screen>
    <AppHeader drawerfunc={() => navigation.openDrawer()} screenname='Message'/>
    <View style={{marginHorizontal:rp(2),marginTop:rp(2),display:"flex",flexDirection:"row"}}>
    <Pressable onPress={()=>settab(0)} style={{paddingVertical:rp(1.2),paddingHorizontal:rp(1.5),borderRadius:rp(.7),backgroundColor:tab===0?colors.lightbrown:colors.lightgrey,marginRight:rp(1.3)}}>
                    <BodyText text={"Internal"} color={tab===0?colors.darkBrown:colors.lightblack}/>
                </Pressable>
                <Pressable onPress={()=>settab(1)} style={{paddingVertical:rp(1.2),paddingHorizontal:rp(1.5),borderRadius:rp(.7),backgroundColor:tab===1?colors.lightbrown:colors.lightgrey,marginRight:rp(1.3)}}>
                    <BodyText text={"Customers"} color={tab===1?colors.darkBrown:colors.lightblack}/>
                </Pressable>
             
    </View>
    <View style={{marginVertical:rp(3),display:"flex",flexDirection:"row",alignItems:"center",marginHorizontal:rp(2)}}>
       <Avatar rounded size="medium" source={require("../../../assets/images/user.png")}/> 
    <SearchBox placeholder='Search a new Chat' val={search} changefunc={(e)=>setsearch(e)} style={{width:"84%",backgroundColor:colors.lightgrey,borderWidth:0,paddingVertical:rp(2),borderRadius:rp(4)}}/>
    </View>
    {
        tab===0&&
        <ScrollView showsVerticalScrollIndicator={false}>
        {
            [1,2,3,4,5,6,7,8,9,9].map((item,i)=>(
                <View key={i} style={{marginHorizontal:rp(2),marginBottom:rp(3)}}>
                <Pressable onPress={()=>navigation.navigate(ScreenNames.HmInbox,{type:"Internal"})} style={{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginBottom:rp(2)}}>
                    <View style={{display:"flex",flexDirection:"row"}}>
                    <Avatar rounded size="medium" source={require("../../../assets/images/user.png")}/>
                    <View style={{marginLeft:rp(2)}}>
                        <SubTitleText text={"Christin Arc"} size='m'/>
                        <View style={{display:"flex",flexDirection:"row"}}>
                        <CaptionText style={{marginTop:rp(1),marginRight:rp(1)}} color={colors.darkBrown} text={"How are you Doing?"}/>
                        <Badge style={{backgroundColor:colors.darkBrown}}>
                            3
                        </Badge>
                        </View>
                     </View>
                    </View>
                    <CaptionText text={"10 min ago"} color={colors.lightblack}/>
                </Pressable>
                <Divider/>
                </View>
            ))
        }
        </ScrollView>
    }
    {
        tab===1&&
        <ScrollView showsVerticalScrollIndicator={false}>
        {
            [1,2,3,4].map((item,i)=>(
                <View key={i} style={{marginHorizontal:rp(2),marginBottom:rp(3)}}>
                <Pressable onPress={()=>navigation.navigate(ScreenNames.HmInbox,{type:"Customer"})} style={{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginBottom:rp(2)}}>
                    <View style={{display:"flex",flexDirection:"row"}}>
                    <Avatar rounded size="medium" source={require("../../../assets/images/user.png")}/>
                    <View style={{marginLeft:rp(2)}}>
                        <SubTitleText text={"Christin Arc"} size='m'/>
                        <View style={{display:"flex",flexDirection:"row"}}>
                        <CaptionText style={{marginTop:rp(1),marginRight:rp(1)}} color={colors.darkBrown} text={"How are you Doing?"}/>
                        <Badge style={{backgroundColor:colors.darkBrown}}>
                            3
                        </Badge>
                        </View>
                     </View>
                    </View>
                    <CaptionText text={"10 min ago"} color={colors.lightblack}/>
                </Pressable>
                <Divider/>
                </View>
            ))
        }
        </ScrollView>
    }
    
    </Screen>
  )
}