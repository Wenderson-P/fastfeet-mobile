import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import SignIn from './pages/SignIn';
import Delivery from './pages/Delivery';
import Profile from './pages/Profile'

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

export default function createRouter(isSigned = false) {
  return !isSigned ? (
    <>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Login" component={SignIn} />
      </Stack.Navigator>
    </>
  ) : (
      <Tabs.Navigator

      >
        <Tabs.Screen name="Delivery" component={Delivery} />
        <Tabs.Screen name="Profile" component={Profile} />

      </Tabs.Navigator>
    )
}
