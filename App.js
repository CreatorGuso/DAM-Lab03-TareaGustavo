
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
  render(){
    return (
      <View style={styles.container}>
        <View style={styles.countContainer}>
          <View style={styles.text}>
              <View>
                <Text style={styles.contenido}>Hola, para ver el contenido pega el codigo de cada tarea en la carpeta APP/components</Text>
              </View>
          </View>
        </View>
      </View>
    );
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  text:{
     alignItems: 'center',
     padding: 10,
  },
  contenido:{
    fontSize:20,
  }
});

