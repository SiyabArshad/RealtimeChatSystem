import { View, Text,Modal,TouchableOpacity,Pressable,Image,StyleSheet } from 'react-native'
import React from 'react'
import colors from '../../helpers/colors'
import Iconicons from "react-native-vector-icons/Ionicons"
import Icon2 from "react-native-vector-icons/Foundation"
import SubTitle from '../Typography/Subtitle'
import Feather from "react-native-vector-icons/Feather"
import { RFPercentage as rp, RFValue as rf } from "react-native-responsive-fontsize";
import ImageViewer2 from 'react-native-image-zoom-viewer';

  const images = [
//     {
//     // Simplest usage.
//     url: 'https://avatars2.githubusercontent.com/u/7970947?v=3&s=460',
 
//     // width: number
//     // height: number
//     // Optional, if you know the image size, you can set the optimization performance
 
//     // You can pass props to <Image />.
//     props: {
//         // headers: ...
//     }
// }
 {
    url: '',
    props: {
        // Or you can set source directory.
        source: require('../../../assets/images/dummyimage.png')
    }
}
]
export default function ImageViewer({visible,closemdoal}) {
  return (
<Modal visible={visible} transparent={true}>
<View style={{flex:1,backgroundColor:"rgba(0,0,0,1)"}}>
       <View style={{marginTop:rp(4)}}>
       <TouchableOpacity onPress={closemdoal}>
            <Feather name="chevron-left" size={28} color={colors.white} />
            </TouchableOpacity>
       </View>
       <ImageViewer2 imageUrls={images}/>
</View>

</Modal>
  )
}