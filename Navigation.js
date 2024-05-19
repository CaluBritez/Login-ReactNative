// In App.js in a new project
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './pages/Login.js';
import HomeScreen from './pages/Home.js';

const Stack = createNativeStackNavigator();

function MyTabs() {
    return (
        <Stack.Navigator initialRouteName='Login'>
            <Stack.Screen 
            name="Login" 
            component={Login}
            options={{ headerShown: false }}
            />
            <Stack.Screen 
            name="Home"
            component={HomeScreen}
            options={{ headerBackTitleVisible: false }} 
            />
        </Stack.Navigator>
    )}

export default function Navigation() {
    return (
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    );
  }