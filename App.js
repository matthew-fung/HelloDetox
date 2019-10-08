import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput
} from 'react-native';

export default class example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      greeting: undefined,
      text: ''
    };
    const value = "placeholder"
  }
  render() {
    if (this.state.greeting) return this.renderAfterButton();
    return (
      <View testID='welcome' style={{ flex: 1, paddingTop: 20, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 25, marginBottom: 30 }}>
          Welcome
        </Text>
        <TouchableOpacity testID='hello_react' onPress={this.onButtonPress.bind(this, 'React')}>
          <Text style={{ color: 'blue', marginBottom: 20 }}>Say React</Text>
        </TouchableOpacity>
        <TouchableOpacity testID='detox_button' onPress={this.onButtonPress.bind(this, 'Detox')}>
          <Text style={{ color: 'blue', marginBottom: 20 }}>Say Detox</Text>
        </TouchableOpacity>
        <TextInput
          style={{ height: 40, width:100, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={text => this.setState({text})}
          value={this.value}
        />
      </View>
    );
  }
  renderAfterButton() {
    return (
      <View style={{ flex: 1, paddingTop: 20, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 25 }}>
          {this.state.greeting}!!!
        </Text>
      </View>
    );
  }
  onButtonPress(greeting) {
    this.setState({
      greeting: greeting
    });
  }
}