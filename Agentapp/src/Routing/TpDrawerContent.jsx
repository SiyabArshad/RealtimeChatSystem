import React from 'react';
import { View, StyleSheet,Image } from 'react-native';
import {
  DrawerItem,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {
  useTheme,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';
import  MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5  from "react-native-vector-icons/FontAwesome5"
import Feather from "react-native-vector-icons/Feather"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import AntDesign from "react-native-vector-icons/AntDesign"

import colors from '../helpers/colors';
import fonts from '../helpers/fonts';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { Avatar } from 'react-native-elements'
import ScreenNames from '../helpers/routes';
import { useNavigation } from '@react-navigation/native';
export function TpDrawerContent(props) {
    const navigation=useNavigation()
  return (
    <DrawerContentScrollView {...props}>
      <View
        style={
          styles.drawerContent
        }
      >
        <View style={styles.userInfoSection}>
            <View style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",marginBottom:RFPercentage(2)}}>
                <Image resizeMode='contain' style={{height:50,width:50}} source={require("../../assets/images/logo.png")}/>
                <Image resizeMode='contain' style={{height:20,width:20}} source={require("../../assets/images/doublearrow.png")}/>
            </View>
        <View style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
               <View style={{borderWidth:1,borderColor:colors.brown,marginBottom:RFPercentage(.4),padding:RFPercentage(.5),display:"flex",justifyContent:"center",alignItems:"center",height:60,width:60,borderRadius:30}}>
            <Avatar rounded size={"medium"} source={require("../../assets/images/user.png")}/>
            </View>
          <Title style={styles.title}>Jean Clara</Title>
        </View>
         
        </View>
        <Drawer.Section style={styles.drawerSection}>
          <DrawerItem
            icon={({ color, size }) => (
              <Feather name="home" size={size} color={color} />
            )}
            label="Home"
            labelStyle={{fontFamily:fonts.mregular,fontSize:RFPercentage(2.6)}}
            onPress={() => {navigation.navigate("tphome")}}
          />
          <DrawerItem
            icon={({ color, size }) => (
                <AntDesign name="file1" size={size} color={color} />
            )}
            label="Offers"
            labelStyle={{fontFamily:fonts.mregular,fontSize:RFPercentage(2.6)}}
            onPress={() => {navigation.navigate(ScreenNames.TpCompanyOffers)}}
          />
          <DrawerItem
            icon={({ color, size }) => (
                <FontAwesome5 name="tasks" size={size} color={color}/>
            )}
            label="Bid Board"
            labelStyle={{fontFamily:fonts.mregular,fontSize:RFPercentage(2.6)}}
            onPress={() => {navigation.navigate(ScreenNames.TPBidBoard)}}
          />
            <DrawerItem
            icon={({ color, size }) => (
                <FontAwesome5 name="user-circle"  size={size} color={color}/>
            )}
            label="Profile"
            labelStyle={{fontFamily:fonts.mregular,fontSize:RFPercentage(2.6)}}
            onPress={() => {navigation.navigate(ScreenNames.profile)}}
          />
          
          
        </Drawer.Section>
        <DrawerItem
            icon={({ color, size }) => (
                <MaterialIcons name="logout" size={size} color={color} />
                )}
            label="Logout"
            labelStyle={{fontFamily:fonts.mregular,fontSize:RFPercentage(2.6)}}
            onPress={() => {navigation.navigate(ScreenNames.onBoarding)}}
          />
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: RFPercentage(2.5),
    paddingVertical:RFPercentage(1.5),
    backgroundColor:colors.lightbrown,
  },
  title: {
    color:colors.lightblack,
    fontFamily:fonts.mmedium
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});