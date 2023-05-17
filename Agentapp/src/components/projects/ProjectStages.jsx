import { View, Text,Modal,TouchableOpacity,Pressable,Image,StyleSheet,ImageBackground,ScrollView,TextInput } from 'react-native'
import React from 'react'
import colors from "../../helpers/colors"
import SubTitleText from "../Typography/Subtitle"
import CaptionText from "../Typography/CaptionText"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import { RFPercentage as rp, RFValue as rf } from "react-native-responsive-fontsize";
import { LinearProgress } from 'react-native-elements'
import { Divider,Badge, ProgressBar, MD3Colors,Avatar} from 'react-native-paper'
import AntDesign from "react-native-vector-icons/AntDesign"
import Heading from '../Typography/Heading'

export default function ProjectStages() {
  return (
    <View>
      <CaptionText style={{marginBottom:rp(1),fontSize:rp(2.6)}} text={"Stages"}/>
      <View>
        {/* stage of project */}
        <View style={{display:"flex",flexDirection:"row",height:110,overflow:"hidden"
        }}>
        <View style={{display:"flex",alignItems:"center",width:"20%"}}>
                <View style={{height:30,width:30,borderRadius:15,backgroundColor:colors.lightgreen2,display:"flex",alignItems:"center",justifyContent:"center"}}>
                <MaterialIcons name="done" size={20} color={colors.white} />
                </View>
                <View style={{width:3,borderRadius:rp(1),height:"100%",backgroundColor:colors.lightgreen2}}/>
        </View>
        <View style={{marginLeft:rp(2),marginTop:rp(1)}}>
            <SubTitleText text={"Planning"} color={colors.lightblack} style={{fontSize:rp(2.7),marginBottom:rp(1)}}/>
            <CaptionText text={"Completed"} color={colors.vlightblack} />
        </View>
        </View>
        {/* end */}
            {/* stage of project */}
            <View style={{display:"flex",flexDirection:"row",height:110,overflow:"hidden"
        }}>
        <View style={{display:"flex",alignItems:"center",width:"20%"}}>
                <View style={{height:30,width:30,borderRadius:15,backgroundColor:colors.lightgreen2,display:"flex",alignItems:"center",justifyContent:"center"}}>
                <MaterialIcons name="done" size={20} color={colors.white} />
                </View>
                <View style={{width:3,borderRadius:rp(1),height:"100%",backgroundColor:colors.lightgreen2}}/>
        </View>
        <View style={{marginLeft:rp(2),marginTop:rp(1)}}>
            <SubTitleText text={"Aquisition"} color={colors.lightblack} style={{fontSize:rp(2.7),marginBottom:rp(1)}}/>
            <CaptionText text={"Completed"} color={colors.vlightblack} />
        </View>
        </View>
        {/* end */}
             {/* stage of project */}
        <View style={{display:"flex",flexDirection:"row",height:110,overflow:"hidden"}}>
        <View style={{display:"flex",alignItems:"center",width:"20%"}}>
                <View style={{height:50,width:50,borderRadius:25,backgroundColor:colors.white,display:"flex",alignItems:"center",justifyContent:"center",borderWidth:5,borderColor:colors.lightgreen2}}>
                        <SubTitleText text={"25 %"} color={colors.green} style={{fontSize:rp(1.6)}}/>
                    
                </View>
                <View style={{width:3,borderRadius:rp(1),height:"100%",backgroundColor:colors.lightgreen2}}/>
        </View>
        <View style={{marginLeft:rp(2),marginTop:rp(1)}}>
            <SubTitleText text={"Construction"} color={colors.lightblack} style={{fontSize:rp(2.7),marginBottom:rp(1)}}/>
            <CaptionText text={"In Progress"} color={colors.green} />
        </View>
        </View>
        {/* end */}
    {/* stage of project */}
        <View style={{display:"flex",flexDirection:"row",height:110,overflow:"hidden"
        }}>
        <View style={{display:"flex",alignItems:"center",width:"20%"}}>
        <View style={{height:30,width:30,borderRadius:15,backgroundColor:colors.grey,display:"flex",alignItems:"center",justifyContent:"center"}}>
        <MaterialIcons name="done" size={20} color={colors.white} />
        </View>

        </View>
        <View style={{marginLeft:rp(2),marginTop:rp(1)}}>
            <SubTitleText text={"Review"} color={colors.lightblack} style={{fontSize:rp(2.7),marginBottom:rp(1)}}/>
            <CaptionText text={"Awaiting"} color={colors.vlightblack} />
        </View>
        </View>
        {/* end */}
        
      </View>
    </View>
  )
}