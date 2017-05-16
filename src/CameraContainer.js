'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Image
} from 'react-native';
import randomColor from 'randomcolor';

class CameraContainer extends Component {
  state = {
    isTakingPictures: false
  }

  // componentDidMount = () => {
  //   console.log(this.props)
  // }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.className === nextProps.globalActiveCamera && this.state.isTakingPictures === false) {
      console.log(this.props.className, nextProps.globalActiveCamera)
      return true;
    } else if (this.props.className !== nextProps.globalActiveCamera && this.state.isTakingPictures === true) {
      return true;
    } else {
      return false;
    }
  }

  componentWillUpdate = () => {
    if (this.props.className !== this.props.globalActiveCamera && this.state.isTakingPictures === true) {
      this.setState({isTakingPictures: false})
    }
  }

  toggleCamera = () => {
    this.props.setCurrentCamera(this.props.className);
    this.setState({isTakingPictures: true})
  }

  render() {
    // const { isTakingPictures } = this.state;
    const { globalActiveCamera, className } = this.props;
    return (
      <TouchableHighlight
        onPress={this.toggleCamera}
        style={styles.cameraContainer}>
        <View style={styles.mediaContainer}>
          {globalActiveCamera === className ?
            this.props.masterCamera
          :
            // <Image
            //   style={{flex: 1}}
            //   source={require('./images/default.gif')}
            // />

            <View style={{flex: 1, backgroundColor: randomColor()}}></View>
          }
        </View>
      </TouchableHighlight>
    );
  }

  takePicture() {
    const options = {};
    //options.location = ...
    this.camera.capture({metadata: options})
      .then((data) => console.log(data))
      .catch(err => console.error(err));
  }
}

const styles = StyleSheet.create({
  cameraContainer: {
    flex: 1,
    overflow: 'hidden'
  },
  mediaContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  preview: {
    flex: 1,
    // justifyContent: 'flex-end',
    // alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  }
});


export default CameraContainer;
