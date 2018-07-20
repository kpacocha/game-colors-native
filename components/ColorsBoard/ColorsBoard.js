import React from 'react';
import { 
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import config from '../../config'

export default class ColorsBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0,
      name: 'Kasia',
      wantedColor: 'yellow'
    }
  }

  __onClickColor = (color) => {
    this.setState({ wantedColor: color });
  }

  __renderSingleColor(color) {
      return (
        <Button
          key={`color${color}`}
          onPress={()=>this.props.onClickSingleColor(color)}
          title={color}
          color={color}
          accessibilityLabel={`Button for color ${color}`}
          style={styles.singleColorButton}
          >
        </Button>
      );
  }

  __renderColorBoard() {
    // const colorsTab =  ['red', 'blue', 'black', 'yellow', 'green', 'grey', 'orange', 'pink'];
    return (
      <View style={styles.colorBoard}>
        {this.props.colorsTab.map(color => this.__renderSingleColor(color))}
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {this.__renderColorBoard()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 300
  },
  colorBoard: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    backgroundColor: '#fff'
  },
  singleColorButton: {
    width: 50,
    height: 50
  },
  wantedColor: {
    width: '100'
  }
});
