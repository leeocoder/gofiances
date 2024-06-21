import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from '../screens/Dashboard';
import Register from '../screens/Register';
import { theme } from '../global/styles/theme';
import { Feather } from '@expo/vector-icons';

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: theme.colors.secondary,
        tabBarActiveBackgroundColor: theme.colors.shape,
        tabBarInactiveTintColor: theme.colors.text,
        tabBarLabelPosition: 'beside-icon',
        tabBarStyle: {
          // borderRadius: 20,
          overflow: 'hidden',
          // position: 'absolute',
          // bottom: 10,
          // left: 20,
          // right: 20,
          backgroundColor: 'white',
          height: 60,
        },
        tabBarLabelStyle: {
          marginLeft: 16,
        },
      })}
    >
      <Screen
        // name='Listagem'
        name='Listagem'
        component={Dashboard}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather
              name='list'
              size={20}
              color={color}
            />
          ),
        }}
      />
      <Screen
        name='Cadastrar'
        component={Register}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather
              name='dollar-sign'
              size={20}
              color={color}
            />
          ),
        }}
      />
      <Screen
        name='Resumo'
        component={Register}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather
              name='pie-chart'
              size={20}
              color={color}
            />
          ),
        }}
      />
    </Navigator>
  );
}
