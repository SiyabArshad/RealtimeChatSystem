import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import * as Font from "expo-font";
import { LogBox } from 'react-native';
//screen and components import
import Loading from './src/components/Loading';
import OnBoarding from "./src/screens/OnBoardingScreens/OnBoarding"
 import SignupScreen from './src/screens/authScreens/Signup';
 import SigninScreen from './src/screens/authScreens/SignIn';
 import Inbox from './src/screens/chat/Inbox';
import Messages from './src/screens/chat/Messages';
export default function App() {
  LogBox.ignoreAllLogs()
  const [fontsLoaded, error] = Font.useFonts({
    'Montserrat-Black': require('./assets/fonts/Montserrat-Black.ttf'),
    'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.ttf'),
    'Montserrat-ExtraBold': require('./assets/fonts/Montserrat-ExtraBold.ttf'),
    'Montserrat-Italic': require('./assets/fonts/Montserrat-Italic.ttf'),
    'Montserrat-Light': require('./assets/fonts/Montserrat-Light.ttf'),
    'Montserrat-Medium': require('./assets/fonts/Montserrat-Medium.ttf'),
    'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.ttf'),
    'Montserrat-SemiBold': require('./assets/fonts/Montserrat-SemiBold.ttf'),
    'Montserrat-Thin': require('./assets/fonts/Montserrat-Thin.ttf'),
  });
  if(!fontsLoaded)
  {
    return <Loading visible={true}/>
  }
  return (
<Inbox/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



