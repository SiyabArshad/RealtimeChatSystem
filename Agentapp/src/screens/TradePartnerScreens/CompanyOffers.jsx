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
import { Avatar, Tab } from 'react-native-elements'
import AppHeader from '../../components/AppHeader'
import ScreenHeader from "../../components/ScreenHeader"
import OutlinedTextInput from '../../components/Inputs/OutlinedTextInput'
import AcceptedOffers from '../../components/AcceptedOffers'
import CompanyOfferscomp from '../../components/CompanyOfferscomp'
export default function CompanyOffers({navigation,route}) {
    const[tab,settab]=React.useState(0)
  return (
    <Screen>
            <AppHeader drawerfunc={() => navigation.openDrawer()} screenname='Offers'/>
            <View style={{marginTop:rp(3),marginBottom:rp(3),display:"flex",flexDirection:"row",alignItems:"center",paddingHorizontal:rp(2)}}>
                <Pressable onPress={()=>settab(0)} style={{paddingVertical:rp(1.2),paddingHorizontal:rp(1.5),borderRadius:rp(.7),backgroundColor:tab===0?colors.lightbrown:colors.lightgrey,marginRight:rp(1.3)}}>
                    <BodyText text={"Offers"} color={tab===0?colors.darkBrown:colors.lightblack}/>
                </Pressable>
                <Pressable onPress={()=>settab(1)} style={{paddingVertical:rp(1.2),paddingHorizontal:rp(1.5),borderRadius:rp(.7),backgroundColor:tab===1?colors.lightbrown:colors.lightgrey,marginRight:rp(1.3)}}>
                    <BodyText text={"Accepted Offers"} color={tab===1?colors.darkBrown:colors.lightblack}/>
                </Pressable>
            </View>
            <View style={{flex:1}}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        {
                            tab===0&&
                            [1,2,3,4,5].map((item,i)=>(
                                <CompanyOfferscomp navigation={navigation} key={i}/>
                            ))
                        }
                        {
                            tab===1&&
                            [1,2,3,4,5].map((item,i)=>(
                                <AcceptedOffers navigation={navigation} key={i}/>
                            ))
                        }
                    </ScrollView>
            </View>
    </Screen>
  )
}

const styles=StyleSheet.create({

})