'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import CameraContainer from './src/CameraContainer';

class nine extends Component {
  state = {
    items: [0,1,2],
    globalActiveCamera: ""
  }

  setCurrentCamera = (name) => {
    this.setState({globalActiveCamera: name})
  }
  render() {
    {console.log(this.state.globalActiveCamera)}
    const createRow = this.state.items.map((i, key) => {
      return (
        <View style={styles.row} key={key}>
          {this.state.items.map((i, keys) => {
            const thisClassName = "cam" + (key + 1) + (keys + 1) + ""
            return (
              <View style={styles.mediaBox} key={keys}>
                <CameraContainer
                  globalActiveCamera={this.state.globalActiveCamera}
                  className={thisClassName}
                  setCurrentCamera={this.setCurrentCamera}/>
              </View>
            )
          })}
        </View>
      )
    });
    return (
      <View style={styles.container}>
        {createRow}
        <View style={{flex: 0, backgroundColor: "red"}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  row: {
    flex: 1,
    flexDirection: 'row'
  },
  mediaBox: {
    flex: 1,
    borderWidth: 1
  }
});


AppRegistry.registerComponent('nine', () => nine);
