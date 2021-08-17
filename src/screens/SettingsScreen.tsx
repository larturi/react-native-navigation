import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {styles} from '../theme/appTheme';

export const SettingsScreen = () => {
  const insets = useSafeAreaInsets();

  return (
    <View style={stylesSettings.container}>
      <View
        style={{
          ...styles.globalMargin,
          marginTop: insets.top,
        }}>
        <Text style={styles.title}>SettingsScreen</Text>
      </View>
    </View>
  );
};

const stylesSettings = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '100%',
  },
});
