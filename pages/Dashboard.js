import React, { Component } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { t } from 'react-native-tailwindcss';
import Header from './components/Header';
import Footer from './components/Footer';

export default class DashboardScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  render() {
    const example1 = require("../assets/2.jpg")
    const example2 = require("../assets/1.jpeg")
    return (
      <View style={[t.relative, t.hFull, t.wFull]}>
        <Header />
        <ScrollView vertical={true}>
          <View style={[t.itemsCenter]}>
            <Text style={[t.textXl, t.fontBold, t.mL4, t.mT2]}>Barrio: San Blas (Quito, Ecuador)</Text>
            <View style={[t.rounded, t.overflowHidden, t.shadowLg, t.mY, t.pY4, t.pX4]}>
              <Image style={[t.h64, t.wAuto, t.pX6, t.pY4]} source={ example1 } />
              <View style={[t.pX6, t.pY2]}>
                <View style={[t.fontBold, t.textXl, t.mB2]}>
                  <Text style={[t.textGray600, t.textBase, t.text2xl, t.fontBold]}>Título</Text>
                  <Text style={[t.textGray600, t.textBase]}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                  </Text>
                </View>
              </View>
            </View>
            <View style={[t.rounded, t.overflowHidden, t.shadowLg, t.mY, t.pY4, t.pX4]}>
              <Image style={[t.h64, t.wAuto, t.pX6, t.pY4]} source={ example2 } />
              <View style={[t.pX6, t.pY2]}>
                <View style={[t.fontBold, t.textXl, t.mB2]}>
                  <Text style={[t.textGray600, t.textBase, t.text2xl, t.fontBold]}>Título</Text>
                  <Text style={[t.textGray600, t.textBase]}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                  </Text>
                </View>
              </View>
            </View>
            <View style={[t.rounded, t.overflowHidden, t.shadowLg, t.mY, t.pY4, t.pX4]}>
              <Image style={[t.h64, t.wAuto, t.pX6, t.pY4]} source={ example1 } />
              <View style={[t.pX6, t.pY2]}>
                <View style={[t.fontBold, t.textXl, t.mB2]}>
                  <Text style={[t.textGray600, t.textBase, t.text2xl, t.fontBold]}>Título</Text>
                  <Text style={[t.textGray600, t.textBase]}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                  </Text>
                </View>
              </View>
            </View>
            <View style={[t.rounded, t.overflowHidden, t.shadowLg, t.mY, t.pY4, t.pX4]}>
              <Image style={[t.h64, t.wAuto, t.pX6, t.pY4]} source={ example2 } />
              <View style={[t.pX6, t.pY2]}>
                <View style={[t.fontBold, t.textXl, t.mB2]}>
                  <Text style={[t.textGray600, t.textBase, t.text2xl, t.fontBold]}>Título</Text>
                  <Text style={[t.textGray600, t.textBase]}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                  </Text>
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
