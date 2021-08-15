import React from 'react';
import {Text, View, Button} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {styles} from '../theme/appTheme';

interface Props extends StackScreenProps<any, any> {}

export const Pagina4Screen = ({navigation}: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text>Página 4</Text>
      <Button
        title="Regresar"
        onPress={() => navigation.pop()}
      />
    </View>
  );
};
