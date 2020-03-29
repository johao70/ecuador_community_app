import React, { Component } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { t } from 'react-native-tailwindcss';
import Header from './components/Header';
import Footer from './components/Footer';
import IconIonicons from 'react-native-vector-icons/Ionicons';

export default class Chat2Screen extends Component {
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

        <TouchableOpacity style={[t.pT2, t.mXAuto, t.mX8]}>
            <View style={[t.flex, t.flexRow, t.itemsCenter, t.mB4]}>
                <Image style={[t.w16, t.h16, t.roundedFull, t.mR4]} source={ pic1 } />
                <View style={[t.textLg]}>
                    <Text style={[t.textBlack, t.text2xl]}>Roger Cedeño</Text>
                    <View style={[t.flex, t.flexRow]}>
                        <Text style={[t.roundedFull, t.bgGreen300, t.fontBold, t.pX2]}></Text>
                        <Text style={[t.textBlack, t.mL2]}>En línea</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>

        <ScrollView vertical={true}>
            <View style={[t.mX2, t.hFull]}>
                <View style={[t.bgGray200, t.borderL4, t.borderBlack, t.textBlack, t.p2, t.mB1]}>
                    <Text style={[t.mL1, t.fontBold]}>Mañana es el día</Text>
                </View>
                <View style={[t.bgGray200, t.borderL4, t.borderBlack, t.textBlack, t.p2, t.mB1]}>
                    <Text style={[t.mL1, t.fontBold]}>A primera hora los preparativos para 
                    la minga del barrio, no olvides poner la alarma y avisar a los vecinos de tu casa</Text>
                </View>
                <View style={[t.bgGray200, t.borderL4, t.borderBlack, t.textBlack, t.p2, t.mB1]}>
                    <Text style={[t.mL1, t.fontBold]}>:D :3</Text>
                </View>
                <View style={[t.bgGray200, t.borderL4, t.borderBlack, t.textBlack, t.p2, t.mB1]}>
                    <Text style={[t.mL1, t.fontBold]}>Los requisitos que necesitan los vecinos</Text>
                </View>
                <View style={[t.bgGray200, t.borderL4, t.borderBlack, t.textBlack, t.p2, t.mB1]}>
                    <Text style={[t.mL1, t.fontBold]}>guantes, mascarilla, agua, gorra</Text>
                </View>
                <View style={[t.bgGray200, t.borderL4, t.borderBlack, t.textBlack, t.p2, t.mB1]}>
                    <Text style={[t.mL1, t.fontBold]}>y da preguntando si alguno tiene una pala y fundas de basura para almacenar alli toda la basura</Text>
                </View>
                <View style={[t.bgGray200, t.borderL4, t.borderBlack, t.textBlack, t.p2, t.mB1]}>
                    <Text style={[t.mL1, t.fontBold]}>gracias!!!!</Text>
                </View>
                {/* response */}
                <View style={[t.bgBlue200, t.borderR4, t.borderBlue500, t.textBlack, t.p2, t.mB1]}>
                    <Text style={[t.mR1, t.fontBold, t.textRight]}>Que tal vecino!</Text>
                </View>
                <View style={[t.bgBlue200, t.borderR4, t.borderBlue500, t.textBlack, t.p2, t.mB1]}>
                    <Text style={[t.mR1, t.fontBold, t.textRight]}>En este momento les comunico a los vecinos</Text>
                </View>
                <View style={[t.bgBlue200, t.borderR4, t.borderBlue500, t.textBlack, t.p2, t.mB1]}>
                    <Text style={[t.mR1, t.fontBold, t.textRight]}>Y muchas gracias por la información</Text>
                </View>
                <View style={[t.bgBlue200, t.borderR4, t.borderBlue500, t.textBlack, t.p2, t.mB1]}>
                    <Text style={[t.mR1, t.fontBold, t.textRight]}>Nos vemos mañana, bonita noche.</Text>
                </View>
                {/* new msm */}
                <View style={[t.bgGreen200, t.borderL4, t.borderGreen500, t.textBlack, t.p2, t.mB1]}>
                    <Text style={[t.mL1, t.fontBold]}>De nada vecino nos vemos mañana</Text>
                </View>
            </View>
        </ScrollView>

        <View style={[t.pT1, t.mX2, t.mB2]}>
            <TextInput style={[t.border2, t.borderGray700, t.bgWhite, t.h12, t.pX5, t.pR16, t.mR12,t.roundedLg]} />
            <TouchableOpacity style={[t.absolute, t.right0, t.mT3, t.mR4]}>
                <IconIonicons name="md-send" style={[t.textGreen600, t.text2xl]} />
            </TouchableOpacity>
        </View>

        <Footer />
      </View>
    );
  }
}
