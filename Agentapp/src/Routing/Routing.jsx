import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Loading from '../components/Loading';
import { BottomTabBarProps, BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs'
const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator();
import ScreenNames from '../helpers/routes';
//screens import
//general screens
import RolesScreen from '../screens/OnBoardingScreens/RolesScreen';
import OnBoarding from "../screens/OnBoardingScreens/OnBoarding"
import SignupScreen from '../screens/authScreens/Signup';
import SigninScreen from '../screens/authScreens/SignIn';
import ForgotPasswordScreen from '../screens/authScreens/ForgotPassword';
import Profile from '../screens/ProfileScreens/Profile';
import EditProfile from '../screens/ProfileScreens/EditProfile';
import ChangePassword from '../screens/ProfileScreens/ChangePassword';
//imports of trade partner particular
import CompanyOffers from '../screens/TradePartnerScreens/CompanyOffers';
import OfferDetails from '../screens/TradePartnerScreens/OfferDetails';
import TPBidBoard from '../screens/TradePartnerScreens/BidBoard';
import TPBidDetails from '../screens/TradePartnerScreens/BidDetails';
import PlaceBid from '../screens/TradePartnerScreens/PlaceBid';
//imports for team members
import ScheduleAppointment from '../screens/TeamMemberScreens/ScheduleAppointment';
import UpdateAppointment from '../screens/TeamMemberScreens/UpdateAppointment';
import AppointmentDetails from '../screens/TeamMemberScreens/AppointmentDetails';
import Appointments from '../screens/TeamMemberScreens/Appointments';
import MessagesTm from '../screens/TeamMemberScreens/MessagesTm';
import InboxTm from '../screens/TeamMemberScreens/InboxTm';
import GroupRequests from '../screens/TeamMemberScreens/GroupRequests';
import TmBidBoard from "../screens/TeamMemberScreens/BidBoardTM"
import TmBidDetail from "../screens/TeamMemberScreens/BidDetailsTM"
//home owner imports
import ReferProject from '../screens/HomeOwnerScreens/ReferProject';
import MessageOwner from '../screens/HomeOwnerScreens/MessageOwner';
import InboxOwner from "../screens/HomeOwnerScreens/InboxOwner"
import Projects from '../screens/HomeOwnerScreens/Projects';
import ProjectDetails from '../screens/HomeOwnerScreens/ProjectDetails';
import SharePhoto from '../screens/HomeOwnerScreens/SharePhoto';
import CreateGroup from '../screens/HomeOwnerScreens/CreateGroup';
import EditGroup from '../screens/HomeOwnerScreens/EditGroup';
import GroupDetails from '../screens/HomeOwnerScreens/GroupDetails';
import InviteMember from '../screens/HomeOwnerScreens/InviteMember';
//emd screen imports

import HmDrawer from './HmDrawer';
import TpDrawer from './TpDrawer';
import TmDrawer from './TmDrawer';
//end bottom tabs
export default function Routing() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName={ScreenNames.onBoarding} screenOptions={{headerShown:false}}>
            <Stack.Screen name={ScreenNames.onBoarding} component={OnBoarding}/>
            <Stack.Screen name={ScreenNames.rolesScreen} component={RolesScreen}/>
            <Stack.Screen name={ScreenNames.loginScreen} component={SigninScreen}/>
            <Stack.Screen name={ScreenNames.signupScreen} component={SignupScreen}/>
            <Stack.Screen name={ScreenNames.forgotScreen} component={ForgotPasswordScreen}/>
            <Stack.Screen name={ScreenNames.editProfile} component={EditProfile}/>
            <Stack.Screen name={ScreenNames.changePassword} component={ChangePassword}/>
            <Stack.Screen name={ScreenNames.TpOfferDetails} component={OfferDetails}/>
            <Stack.Screen name={ScreenNames.TPBidBoardDetails} component={TPBidDetails}/>
            <Stack.Screen name={ScreenNames.TpPlaceBid} component={PlaceBid}/>
            <Stack.Screen name={ScreenNames.TmScheduleAppointments} component={ScheduleAppointment}/>
            <Stack.Screen name={ScreenNames.TmUpdateAppointments} component={UpdateAppointment}/>
            <Stack.Screen name={ScreenNames.TmAppointmentDetails} component={AppointmentDetails}/>
            <Stack.Screen name={ScreenNames.TmBidBoardDetails} component={TmBidDetail}/>
            <Stack.Screen name={ScreenNames.TmInbox} component={InboxTm}/>
            <Stack.Screen name={ScreenNames.TmGroupRequests} component={GroupRequests}/>
            <Stack.Screen name={ScreenNames.HmProjectDetails} component={ProjectDetails}/>
            <Stack.Screen name={ScreenNames.HmReferProject} component={ReferProject}/>
            <Stack.Screen name={ScreenNames.HmCreateGroup} component={CreateGroup}/>
            <Stack.Screen name={ScreenNames.HmInbox} component={InboxOwner}/>
            <Stack.Screen name={ScreenNames.HmEditGroup} component={EditGroup}/>
            <Stack.Screen name={ScreenNames.HmGroupDetails} component={GroupDetails}/>
            <Stack.Screen name={ScreenNames.HmInviteMember} component={InviteMember}/>
            <Stack.Screen name={ScreenNames.Hmbottomtab} component={HmDrawer}/>
            <Stack.Screen name={ScreenNames.Tmbottomtab} component={TmDrawer}/>
            <Stack.Screen name={ScreenNames.Tpbottomtab} component={TpDrawer}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}