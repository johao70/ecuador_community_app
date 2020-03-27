import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { t } from 'react-native-tailwindcss';

export default class DashboardScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
        <View style={[t.bgBlue600, t.relative, t.hFull, t.wFull]}>
            <View style={[t.itemsCenter, t.mT8]}>
                <Text style={[t.textCenter, t.text4xl, t.fontBold, t.mT8]}>COMING SOON!</Text>
                <TouchableOpacity style={[t.mT8, t.border, t.borderRed800, t.bgRed800, t.p2]} onPress={ () => this.props.history.push("")}>
                    <Text style={[t.fontBold, t.textWhite]}>CERRAR SESIÓN</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
  }
}
