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

const initialState = {
  displayValue : '0',
  clearDisplay: false,
  operation: null,
  values: [0,0],
  current: 0,
}

export default class App extends Component {
  state ={...initialState}

  addDigit = n =>{
    if (n ==='.' && this.state.displayValue.includes('.')){
      return
    }
    if(this.state.displayValue.length == 11){
      return
    }
    const clearDisplay=this.state.displayValue==='0'||this.state.clearDisplay;
    const currentValue = clearDisplay?'':this.state.displayValue;
    const displayValue=currentValue+n
    this.setState({displayValue,clearDisplay:false})
    if(n!=='.'){
      const newValue=parseFloat(displayValue)
      const values=[...this.state.values]
      values[this.state.current]=newValue
      this.setState({values})
    }
  }

  clearMemory = () => {
    this.setState({...initialState})
  }

  setOperation = () => {

  }

  render(){
    return (
      <SafeAreaView style={styles.container}>
        <Display value={this.state.displayValue}></Display>
        <View style={styles.buttons}>
          <Button label="AC" triple onClick={this.clearMemory} />
          <Button label="/" operation onClick={this.setOperation} />
          <Button label="7"  onClick={this.addDigit} />
          <Button label="8"  onClick={this.addDigit}/>
          <Button label="9"  onClick={this.addDigit}/>
          <Button label="*" operation   onClick={this.setOperation}/>
          <Button label="4"  onClick={this.addDigit}/>
          <Button label="5"  onClick={this.addDigit}/>
          <Button label="6"  onClick={this.addDigit}/>
          <Button label="-" operation  onClick={this.setOperation}/>
          <Button label="1"  onClick={this.addDigit}/>
          <Button label="2"  onClick={this.addDigit}/>
          <Button label="3"  onClick={this.addDigit}/>
          <Button label="+" operation  onClick={this.setOperation}/>
          <Button label="0"   onClick={this.addDigit}/>
          <Button label="."  onClick={this.addDigit}/>
          <Button label="=" operation  onClick={this.setOperation}/>
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

