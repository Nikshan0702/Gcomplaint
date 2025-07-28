import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingScreen from './Screens/onboardingScreen';
import LoginScreen from './UserScreens/loginScreen';
import SignupScreen from './UserScreens/signupScreen';
import ProfileScreen from './UserScreens/ProfileScreen';
import Complaint from './Complaints/Complaint';
import Home from './Screens/Home';
// import OTPScreen from './VerifyScreens/OTPScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Onboarding"
        screenOptions={{ 
          headerShown: false,
          animation: 'slide_from_right' 
        }}
      >
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Complaint" component={Complaint} />
        <Stack.Screen name="Home" component={Home} />
        {/* <Stack.Screen name="OTPScreen" component={OTPScreen} /> */}
        {/* Add other screens here */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}