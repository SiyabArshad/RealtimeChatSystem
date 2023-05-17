import { View, Text,Modal,TouchableOpacity,Pressable,Image,StyleSheet } from 'react-native'
import React from 'react'
import colors from '../../helpers/colors'
import Iconicons from "react-native-vector-icons/Ionicons"
import Icon2 from "react-native-vector-icons/Foundation"
import SubTitle from '../Typography/Subtitle'
import Feather from "react-native-vector-icons/Feather"
import { RFPercentage as rp, RFValue as rf } from "react-native-responsive-fontsize";
export default function UploadModal({show,closemodal}) {
  return (
    <Modal transparent visible={show}>
    <View style={{flex:1,backgroundColor:"rgba(255,255,255,.5)"}}>
       <View style={{marginTop:rp(4)}}>
       <TouchableOpacity onPress={closemodal} style={{height:35,width:35,borderRadius:17.5,display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"rgba(0,0,0,0.7)",marginLeft:rp(2)}}>
            <Feather name="chevron-left" size={28} color={colors.white} />
            </TouchableOpacity>
       </View>
        <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
            <View style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
                <View style={{display:"flex",alignItems:"center",justifyContent:"center",marginRight:rp(3)}}>
                    <Pressable style={{height:50,width:50,borderRadius:25,backgroundColor:colors.brown,display:"flex",justifyContent:"center",alignItems:"center"}}>
                    <Iconicons name="camera-outline" size={30} color={colors.white} />
                    </Pressable>
                    <SubTitle text={"Take Photo"} style={{fontSize:rp(2.2),marginTop:rp(1)}} size='m'/>
                </View>
                <View style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                    <Pressable style={{height:50,width:50,borderRadius:25,backgroundColor:colors.brown,display:"flex",justifyContent:"center",alignItems:"center"}}>
                    <Iconicons name="camera-outline" size={30} color={colors.white} />
                    </Pressable>
                    <SubTitle text={"Upload Photo"} style={{fontSize:rp(2.2),marginTop:rp(1)}} size='m'/>
                </View>
            </View>
        </View>
    </View>
    </Modal>
 )
}