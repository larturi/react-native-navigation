import 'react-native-gesture-handler';

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

// import {StackNavigator} from './src/navigator/StackNavigator';
// import {SideBarBasic} from './src/navigator/SideBarBasic';
import {SideBar} from './src/navigator/SideBar';
// import {Tabs} from './src/navigator/Tabs';

const App = () => {
  return (
    <NavigationContainer>
      <SideBar />
      {/* <SideBarBasic /> */}
      {/* <StackNavigator /> */}
      {/* <Tabs /> */}
    </NavigationContainer>
  );
};

export default App;
