import React, { Component } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { t } from 'react-native-tailwindcss';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';

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
                <View style={[t.flex, t.flexRow, t.itemsCenter, t.border0, t.borderB2, t.w64, t.mT8]}>
                    <IconIonicons name="ios-chatboxes" style={[t.textXl]} />
                    <TextInput 
                    placeholder="Correo Electrónico"
                    placeholderTextColor="black"
                    keyboardType="email-address"
                    style={[t.mL2]}
                />
                </View>
                <View style={[t.flex, t.flexRow, t.itemsCenter, t.border0, t.borderB2, t.w64, t.mT8]}>
                    <IconMaterialCommunityIcons name="textbox-password" style={[t.textXl]} />
                    <TextInput 
                        placeholder="Contraseña"
                        placeholderTextColor="black"
                        secureTextEntry
                        style={[t.mL2]}
                    />
                </View>
                <View style={[t.flex, t.flexRow]}>
                    <TouchableOpacity style={[t.flex, t.flexRow, t.mT8, t.border, t.borderBlue700, t.bgBlue600, t.p2]} onPress={ () => this.props.history.push("home")}>
                        <IconFontAwesome name="sign-in" style={[t.textXl, t.textWhite]} />
                        <Text style={[t.fontBold, t.mL2, t.textWhite]}>INGRESAR</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[t.flex, t.flexRow, t.mT8, t.mL8, t.border, t.borderGray700, t.bgGray600, t.p2]} onPress={ () => this.props.history.push("registration")}>
                        <IconFontAwesome name="user-circle-o" style={[t.textXl, t.textWhite]} />
                        <Text style={[t.fontBold, t.textWhite, t.mL2]}>CREAR CUENTA</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
  }
}
