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
// import ForgotPasswordScreen from './src/screens/authScreens/ForgotPassword';
// import Profile from './src/screens/ProfileScreens/Profile';
// import EditProfile from './src/screens/ProfileScreens/EditProfile';
// import ChangePassword from './src/screens/ProfileScreens/ChangePassword';
// //imports of trade partner particular
// import CompanyOffers from './src/screens/TradePartnerScreens/CompanyOffers';
// import OfferDetails from './src/screens/TradePartnerScreens/OfferDetails';
// import BidBoard from './src/screens/TradePartnerScreens/BidBoard';
// import BidDetails from './src/screens/TradePartnerScreens/BidDetails';
// import PlaceBid from './src/screens/TradePartnerScreens/PlaceBid';
// //end of trade partner
// //imports for team members
// import ScheduleAppointment from './src/screens/TeamMemberScreens/ScheduleAppointment';
// import UpdateAppointment from './src/screens/TeamMemberScreens/UpdateAppointment';
// import AppointmentDetails from './src/screens/TeamMemberScreens/AppointmentDetails';
// import Appointments from './src/screens/TeamMemberScreens/Appointments';
// import MessagesTm from './src/screens/TeamMemberScreens/MessagesTm';
// import InboxTm from './src/screens/TeamMemberScreens/InboxTm';
// import GroupRequests from './src/screens/TeamMemberScreens/GroupRequests';
// //end of team member
// //home owner imports
// import ReferProject from './src/screens/HomeOwnerScreens/ReferProject';
// import MessageOwner from './src/screens/HomeOwnerScreens/MessageOwner';
// import Projects from './src/screens/HomeOwnerScreens/Projects';
// import ProjectDetails from './src/screens/HomeOwnerScreens/ProjectDetails';
// import SharePhoto from './src/screens/HomeOwnerScreens/SharePhoto';
// import CreateGroup from './src/screens/HomeOwnerScreens/CreateGroup';
// import EditGroup from './src/screens/HomeOwnerScreens/EditGroup';
// import GroupDetails from './src/screens/HomeOwnerScreens/GroupDetails';
// import InviteMember from './src/screens/HomeOwnerScreens/InviteMember';
// //end of home owner imports
// //other imports
// import Routing from './src/Routing/Routing';
// import { Provider as PaperProvider } from 'react-native-paper';
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
<SignupScreen/>
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



