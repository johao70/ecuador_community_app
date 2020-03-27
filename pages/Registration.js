import React, { Component } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { t } from 'react-native-tailwindcss';

export default class RegistrationScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    const logo = require("../assets/logo.png")
    return (
        <View style={[t.bgBlue600, t.relative, t.hFull, t.wFull]}>
            <View style={[t.itemsCenter, t.mT16]}>
                <Image style={[t.h64, t.w64]} source={ logo }/>
                <Text style={[t.textCenter, t.text4xl, t.fontBold, t.mT8]}>REGISTRARME</Text>
                <TextInput 
                    placeholder="* Correo Electrónico" 
                    placeholderTextColor="black"
                    style={[t.itemsCenter, t.border0, t.borderB2, t.w64, t.mT8]}
                />
                <TextInput 
                    placeholder="* Nombre" 
                    placeholderTextColor="black"
                    style={[t.itemsCenter, t.border0, t.borderB2, t.w64, t.mT8]}
                />
                <TextInput 
                    placeholder="* Apellido" 
                    placeholderTextColor="black"
                    style={[t.itemsCenter, t.border0, t.borderB2, t.w64, t.mT8]}
                />
                <TextInput 
                    placeholder="* Género" 
                    placeholderTextColor="black"
                    style={[t.itemsCenter, t.border0, t.borderB2, t.w64, t.mT8]}
                />
                <TextInput 
                    placeholder="* Contraseña"
                    placeholderTextColor="black"
                    secureTextEntry
                    style={[t.itemsCenter, t.border0, t.borderB2, t.w64, t.mT8]}
                />
                <View style={[t.flex, t.flexRow]}>
                    <TouchableOpacity style={[t.mT8, t.border, t.borderGreen800, t.bgGreen800, t.p2]} onPress={ () => this.props.history.push("")}>
                        <Text style={[t.fontBold, t.textWhite]}>REGISTRARME</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[t.mT8, t.mL8, t.border, t.borderRed800, t.bgRed800, t.p2]} onPress={ () => this.props.history.push("")}>
                        <Text style={[t.fontBold, t.textWhite]}>REGRESAR</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
  }
}
