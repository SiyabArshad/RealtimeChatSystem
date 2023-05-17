import { View, Text,Modal,TouchableOpacity,Pressable,StyleSheet,ImageBackground,ScrollView,ActivityIndicator, Dimensions} from 'react-native'
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
import { Avatar,Image } from 'react-native-elements'
import AppHeader from '../../components/AppHeader'
import ScreenHeader from "../../components/ScreenHeader"
import OutlinedTextInput from '../../components/Inputs/OutlinedTextInput'
import DateInput from '../../components/Inputs/DateInput'
import TimeInput from '../../components/Inputs/TimeInput'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import formatDate from '../../helpers/dateFormat'
import formatTime from '../../helpers/formatTime'
import { Divider } from 'react-native-paper'
import EvilIcons from "react-native-vector-icons/EvilIcons"
import UploadModal from '../../components/Photos/UploadModal'
import Member from '../../components/Members/Member'
import ImageViewer from '../../components/Photos/ImageViewer'
import ScreenNames from '../../helpers/routes'
export default function GroupDetails({navigation,route}) {
    const[tab,settab]=React.useState(0)

    const[uploadOpen,setuploadOpen]=React.useState(false)
    const[iamgeviewwerOpen,setiamgeviewwerOpen]=React.useState(false)
    const uploadclose=()=>{
        setuploadOpen(false)
    }
    const uploadopenfunc=()=>{
        setuploadOpen(true)
    }
    const openimv=()=>{
      setiamgeviewwerOpen(true)
  }
  const closeimv=()=>{
      setiamgeviewwerOpen(false)
  }
  return (
    <Screen>
      <ImageViewer visible={iamgeviewwerOpen} closemdoal={closeimv}/>
        <UploadModal closemodal={uploadclose} show={uploadOpen}/>
    <ScreenHeader backfunc={()=>navigation.pop()} screenname='Group XYZ'>        
       <TouchableOpacity onPress={()=>navigation.navigate(ScreenNames.HmEditGroup)}>
            <FeatherIcon color={colors.lightblack} size={24} name='edit'/>
       </TouchableOpacity>
    </ScreenHeader>
    <View style={{marginTop:rp(2),marginBottom:rp(2),display:"flex",flexDirection:"row",alignItems:"center",marginHorizontal:rp(2)}}>
                
                <Pressable onPress={()=>settab(0)} style={{paddingVertical:rp(1.2),paddingHorizontal:rp(1.5),borderRadius:rp(.7),backgroundColor:tab===0?colors.lightbrown:colors.lightgrey,marginRight:rp(1.3)}}>
                     <BodyText text={"Photos(42)"} color={tab===0?colors.darkBrown:colors.lightblack}/>
                 </Pressable>
                 <Pressable onPress={()=>settab(1)} style={{paddingVertical:rp(1.2),paddingHorizontal:rp(1.5),borderRadius:rp(.7),backgroundColor:tab===1?colors.lightbrown:colors.lightgrey,marginRight:rp(1.3)}}>
                     <BodyText text={"Members(23)"} color={tab===1?colors.darkBrown:colors.lightblack}/>
                 </Pressable>
    </View>
    <ScrollView showsVerticalScrollIndicator={false}>
    {
        tab===0&&<View style={{display:"flex",flexDirection:"row",flexWrap:"wrap",flex:1,paddingBottom:rp(5)}}>
         {
            [1,2,,3,4,5,65,7,8,9,9,3].map((item,i)=>{
                return(
                    <Image
                    key={i}
                    onPress={openimv}
                    source={require("../../../assets/images/dummyimage.png")}
                    style={{ width: Dimensions.get("screen").width/3.2, height: 150,marginRight:rp(1),marginBottom:rp(1) }}
                    PlaceholderContent={<ActivityIndicator />}
                  />
                )
            })
         }
        </View>
    }
    {
                tab===1&&<View  style={{marginHorizontal:rp(2),paddingBottom:rp(5)}}>
                    {
                        [1,2,3,4,5,1,23,4,56,7,7].map((item,i)=>(
                            <Member key={i}/>
                        ))
}
                </View>
               }
    </ScrollView>
  {
    tab===0&&  <TouchableOpacity onPress={uploadopenfunc} style={{backgroundColor:colors.brown,position:"absolute",width:60,height:60,borderRadius:30,display:"flex",alignItems:"center",justifyContent:"center",bottom:20,right:10}}>
    <EvilIcons name="image" size={32} color={colors.white} />
    </TouchableOpacity>
  }
  {
    tab===1&&  <TouchableOpacity  onPress={()=>navigation.navigate(ScreenNames.HmInviteMember)} style={{backgroundColor:colors.brown,position:"absolute",width:60,height:60,borderRadius:30,display:"flex",alignItems:"center",justifyContent:"center",bottom:20,right:10}}>
    <FeatherIcon name="user-plus" size={24} color={colors.white}/>
    </TouchableOpacity>
  }
  
    </Screen>
  )
}