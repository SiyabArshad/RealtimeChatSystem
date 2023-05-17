import { View, Text } from 'react-native'
import React from 'react'
import { BottomTabBarProps, BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import CompanyOffers from '../screens/TradePartnerScreens/CompanyOffers';
import Profile from '../screens/ProfileScreens/Profile';
import TPBidBoard from '../screens/TradePartnerScreens/BidBoard';
import ScreenNames from '../helpers/routes';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5  from "react-native-vector-icons/FontAwesome5"
import { RFPercentage } from 'react-native-responsive-fontsize';
import colors from '../helpers/colors';
import fonts from '../helpers/fonts';
import CaptionText from '../components/Typography/CaptionText';
import Feather from "react-native-vector-icons/Feather"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import AntDesign from "react-native-vector-icons/AntDesign"
const Tab = createBottomTabNavigator();
export default function TPBottomTab() {
  return (
    <Tab.Navigator
    initialRouteName={ScreenNames.HmProjects}
    screenOptions={({ route }) => ({
      tabBarActiveTintColor: colors.darkBrown,
      tabBarInactiveTintColor: colors.vlightblack,
      headerShown: false,
      tabBarStyle: {
        paddingVertical:10,
        backgroundColor: colors.white,
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        shadowColor: colors.lightgrey,
        shadowOffset: {
          width: 0,
          height: 7,
        },
        shadowOpacity: 0.21,
        shadowRadius: 7.68,
        elevation: 10,
        height:60
      }
    })}
  >
    <Tab.Screen
      name={ScreenNames.TpCompanyOffers}
      component={CompanyOffers}
      options={{
        tabBarShowLabel: false,
        tabBarIcon:({color,size})=>
        (<View style={{display:"flex",alignItems:"center",justifyContent:"center",paddingVertical:RFPercentage(.5),marginBottom:5}}>
          <AntDesign name="file1" size={size} color={color} />
          <Text style={{color:color,fontFamily:fonts.mregular,fontSize:12,marginTop:5}}>Offers</Text>
        </View>
        )
        }}
      
    />
    <Tab.Screen
      name={ScreenNames.TPBidBoard}
      component={TPBidBoard}
      options={{
        tabBarShowLabel: false,
        tabBarIcon:({color,size})=>
        (<View style={{display:"flex",alignItems:"center",justifyContent:"center",paddingVertical:RFPercentage(.5),marginBottom:5}}>
         <FontAwesome5 name="tasks" size={size} color={color}/>
          <Text style={{color:color,fontFamily:fonts.mregular,fontSize:12,marginTop:5}}>Bid Boards</Text>
        </View>
        )
        }}
      
    />
    <Tab.Screen
      name={ScreenNames.profile}
      component={Profile}
      options={{
        tabBarShowLabel: false,
        tabBarIcon:({color,size})=>
        (<View style={{display:"flex",alignItems:"center",justifyContent:"center",paddingVertical:RFPercentage(.5),marginBottom:5}}>
         <FontAwesome5 name="user-circle"  size={size} color={color}/>
          <Text style={{color:color,fontFamily:fonts.mregular,fontSize:12,marginTop:5}}>Profile</Text>
        </View>
        )
        }}
      
    />
  </Tab.Navigator>
  )
}