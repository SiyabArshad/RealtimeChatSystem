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
import OpenBids from '../../components/OpenBids'
import AcceptedBid from "../../components/AcceptedBid"
import MyProposal from '../../components/MyProposal'
import SearchBox from '../../components/SearchBox'
import ScreenNames from '../../helpers/routes'
export default function BidBoard({navigation,route}) {
    const[tab,settab]=React.useState(0)
    const[search,setsearch]=React.useState("")

  return (
    <Screen>
            <AppHeader drawerfunc={() => navigation.openDrawer()} screenname='Bid Boards'/>
            <View style={{marginTop:rp(3),marginBottom:rp(2),display:"flex",flexDirection:"row",alignItems:"center",paddingHorizontal:rp(2)}}>
                <Pressable onPress={()=>settab(0)} style={{paddingVertical:rp(1.2),paddingHorizontal:rp(1.5),borderRadius:rp(.7),backgroundColor:tab===0?colors.lightbrown:colors.lightgrey,marginRight:rp(1.3)}}>
                    <BodyText text={"Boards"} color={tab===0?colors.darkBrown:colors.lightblack}/>
                </Pressable>
                <Pressable onPress={()=>settab(1)} style={{paddingVertical:rp(1.2),paddingHorizontal:rp(1.5),borderRadius:rp(.7),backgroundColor:tab===1?colors.lightbrown:colors.lightgrey,marginRight:rp(1.3)}}>
                    <BodyText text={"My Proposals"} color={tab===1?colors.darkBrown:colors.lightblack}/>
                </Pressable>
                <Pressable onPress={()=>settab(2)} style={{paddingVertical:rp(1.2),paddingHorizontal:rp(1.5),borderRadius:rp(.7),backgroundColor:tab===2?colors.lightbrown:colors.lightgrey,marginRight:rp(1.3)}}>
                    <BodyText text={"Accepted Bids"} color={tab===2?colors.darkBrown:colors.lightblack}/>
                </Pressable>
            </View>
            <SearchBox val={search} changefunc={(e)=>setsearch(e)} style={{marginBottom:rp(2)}}/>
            <View style={{flex:1}}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        {
                            tab===0&&
                            [1,2,3,4,5].map((item,i)=>(
                                <OpenBids func={()=>navigation.navigate(ScreenNames.TPBidBoardDetails)} key={i}/>
                            ))
                        }
                        {
                            tab===1&&
                            [1,2,3,4,5].map((item,i)=>(
                                <MyProposal func={()=>navigation.navigate(ScreenNames.TPBidBoardDetails)} key={i}/>
                            ))
                        }
                        {
                            tab===2&&
                            [1,2,3,4,5].map((item,i)=>(
                                <AcceptedBid func={()=>navigation.navigate(ScreenNames.TPBidBoardDetails)} key={i}/>
                            ))
                        }
                    </ScrollView>
            </View>
    </Screen>
  )
}