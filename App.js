import React from 'react';
import { 
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0,
      name: 'Kasia'
    }
  }

  __changeResult = (toAdd) => {
    this.setState({ result: this.state.result + toAdd });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Text>{this.state.name}</Text>
        
        <Button
          onPress={() => this.__changeResult(1)}
          title="+"
          color="green"
          accessibilityLabel="Learn more about this purple button"
          style={styles.button}>
        </Button>
        <Text>Result: {this.state.result}</Text>
        <Button
          onPress={() => this.__changeResult(-1)}
          title="Minus"
          accessibilityLabel="Learn more about this purple button"
          style={styles.button}>
        </Button>
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
