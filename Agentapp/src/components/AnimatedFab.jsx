import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Icon, FAB } from 'react-native-elements';
import { MaterialIcons } from '@expo/vector-icons';
import colors from '../helpers/colors';
import ScreenNames from '../helpers/routes';
const FabComponent = ({navigation}) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleFAB = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <View style={styles.container}>
        <FAB
          icon={<Icon name={isOpen ? 'close' : 'add'} color="white" />}
          placement="right"
          color="#2196F3"
          onPress={toggleFAB}
        />
  
        {isOpen && (
          <View style={styles.popup}>
            <Icon
            size={30}
              name="settings"
              color={colors.white}
              onPress={() =>navigation.navigate(ScreenNames.setting)}
            />
            <View style={{marginTop:10}}>
            <Icon
            size={30}
              name="add"
              color={colors.white}
              onPress={() =>navigation.navigate(ScreenNames.addcontact)}
            />
                </View>
          </View>
        )}
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      
      position: 'relative',
    },
    popup: {
      position: 'absolute',
      bottom: 90,
      right: 20,
      flexDirection: "column",
      backgroundColor: '#2196F3',
      paddingHorizontal: 10,
      paddingVertical:15,
      borderRadius: 5,
      elevation: 4,
    },
  });
  
  export default FabComponent;
  