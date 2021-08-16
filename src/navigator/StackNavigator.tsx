import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {Pagina1Screen} from '../screens/Pagina1Screen';
import {Pagina2Screen} from '../screens/Pagina2Screen';
import {Pagina3Screen} from '../screens/Pagina3Screen';
import {Pagina4Screen} from '../screens/Pagina4Screen';
import {PersonaScreen} from '../screens/PersonaScreen';

export type RootStackParams = {
  Pagina1Screen: undefined;
  Pagina2Screen: undefined;
  Pagina3Screen: undefined;
  Pagina4Screen: undefined;
  PersonaScreen: {id: number; nombre: string};
};

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Pagina1Screen"
      screenOptions={{
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
        },
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Stack.Screen
        name="Pagina1Screen"
        options={{title: 'Página 1'}}
        component={Pagina1Screen}
      />
      <Stack.Screen
        name="Pagina2Screen"
        options={{title: 'Página 2', headerBackTitle: 'Atras'}}
        component={Pagina2Screen}
      />
      <Stack.Screen
        name="Pagina3Screen"
        options={{title: 'Página 3', headerBackTitle: 'Atras'}}
        component={Pagina3Screen}
      />
      <Stack.Screen
        name="Pagina4Screen"
        options={{title: 'Página 4', headerBackTitle: 'Atras'}}
        component={Pagina4Screen}
      />
      <Stack.Screen
        name="PersonaScreen"
        options={{title: 'Persona Screen', headerBackTitle: 'Atras'}}
        component={PersonaScreen}
      />
    </Stack.Navigator>
  );
};
