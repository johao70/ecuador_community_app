import React, { Component } from 'react';
import { View, TouchableOpacity, ScrollView } from 'react-native';
import { t } from 'react-native-tailwindcss';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import { withRouter } from 'react-router-native';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
        <View style={[t.h12, t.wFull, t.bgBlue600, t.pB2, t.justifyCenter]}>
            <ScrollView vertical={true}>
              <View style={[t.flex, t.flexRow, t.mT2, t.justifyBetween]}>
                <TouchableOpacity style={[t.mL4]} onPress={ () => this.props.history.push("") }>
                  <IconFontAwesome name="user-circle-o" style={[t.text4xl]} />
                </TouchableOpacity>
                <TouchableOpacity onPress={ () => this.props.history.push("chat1") }>
                  <IconIonicons name="ios-chatboxes" style={[t.text4xl]} />
                </TouchableOpacity>
                <TouchableOpacity style={[t.mR4]} onPress={ () => this.props.history.push("") }>
                  <IconFontAwesome name="gear" style={[t.text4xl]} />
                </TouchableOpacity>
              </View>
            </ScrollView>
        </View>
    );
  }
}

export default withRouter(Footer);
