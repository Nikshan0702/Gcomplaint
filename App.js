import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingScreen from './Screens/onboardingScreen';
import LoginScreen from './UserScreens/loginScreen';
import SignupScreen from './UserScreens/signupScreen';

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
        {/* Add other screens here */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}