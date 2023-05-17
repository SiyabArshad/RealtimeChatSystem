import { View, Text } from 'react-native'
import React from 'react'
import { BottomTabBarProps, BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Projects from '../screens/HomeOwnerScreens/Projects';
import MessageOwner from '../screens/HomeOwnerScreens/MessageOwner';
import SharePhoto from '../screens/HomeOwnerScreens/SharePhoto';
import Profile from '../screens/ProfileScreens/Profile';
import ScreenNames from '../helpers/routes';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5  from "react-native-vector-icons/FontAwesome5"
import { RFPercentage } from 'react-native-responsive-fontsize';
import colors from '../helpers/colors';
import fonts from '../helpers/fonts';
import CaptionText from '../components/Typography/CaptionText';
import Feather from "react-native-vector-icons/Feather"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"

const Tab = createBottomTabNavigator();
export default function HmBottomTab() {
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
        name={ScreenNames.HmProjects}
        component={Projects}
        options={{
          tabBarShowLabel: false,
          tabBarIcon:({color,size})=>
          (<View style={{display:"flex",alignItems:"center",justifyContent:"center",paddingVertical:RFPercentage(.5),marginBottom:5}}>
            <Feather name="trending-up" size={size} color={color} />
            <Text style={{color:color,fontFamily:fonts.mregular,fontSize:12,marginTop:5}}>Projects</Text>
          </View>
          )
          }}
        
        
      />
      <Tab.Screen
        name={ScreenNames.HmMessage}
        component={MessageOwner}
        options={{
          tabBarShowLabel: false,
          tabBarIcon:({color,size})=>
          (<View style={{display:"flex",alignItems:"center",justifyContent:"center",paddingVertical:RFPercentage(.5),marginBottom:5}}>
          <MaterialCommunityIcons name="message-text-outline" size={size} color={color} />
            <Text style={{color:color,fontFamily:fonts.mregular,fontSize:12,marginTop:5}}>Message</Text>
          </View>
          )
          }}
        
      />
      <Tab.Screen
        name={ScreenNames.HmSharePhoto}
        component={SharePhoto}
        options={{
          tabBarShowLabel: false,
          tabBarIcon:({color,size})=>
          (<View style={{display:"flex",alignItems:"center",justifyContent:"center",paddingVertical:RFPercentage(.5),marginBottom:5}}>
            <MaterialIcons name="photo" size={size} color={color} />
            <Text style={{color:color,fontFamily:fonts.mregular,fontSize:12,marginTop:5}}>Share</Text>
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
  );
}