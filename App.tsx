import 'react-native-gesture-handler';

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

// import {StackNavigator} from './src/navigator/StackNavigator';
// import {SideBarBasic} from './src/navigator/SideBarBasic';
import {SideBar} from './src/navigator/SideBar';

const App = () => {
  return (
    <NavigationContainer>
      <SideBar />
      {/* <SideBarBasic /> */}
      {/* <StackNavigator /> */}
    </NavigationContainer>
  );
};

export default App;
