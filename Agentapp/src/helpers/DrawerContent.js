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
import colors from './colors';
import fonts from './fonts';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { Avatar } from 'react-native-elements'
import ScreenNames from './routes';
import { useNavigation } from '@react-navigation/native';
import CaptionText from '../components/Typography/CaptionText';
import { useSelector,useDispatch } from 'react-redux';
import { loginaction,logoutaction,getCurrentuser } from '../redux/auth/action'
import { GetBroadCast,UpdateBroadCast } from '../redux/broadcast/action';
import { GetProfile } from '../redux/profile/action';
import axios from 'axios'
export function DrawerContent(props) {
    const navigation=useNavigation()
    const dispatch=useDispatch()
    const userinfo=useSelector(state=>state?.authReducer)
    const {clientID,token,_id}=userinfo?.currentUser
    const binfo=useSelector(state=>state?.broadcastReducer)
    const pinfo=useSelector(state=>state?.profileReducer)
    const [checked,setchecked]=React.useState(binfo?.broadcast||false)
    const fetchdata=async()=>{
      dispatch(GetBroadCast({clientid:clientID,token}))
      dispatch(GetProfile({clientid:clientID,token}))
    }
    React.useEffect(()=>{
      fetchdata()
    },[clientID,token])
    
  return (
    <DrawerContentScrollView {...props}>
      <View
        style={
          styles.drawerContent
        }
      >
        <View style={styles.userInfoSection}>
           
        <View style={{display:"flex",alignItems:"center",justifyContent:"center",marginVertical:RFPercentage(2)}}>
               <View style={{borderWidth:1,borderColor:colors.brown,marginBottom:RFPercentage(.4),padding:RFPercentage(.5),display:"flex",justifyContent:"center",alignItems:"center",height:60,width:60,borderRadius:30}}>
            <Avatar rounded size={"medium"} source={require("../../assets/images/user.png")}/>
            </View>
          <Title style={styles.title}>{pinfo.profile?.name}</Title>
          <CaptionText text={pinfo.profile?.email}/>
        </View>
          <View style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",marginVertical:RFPercentage(2)}}>
            <CaptionText text={"BroadCast"}/>
            <Switch color={colors.purple} value={binfo?.broadcast} onChange={()=>{
              setchecked(!checked)
              dispatch(UpdateBroadCast({clientid:clientID,token,broadcast:binfo?.broadcast}))
            }}/>
        </View>
        </View>
        <Drawer.Section style={styles.drawerSection}>
          <DrawerItem
            icon={({ color, size }) => (
              <Feather name="home" size={size} color={color} />
            )}
            label="Home"
            labelStyle={{fontFamily:fonts.mregular,fontSize:RFPercentage(2.6)}}
            onPress={() => {navigation.navigate("home")}}
          />
          <DrawerItem
            icon={({ color, size }) => (
                <AntDesign name="contacts" size={size} color={color} />
            )}
            label="Add Contact"
            labelStyle={{fontFamily:fonts.mregular,fontSize:RFPercentage(2.6)}}
            onPress={() => {navigation.navigate(ScreenNames.addcontact)}}
          />
          
        </Drawer.Section>
        <DrawerItem
            icon={({ color, size }) => (
                <MaterialIcons name="logout" size={size} color={color} />
                )}
            label="Logout"
            labelStyle={{fontFamily:fonts.mregular,fontSize:RFPercentage(2.6)}}
            onPress={() => {dispatch(logoutaction())}}
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
    backgroundColor:colors.lightpurple,
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