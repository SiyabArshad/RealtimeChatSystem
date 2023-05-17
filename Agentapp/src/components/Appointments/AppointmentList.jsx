import { View, Text,Pressable,ActivityIndicator,ScrollView, Dimensions } from 'react-native'
import React from 'react'
import colors from '../../helpers/colors'
import fonts from '../../helpers/fonts'
import ButtonText from '../Typography/ButtonText'
import { RFPercentage as rp, RFValue as rf } from "react-native-responsive-fontsize";
import CaptionText from '../Typography/CaptionText'
import SubTitle from '../Typography/Subtitle'
import EvilIcons from "react-native-vector-icons/EvilIcons"
import ScreenNames from '../../helpers/routes'
export default function AppointmentList({navigation}) {
  return (
    <View style={{flex:1,marginHorizontal:rp(2),marginVertical:rp(2)}}>
      <ScrollView showsVerticalScrollIndicator={false}>
            {
                appts.map((item,i)=>(
            <Pressable key={i} onPress={()=>navigation.navigate(ScreenNames.TmAppointmentDetails)} style={{flex:1,display:"flex",flexDirection:"row",justifyContent:"space-between",width:"100%",marginBottom:rp(3)}}>
            <View style={{display:"flex",alignItems:"center"}}>
                <CaptionText style={{fontSize:rp(2.5)}} text={item.time} color={colors.lightblack}/>
                <View style={{width:2,borderRadius:rp(1),height:"100%",backgroundColor:colors.lightgrey}}/>
            </View>
            <View style={{marginLeft:rp(2),width:"80%"}}>
                    {/* card */}
                    {
                        item.apps.map((item2,j)=>(
                            <View style={{marginBottom:rp(2),paddingHorizontal:rp(1.5),paddingVertical:rp(1),display:"flex",flexDirection:"row",alignItems:"center",backgroundColor:colors.lightgrey,width:"100%",borderRadius:rp(1),marginTop:rp(.5)}}>
                                <View style={{height:rp(3),borderRadius:rp(1),marginRight:rp(1),width:4,backgroundColor:colors.brown}}></View>
                        <View>
                                <SubTitle  style={{fontSize:rp(2.4)}} text={item2.name} size='m'/>
                                <View style={{marginVertical:rp(1),display:"flex",flexDirection:"row",alignItems:"center"}}>
                                <EvilIcons name="location" size={24} color="black" />
                                    <CaptionText text={item2.location}/>
                                </View>
                        </View>
                    </View>
                        ))
                    }
{/* end card */}
            </View>
        </Pressable>
                ))
            }
      </ScrollView>
    </View>
  )
}


const appts=[
    {
        time:"9 AM",
        apps:[
            {
                name:"Risk Management Discussion",
                location:"Room OS Building XYZ",
            },
            {
                name:"Risk Management Discussion",
                location:"Room OS Building XYZ",
            }
        ]
    },
    {
        time:"10 AM",
        apps:[
            {
                name:"Risk Management Discussion",
                location:"Room OS Building XYZ",
            }
           ]
    },
    {
        time:"11 AM",
        apps:[
            {
                name:"Risk Management Discussion",
                location:"Room OS Building XYZ",
            },
            {
                name:"Risk Management Discussion",
                location:"Room OS Building XYZ",
            },
            {
                name:"Risk Management Discussion",
                location:"Room OS Building XYZ",
            }
        ]
    }
    ,
    {
        time:"12 AM",
        apps:[
            {
                name:"Risk Management Discussion",
                location:"Room OS Building XYZ",
            },
            {
                name:"Risk Management Discussion",
                location:"Room OS Building XYZ",
            },
            {
                name:"Risk Management Discussion",
                location:"Room OS Building XYZ",
            }
        ]
    }
]