import React from 'react';
import { 
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import MainView from './containers/MainView/MainView'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MainView />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: '100'
  }
});
