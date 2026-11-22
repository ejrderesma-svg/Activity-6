import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { AppProvider } from './context/AppContext';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <AppProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#2563eb'
            },
            headerTintColor: '#fff',
            tabBarActiveTintColor: '#2563eb',
            tabBarInactiveTintColor: 'gray'
          }}
        >
          <Tab.Screen
            name="Home"
            component={HomeScreen}
          />

          <Tab.Screen
            name="Settings"
            component={SettingsScreen}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
}
