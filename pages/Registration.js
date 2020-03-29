import React, { Component } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { t } from 'react-native-tailwindcss';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';

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
                <View style={[t.flex, t.flexRow, t.itemsCenter, t.border0, t.borderB2, t.w64, t.mT8]}>
                    <IconIonicons name="ios-chatboxes" style={[t.textXl]} />
                    <TextInput 
                    placeholder="* Correo Electrónico" 
                    placeholderTextColor="black"
                    keyboardType="email-address"
                    style={[t.mL2]}
                />
                </View>
                <View style={[t.flex, t.flexRow, t.itemsCenter, t.border0, t.borderB2, t.w64, t.mT8]}>
                    <IconFontAwesome name="user" style={[t.textXl]} />
                    <TextInput 
                    placeholder="* Nombre" 
                    placeholderTextColor="black"
                    style={[t.mL2]}
                />
                </View>
                <View style={[t.flex, t.flexRow, t.itemsCenter, t.border0, t.borderB2, t.w64, t.mT8]}>
                    <IconFontAwesome name="user" style={[t.textXl]} />
                    <TextInput 
                    placeholder="* Apellido" 
                    placeholderTextColor="black"
                    style={[t.mL2]}
                />
                </View>
                <View style={[t.flex, t.flexRow, t.itemsCenter, t.border0, t.borderB2, t.w64, t.mT8]}>
                    <IconFontAwesome name="intersex" style={[t.textXl]} />
                    <TextInput 
                    placeholder="* Género" 
                    placeholderTextColor="black"
                    style={[t.mL2]}
                />
                </View>
                <View style={[t.flex, t.flexRow, t.itemsCenter, t.border0, t.borderB2, t.w64, t.mT8]}>
                    <IconMaterialCommunityIcons name="textbox-password" style={[t.textXl]} />
                    <TextInput 
                        placeholder="* Contraseña"
                        placeholderTextColor="black"
                        secureTextEntry
                        style={[t.mL2]}
                    />
                </View>
                <View style={[t.flex, t.flexRow]}>
                <TouchableOpacity style={[t.flex, t.flexRow, t.mT8, t.border, t.borderGreen700, t.bgGreen600, t.p2]} onPress={ () => this.props.history.push("")}>
                        <IconFontAwesome name="plus" style={[t.textXl, t.textWhite]} />
                        <Text style={[t.fontBold, t.mL2, t.textWhite]}>REGISTRARME</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[t.flex, t.flexRow, t.mT8, t.mL8, t.border, t.borderRed700, t.bgRed600, t.p2]} onPress={ () => this.props.history.push("")}>
                        <IconIonicons name="ios-backspace" style={[t.textXl, t.textWhite]} />
                        <Text style={[t.fontBold, t.textWhite, t.mL2]}>REGRESAR</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
  }
}
