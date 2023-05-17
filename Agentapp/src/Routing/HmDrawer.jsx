import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
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
import HmBottomTab from './HmBottomTab';
import { HmDrawerContent } from './HmDrawerContent';
const Drawer = createDrawerNavigator();

export default function HmDrawer() {
    return (
      <Drawer.Navigator drawerContent={() => <HmDrawerContent />} screenOptions={{headerShown:false}}>
        <Drawer.Screen
        name={"hmhome"}
        component={HmBottomTab}        
      />
      </Drawer.Navigator>
    );
  }