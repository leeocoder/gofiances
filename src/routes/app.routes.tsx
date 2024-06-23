import React from 'react';
import { Platform, KeyboardAvoidingView, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from '../screens/Dashboard';
import Register from '../screens/Register';
import { theme } from '../global/styles/theme';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { BottomTabNavigatorParams } from '../global/enums/navigation.type';

const { Navigator, Screen } =
  createBottomTabNavigator<BottomTabNavigatorParams>();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: theme.colors.secondary,
        tabBarActiveBackgroundColor: 'transparent',
        tabBarInactiveTintColor: theme.colors.text,
        tabBarHideOnKeyboard: true,
        tabBarLabelPosition: 'below-icon',
        tabBarStyle: {
          justifyContent: 'center',
          height: 65,
        },
        tabBarIconStyle: {
          marginBottom: RFValue(12),
        },
        tabBarLabelStyle: {
          fontSize: RFValue(10),
          fontFamily: theme.fonts.medium,
          marginTop: -20,
          marginBottom: 7,
        },
      })}
    >
      <Screen
        name='List'
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
        name='Register'
        component={Register}
        options={{
          tabBarLabelStyle: {
            color: theme.colors.text,
            alignItems: 'center',
            justifyContent: 'center',
            bottom: 6,
            fontSize: RFValue(10),
            position: 'absolute',
          },
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                color: focused ? theme.colors.secondary : theme.colors.text,
                alignItems: 'center',
                justifyContent: 'center',
                bottom: 2,
                fontFamily: theme.fonts.medium,
                fontSize: RFValue(10),
                position: 'absolute',
              }}
            >
              Cadastrar
            </Text>
          ),
          tabBarActiveTintColor: '#000',
          tabBarIconStyle: {
            position: 'absolute',
            top: -20,
            width: 60,
            height: 60,
            borderRadius: 30,
            backgroundColor: theme.colors.secondary,
            justifyContent: 'center',
            alignItems: 'center',
          },
          tabBarIcon: ({ color }) => (
            <Feather
              name='dollar-sign'
              size={20}
              color={theme.colors.shape}
            />
          ),
        }}
      />
      <Screen
        name='Overview'
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
