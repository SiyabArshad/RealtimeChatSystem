import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import ScreenNames from './routes';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5  from "react-native-vector-icons/FontAwesome5"
import { RFPercentage } from 'react-native-responsive-fontsize';
import colors from './colors';
import fonts from './fonts';
import CaptionText from '../components/Typography/CaptionText';
import Feather from "react-native-vector-icons/Feather"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import Messages from '../screens/chat/Messages';
import AddContact from '../screens/contact/AddContact';
import { DrawerContent } from './DrawerContent';

const Drawer1 = createDrawerNavigator();

export default function Drawer() {
    return (
      <Drawer1.Navigator drawerContent={() => <DrawerContent />} screenOptions={{headerShown:false}}>
        <Drawer1.Screen
        name={"home"}
        component={Messages}        
      />
       <Drawer1.Screen
        name={ScreenNames.addcontact}
        component={AddContact}        
      />
      </Drawer1.Navigator>
    );
  }