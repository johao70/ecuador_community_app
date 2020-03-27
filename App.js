import React, { Component } from 'react';
import { View } from 'react-native';
import { NativeRouter, Switch, Route } from "react-router-native";

import LoginScreen from './pages/Login';
import RegistrationScreen from './pages/Registration';
import DashboardScreen from './pages/Dashboard';

export default class App extends Component {
  render() {
    return (
      <NativeRouter>
        <View>
          <Switch>
            <Route exact path="/" component={ LoginScreen } />
            <Route exact path="/registration" component={ RegistrationScreen } />
            <Route path="/home" component={ DashboardScreen } />
          </Switch>
        </View>
      </NativeRouter>
    )
  }
}
