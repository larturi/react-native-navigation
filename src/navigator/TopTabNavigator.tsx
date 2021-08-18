/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {TopTabChatScreen} from '../screens/TopTabChatScreen';
import {TopTabContactsScreen} from '../screens/TopTabContactsScreen';
import {TopTabAlbumsScreen} from '../screens/TopTabAlbumsScreen';
import {colores} from '../theme/appTheme';
import { Text } from 'react-native';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => {
          let iconName: string = '';
          switch (route.name) {
            case 'Chat':
              iconName = 'Ch';
              break;

            case 'Contacts':
              iconName = 'Co';
              break;

            case 'Albums':
              iconName = 'Al';
              break;

            default:
              break;
          }
          return <Text style={{color}}>{iconName}</Text>;
        },
        tabBarActiveTintColor: colores.primary,
        tabBarStyle: {
          borderTopColor: colores.primary,
          borderTopWidth: 0,
          elevation: 0,
          shadowColor: 'white',
        },
        tabBarIndicatorStyle: {
          backgroundColor: colores.primary,
        },
      })}>
      <Tab.Screen name="Chat" component={TopTabChatScreen} />
      <Tab.Screen name="Contacts" component={TopTabContactsScreen} />
      <Tab.Screen name="Albums" component={TopTabAlbumsScreen} />
    </Tab.Navigator>
  );
};
