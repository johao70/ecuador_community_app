import React, { Component } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { t } from 'react-native-tailwindcss';
import Header from './components/Header';
import Footer from './components/Footer';
import IconIonicons from 'react-native-vector-icons/Ionicons';

export default class Chat1Screen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  render() {
    const pic1 = require("../assets/pic1.png")
    const pic2 = require("../assets/pic2.jpg")
    const pic3 = require("../assets/pic3.jpg")
    return (
      <View style={[t.relative, t.hFull, t.wFull]}>
        <Header />
        <View style={[t.pT2, t.mXAuto, t.textGray600, t.mX8]}>
            <TextInput
                style={[t.border2, t.borderGray300, t.bgWhite, t.h10, t.pX5, t.pR16, t.roundedLg, t.textSm]}
                keyboardType="web-search"
                placeholder="Search Friend"
            />
            <TouchableOpacity style={[t.absolute, t.right0, t.top0, t.mT5, t.mR4]}>
                <IconIonicons name="ios-search" style={[t.textGray600, t.h4, t.w4]} />
            </TouchableOpacity>
        </View>


        <ScrollView vertical={true}>
            <View style={[t.pT2, t.mXAuto, t.mX4, t.pY4, t.mY4]}>
                <TouchableOpacity onPress={ () => this.props.history.push("chat2")}>
                    <View style={[t.flex, t.flexRow, t.itemsCenter, t.mB4]}>
                        <Image style={[t.w10, t.h10, t.roundedFull, t.mR4]} source={ pic1 } />
                        <View style={[t.textSm]}>
                            <Text style={[t.textBlack]}>Roger Cedeño</Text>
                            <View style={[t.flex, t.flexRow]}>
                                <Text style={[t.textBlack]}>De nada vecino nos vemos mañana</Text>
                                <Text style={[t.mL4, t.roundedFull, t.bgGreen300, t.fontBold, t.pX2]}>1</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={[t.flex, t.flexRow, t.itemsCenter, t.mB4]}>
                        <Image style={[t.w10, t.h10, t.roundedFull, t.mR4]} source={ pic2 } />
                        <View style={[t.textSm]}>
                            <Text style={[t.textBlack]}>Santiago Salazar</Text>
                            <Text style={[t.textBlack]}>Wanna play?</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={[t.flex, t.flexRow, t.itemsCenter, t.mB4]}>
                        <Image style={[t.w10, t.h10, t.roundedFull, t.mR4]} source={ pic3 } />
                        <View style={[t.textSm]}>
                            <Text style={[t.textBlack]}>Susana Lipton</Text>
                            <View style={[t.flex, t.flexRow]}>
                                <Text style={[t.textBlack]}>I love you too :3</Text>
                                {/* <Text style={[t.mL4, t.roundedFull, t.bgGreen300, t.fontBold, t.pX2]}>1</Text> */}
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        </ScrollView>
        <Footer />
      </View>
    );
  }
}
