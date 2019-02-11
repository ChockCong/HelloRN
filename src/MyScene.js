import React, { Component } from 'react';
import PropTypes from 'prop-types';   //注意新版后prop-types要这样引
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';

export default class MyScene extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    onForward: PropTypes.func.isRequired,
    onBack: PropTypes.func.isRequired,
  }
  render() {
    return (
      <View>
        <Text  style={styles.topStyle}>Current Scene: { this.props.title }</Text>
        <TouchableHighlight onPress={this.props.onForward}>
          <Text>点我进入下一场景</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.props.onBack}>
          <Text>点我返回上一场景</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  topStyle: {
    textAlign: 'center',
    color: 'blue',
    marginBottom: 5,
  }
});