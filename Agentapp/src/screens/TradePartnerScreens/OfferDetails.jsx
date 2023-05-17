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
import ScreenNames from '../../helpers/routes'
export default function OfferDetails({navigation,route}) {
  return (
    <Screen>
    <ScreenHeader  backfunc={()=>navigation.pop()} screenname='Bid Details' bidstatus='Open' bidscreen={true}/>
    <View style={{flex:1}}>
            <ScrollView  showsVerticalScrollIndicator={false}>
                <SubTitleText text={"App Patent Idea: Social Network"}  size='m' style={{marginVertical:rp(2),marginLeft:rp(2)}}/>
                <View style={{width:"95%",marginHorizontal:"2.5%",paddingHorizontal:rp(1.5),paddingVertical:rp(1),backgroundColor:colors.lightgrey,borderRadius:rp(1.2)}}>
                  <View style={{display:"flex",flexDirection:"row"}}>
                    <View style={{width:"50%"}}>
                      <CaptionText text={"Amount"} color={colors.lightblack} style={{marginBottom:rp(1)}}/>
                      <SubTitleText text={"$500"} size={"m"}/>
                    </View>
                    <View>
                      <CaptionText text={"Ends in"} color={colors.lightblack} style={{marginBottom:rp(1)}}/>
                      <View style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
                      <SubTitleText text={"7 Days-"} size={"m"}/>
                      <SubTitleText text={"14 Jan 2023"} color={colors.lightblack} size={"s"}/>
                       </View>
                    </View>
                  </View>
                  <View style={{marginTop:rp(2)}}>
                    <CaptionText text={"Owner"} color={colors.black} style={{marginVertical:rp(2),fontSize:rp(2)}}/>
                    <View style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
                    <Avatar rounded size={"small"} source={require("../../../assets/images/user.png")}/>
                    <CaptionText text={"Christin Arc"} color={colors.lightblack} style={{marginLeft:rp(1),fontSize:rp(2.2)}}/>
                    </View>
                  </View>
                
                </View>
                <ButtonFilled text={"Accept Offer"} style={{marginVertical:rp(3),borderRadius:rp(5)}} textstyle={{textTransform:"capitalize"}}/>
                <View style={{marginHorizontal:rp(2)}}>
                  <SubTitleText text={"Descriptions"} size='m' style={{marginBottom:rp(2)}}/>
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
            </ScrollView>
    </View>
</Screen>
  )
}