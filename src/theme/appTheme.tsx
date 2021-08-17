import {StyleSheet} from 'react-native';

export const colores = {
  primary: '#5856D6',
};

export const styles = StyleSheet.create({
  globalMargin: {
    marginHorizontal: 10,
  },
  title: {
    fontSize: 30,
    marginBottom: 10,
  },
  botonGrande: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    marginTop: 10,
  },
  botonGrandeTexto: {
    color: 'white',
    fontSize: 20,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 100,
    backgroundColor: 'gray',
  },
  avatarContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  menuContainer: {
    marginVertical: 40,
    marginHorizontal: 40,
  },
  menuButton: {
    marginVertical: 10,
  },
  menuText: {
    fontSize: 22,
  },
});
