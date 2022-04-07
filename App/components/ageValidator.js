import React, { Component } from "react";
import {StyleSheet, TouchableOpacity, Text, View, Image, TextInput,Alert} from "react-native";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textValue: '',
      count: 0,
    };
  }

  changeTextInput = (text) => {
    if (text>=18) {
      this.setState({ textValue: text + " Eres mayor de edad" });
    }else{
      this.setState({ textValue: text + "Eres menor de edad" });
    }
  };

  render(){
    return (
      <View style={styles.container}>
        <View style={styles.countContainer}>
          <View style={styles.text}>
            <Text style={styles.titulo}>Ingresa tu Edad</Text>
          </View>
          <TextInput
          style={styles.inputext}
          onChangeText={(text) => this.changeTextInput(text)}
          placeholder="Ingresa tu edad"
          keyboardType="numeric"
          />
          <View style={styles.text}>
            <Text></Text>
            <Text style={styles.titulo}>{this.state.textValue}</Text>
          </View>
        </View>
      </View>
    );
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    paddingHorizontal: 10,
  },
  text:{
     alignItems: 'center',
     padding: 10,
  },
  titulo:{
    fontSize:30,
  },
  inputext:{
    height:40,
    borderColor:'gray',
    borderWidth:1,
  },
});

