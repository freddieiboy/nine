import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Camera from 'react-native-camera';

class MainCamera extends Component {

  takePicture() {
    const options = {};
    //options.location = ...
    this.camera.capture({metadata: options})
      .then((data) => console.log(data))
      .catch(err => console.error(err));
  }

  render() {
    return (
      <View style={styles.MainCamera}>
        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          style={styles.preview}
          type={"front"}
          aspect={Camera.constants.Aspect.fill}>
          {/* <Text style={styles.capture} onPress={this.takePicture.bind(this)}>[CAPTURE]</Text> */}
        </Camera>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  MainCamera: {
    flex: 1
  }
});


export default MainCamera;
