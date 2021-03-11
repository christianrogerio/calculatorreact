/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import Button from './src/components/Button'
import Display from './src/components/Display'

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export default class App extends Component {
  state ={
    displayValue:'0'
  }

  addDigit = n =>{
    this.setState({displayValue: n})
  }

  clearMemory = () => {
    this.setState({displayValue:0})
  }

  setOperation = () => {

  }

  render(){
    return (
      <SafeAreaView style={styles.container}>
        <Display value={this.state.displayValue}></Display>
        <View style={styles.buttons}>
          <Button label="AC" triple onClick={this.clearMemory} />
          <Button label="/" operation onClick={this.addDigit} />
          <Button label="7"  onClick={this.addDigit} />
          <Button label="8"  onClick={this.addDigit}/>
          <Button label="9"  onClick={this.addDigit}/>
          <Button label="*" operation   onClick={this.addDigit}/>
          <Button label="4"  onClick={this.addDigit}/>
          <Button label="5"  onClick={this.addDigit}/>
          <Button label="6"  onClick={this.addDigit}/>
          <Button label="-" operation  onClick={this.addDigit}/>
          <Button label="1"  onClick={this.addDigit}/>
          <Button label="2"  onClick={this.addDigit}/>
          <Button label="3"  onClick={this.addDigit}/>
          <Button label="+" operation  onClick={this.addDigit}/>
          <Button label="0"   onClick={this.addDigit}/>
          <Button label="."  onClick={this.addDigit}/>
          <Button label="=" operation  onClick={this.addDigit}/>
        </View>
      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  buttons:{
    flexDirection: 'row',
    flexWrap:'wrap',
  }
});

