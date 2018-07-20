import React from 'react';
import { 
  StyleSheet,
  Text,
  View,
  Button,
  Modal,
  TouchableHighlight
} from 'react-native';

import ColorsBoard from '../../components/ColorsBoard/ColorsBoard'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0,
      maxResult: 0,
      wantedColor: this.__getRandomColor(),

      name: 'L',
      modalVisible: false
    }
  }

  __getRandomColor() {
    const colorsTab =  ['red', 'blue', 'black', 'yellow', 'green', 'grey', 'orange', 'pink'];
    return colorsTab[Math.floor(Math.random()*colorsTab.length)]
  }

  __changeResult = (toAdd) => {
    this.setState({ result: this.state.result + toAdd });
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  __onClickSingleColor = (color) => {
    if (color === this.state.wantedColor) {
      this.setState({
        result: this.state.result + 1,
        wantedColor: this.__getRandomColor()
      })
    } else {
      this.__endGame();
    }
  }

  __endGame() {
    this.setState({
      maxResult: this.state.result > this.state.maxResult ? this.state.result : this.state.maxResult,
      result: 0
    })
  }

  __renderWantedColor() {
    return (
      <View>
        <Text>{this.state.wantedColor}</Text>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Result: {this.state.result}</Text>
        <Text>Max result: {this.state.maxResult}</Text>
        {this.__renderWantedColor()}
        <ColorsBoard onClickSingleColor={(color) => this.__onClickSingleColor(color)}/>

        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}>
          <Text>Show Modal</Text>
        </TouchableHighlight>

        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            alert('Modal has been closed .');
          }}>
          <View style={{marginTop: 22}}>
            <View>
              <Text>Hello World!</Text>

              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text>Hide Modal jjjjjjj</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

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
