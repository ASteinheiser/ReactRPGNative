import React, { Component } from 'react';
import { StatusBar, View }  from 'react-native';
import SplashScreen         from 'react-native-splash-screen';
import { WebView }          from 'react-native-webview';

export default class App extends Component {

  componentWillMount() {
    // show splash screen for 1.5 sec
    setTimeout(() => SplashScreen.hide(), 1500);
  }

  render() {
    return (
      <View style={{height: '100%'}}>
        <StatusBar hidden />

        <WebView source={{uri: 'http://react-rpg.com'}} />
      </View>
    );
  }
}