import React from 'react';
import {Text, View, Button} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {styles} from '../theme/appTheme';

interface Props extends StackScreenProps<any, any> {}

export const Pagina1Screen = ({navigation}: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text>Página 1</Text>
      <Button
        title="Ir a pagina 2"
        onPress={() => navigation.navigate('Pagina2Screen')}
      />
    </View>
  );
};
