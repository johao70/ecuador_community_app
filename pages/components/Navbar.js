import React, { Component } from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import { t } from 'react-native-tailwindcss';
import MenuDrawer from 'react-native-side-drawer'
import Icon from 'react-native-vector-icons/FontAwesome';
import { withRouter } from 'react-router-native';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
  }

  toggleOpen = () => {
    this.setState({ open: !this.state.open });
  };
 
  sidebar = () => {
    const user_pic = require("../../assets/userpic.png")
    return (
      <View style={[t.bgYellow600, t.hFull, t.mT16]}>
        <TouchableOpacity onPress={this.toggleOpen}>
          <Icon name="times" style={[t.text4xl, t.textRed600, t.absolute, t.right0, t.p2]} />
        </TouchableOpacity>

        <View style={[t.itemsCenter, t.mT8]}>
          <Image style={[t.h32, t.w32, t.pX6, t.pY4]} source={ user_pic } />
          <Text style={[t.textXl, t.fontBold]}>Johao Perlaza</Text>
          <View style={[t.w56, t.mT4, t.flex, t.flexCol]}>
            <TouchableOpacity style={[t.border2, t.p2]}>
              <Text>Inicio</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[t.border2, t.p2, t.mT2]}>
              <Text>Chat</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[t.border2, t.p2, t.mT2, t.justifyEnd]}>
              <Text>Configuraciones</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  render() {
    return (
        <View style={[t.h16, t.wFull, t.bgBlue600, t.pB2]}>
          <MenuDrawer 
            open={this.state.open} 
            drawerContent={this.sidebar()}
            drawerPercentage={50}
            animationTime={750}
            overlay={true}
            opacity={0.8}
          >
            <View style={[t.flex, t.flexRow, t.justifyBetween, t.mT4]}>
              <TouchableOpacity style={[t.mL4]} onPress={this.toggleOpen}>
                <Icon name="barcode" style={[t.text4xl]} />
              </TouchableOpacity>
              <TouchableOpacity style={[t.mR4]} onPress={ () => this.props.history.push("") }>
                <Icon name="times" style={[t.text4xl, t.textRed600]} />
              </TouchableOpacity>
            </View>
          </MenuDrawer>
        </View>
    );
  }
}

export default withRouter(Navbar);
