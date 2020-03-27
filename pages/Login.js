import React, { Component } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { t } from 'react-native-tailwindcss';

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    const logo = require("../assets/logo.png")
    return (
        <View style={[t.bgYellow600, t.relative, t.hFull, t.wFull]}>
            <View style={[t.itemsCenter, t.mT16]}>
                <Image style={[t.h64, t.w64]} source={ logo }/>
                <Text style={[t.textCenter, t.text4xl, t.fontBold, t.mT8]}>INICIAR SESIÓN</Text>
                <TextInput 
                    placeholder="Correo Electrónico"
                    placeholderTextColor="black"
                    keyboardType="email-address"
                    style={[t.itemsCenter, t.border0, t.borderB2, t.w64, t.mT8]}
                />
                <TextInput 
                    placeholder="Contraseña"
                    placeholderTextColor="black"
                    secureTextEntry
                    style={[t.itemsCenter, t.border0, t.borderB2, t.w64, t.mT8]}
                />
                <View style={[t.flex, t.flexRow]}>
                    <TouchableOpacity style={[t.mT8, t.border, t.borderBlue700, t.bgBlue600, t.p2]} onPress={ () => this.props.history.push("home")}>
                        <Text style={[t.fontBold, t.textWhite]}>INGRESAR</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[t.mT8, t.mL8, t.border, t.borderGray700, t.bgGray600, t.p2]} onPress={ () => this.props.history.push("registration")}>
                        <Text style={[t.fontBold, t.textWhite]}>CREAR CUENTA</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
  }
}
