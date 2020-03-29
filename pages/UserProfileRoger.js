import React, { Component } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { t } from 'react-native-tailwindcss';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import Header from './components/Header';
import Footer from './components/Footer';

export default class UserProfileRogerScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  render() {
    const profilepic = require("../assets/pic1.png")
    const example1 = require("../assets/2.jpg")
    const example2 = require("../assets/1.jpeg")
    return (
      <View style={[t.relative, t.hFull, t.wFull]}>
        <Header />
        <ScrollView vertical={true}>
          <View style={[t.flex, t.itemsCenter, t.hFull, t.flexWrap, t.mX2, t.mY0, t.pY4]}>
            <View style={[t.wFull, t.shadow2xl, t.roundedLg, t.bgWhite, t.opacity75]}>
              <View style={[t.p4, t.itemsCenter]}>
                <Image style={[t.roundedFull, t.mXAuto, t.mT8, t.h48, t.w48]} source={ profilepic } />
                <Text style={[t.text3xl, t.fontBold, t.pT2]}>Roger Cedeño</Text>
                <View style={[t.mXAuto, t.itemsCenter]}>
                  <View style={[t.pT4, t.textBase, t.fontBold, t.flex, t.flexRow,t.itemsCenter, t.justifyCenter]}>
                    <IconIonicons name="ios-briefcase" style={[t.text2xl, t.mR2]} />
                    <Text>Basketball Player</Text>
                  </View>
                  <View style={[t.pT2, t.textGray600, t.textXs, t.flex, t.flexRow, t.itemsCenter, t.justifyCenter]}>
                    <IconIonicons name="md-globe" style={[t.text2xl, t.mR2]} />
                    <Text>Guayaquil, Ecuador</Text>
                  </View>
                  <Text style={[t.pT2, t.textXl, t.textJustify]}>
                    Basketball Player at Zucaritas Team
                  </Text>
                </View>
              </View>

              <View style={[t.p2, t.itemsCenter]}>
                <View style={[t.flex, t.flexRow, t.borderB2, t.borderT2, t.borderBlue700, t.wFull, t.justifyBetween, t.p2]}>
                  <TouchableOpacity style={[t.border2, t.borderBlue700, t.p2]} onPress={ () => this.props.history.push("userprofileRoger")}>
                    <Text style={[t.textBlue900, t.fontBold]}>Publicaciones</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[t.border2, t.borderBlue700, t.p2]} onPress={ () => this.props.history.push("userprofileRoger2")}>
                    <Text style={[t.textBlue900, t.fontBold]}>Fotos</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[t.border2, t.borderBlue700, t.p2]}>
                    <Text style={[t.textBlue900, t.fontBold]}>Menciones</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={[t.rounded, t.overflowHidden, t.shadowLg, t.mY, t.pY4, t.pX4]}>
                <Image style={[t.h64, t.wAuto, t.pX6, t.pY4]} source={ example2 } />
                <View style={[t.pX6, t.pY2]}>
                  <View style={[t.fontBold, t.textXl, t.mB2]}>
                    <Text style={[t.textGray600, t.textBase, t.text2xl, t.fontBold]}>Iglesia de San Blas</Text>
                    <Text style={[t.textGray600, t.textBase]}>
                      Remodelación de la Iglesia de San Blas, sector Centro Norte de la ciudad de Quito.
                    </Text>
                  </View>
                </View>
              </View>
              <View style={[t.rounded, t.overflowHidden, t.shadowLg, t.mY, t.pY4, t.pX4]}>
                <Image style={[t.h64, t.wAuto, t.pX6, t.pY4]} source={ example1 } />
                <View style={[t.pX6, t.pY2]}>
                  <View style={[t.fontBold, t.textXl, t.mB2]}>
                    <Text style={[t.textGray600, t.textBase, t.text2xl, t.fontBold]}>Covid-19</Text>
                    <Text style={[t.textGray600, t.textBase]}>
                      Si presentas fiebre, tos o dificultad para respirar, reportatelo en los medios oficiales.
                    </Text>
                  </View>
                </View>
              </View>

            </View>
          </View>
        </ScrollView>
        <Footer />
      </View>
    );
  }
}
