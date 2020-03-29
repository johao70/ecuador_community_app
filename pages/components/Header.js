import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { t } from 'react-native-tailwindcss';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import { withRouter } from 'react-router-native';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <View style={[t.h16, t.wFull, t.bgBlue600, t.pB2, t.justifyCenter]}>
        <View style={[t.flex, t.flexRow, t.justifyBetween, t.mT6]}>
          <TouchableOpacity style={[t.mL4]} onPress={ () => this.props.history.push("home") }>
            <IconFontAwesome name="home" style={[t.text4xl]} />
          </TouchableOpacity>
          <TouchableOpacity style={[t.mR4]} onPress={ () => this.props.history.push("") }>
            <IconIonicons name="ios-log-out" style={[t.text4xl]} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default withRouter(Header);
