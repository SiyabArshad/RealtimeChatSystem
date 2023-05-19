import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import * as Font from "expo-font";
import { LogBox } from 'react-native';
//screen and components import
import Loading from './src/components/Loading';
import OnBoarding from "./src/screens/OnBoardingScreens/OnBoarding"
import SignupScreen from './src/screens/authScreens/Signup';
import SigninScreen from './src/screens/authScreens/SignIn';
import Inbox from './src/screens/chat/Inbox';
import ScreenNames from './src/helpers/routes';
import Drawer from './src/helpers/Drawer';
const Stack=createNativeStackNavigator()
//redux imports
//redux imports and others
import { Provider } from 'react-redux';
import store from './src/redux/store';
import { useSelector,useDispatch } from 'react-redux';
import {getCurrentuser } from './src/redux/auth/action';

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
    <Provider store={store}>
    <NavigationContainer >
     <Routes/>
   </NavigationContainer>
  </Provider>
  );
}

const Routes=()=>{
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const dispatch=useDispatch()
  const userinfo=useSelector(state=>state?.authReducer)
  const[loading,setloading]=React.useState(false)
  const gettinguserstate=async()=>{
    setloading(true)
      dispatch(getCurrentuser()).finally(()=>setloading(false))      
  }
  React.useEffect(() => {
    gettinguserstate()
  }, []);
  console.log("i am consoling from ",userinfo)
  if(loading)
  {
    return <Loading visible={true}/>
  }
  return(
<Stack.Navigator initialRouteName={ScreenNames.onBoarding} screenOptions={{headerShown:false}}>
     {
      userinfo?.isLoggedIn===false?
      <>
      <Stack.Screen name={ScreenNames.onBoarding} component={OnBoarding}/>
      <Stack.Screen name={ScreenNames.loginScreen} component={SigninScreen}/>
      <Stack.Screen name={ScreenNames.signupScreen} component={SignupScreen}/>
      </>
      :
     <>
      <Stack.Screen name={ScreenNames.contactsscreen} component={Drawer}/>
      <Stack.Screen name={ScreenNames.inbox} component={Inbox}/>
      </>
     }
      </Stack.Navigator>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



