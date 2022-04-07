
import React, { Component } from "react";
import {StyleSheet, TouchableOpacity, Text, View, Image, TextInput,Alert} from "react-native";
const usuarios =[
  {
    id:1,
    name:'Usuario1',
    descripcion:"Primer contacto",
    img:"https://randomuser.me//api//portraits//women//26.jpg",
  },
  {
    id:2,
    name:'Usuario2',
    descripcion:"Segundo contacto",
    img:"https://randomuser.me//api//portraits//women//26.jpg",
  },
  {
    id:3,
    name:'Usuario3',
    descripcion:"Tercer contacto",
    img:"https://randomuser.me//api//portraits//women//26.jpg",
  },
  {
    id:4,
    name:'Usuario4',
    descripcion:"Cuarto contacto",
    img:"https://randomuser.me//api//portraits//women//26.jpg",
  },
  {
    id:5,
    name:'Usuario5',
    descripcion:"Quinto contacto",
    img:"https://randomuser.me//api//portraits//women//26.jpg",
  },
];
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
            {usuarios.map((item) => (
              <View>
                <Text style={styles.usuario}>{item.name}</Text>
                <Text> </Text>
                <Text style={styles.descripcion}>{item.descripcion}</Text>
                <Image style={styles.imagen} source={{uri:item.img}}/>
              </View>
            ))}
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
    position:'absolute',
     alignItems: 'center',
     padding: 10,
  },
  descripcion:{
    left:100,
    top:0,
  },
  imagen:{
    width:60, 
    height:60,
    borderRadius:30,
    top:-30,
  },
  usuario:{
    fontSize:20,
  }
});

