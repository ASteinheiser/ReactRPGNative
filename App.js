import React, { Component } from 'react';
import { StatusBar, View }  from 'react-native';
import CookieManager        from 'react-native-cookies';
import SplashScreen         from 'react-native-splash-screen';
import { WebView }          from 'react-native-webview';

const GAME_URL = 'http://react-rpg.com';

export default class App extends Component {

  componentWillMount() {
    // clear the cookies on mount to refresh the webview
    CookieManager.clearAll().then(console.log).catch(console.error);
    // show splash screen for 1.5 sec
    setTimeout(() => SplashScreen.hide(), 1500);
  }

  render() {
    return (
      <View style={{height: '100%'}}>
        <StatusBar hidden />

        <WebView source={{uri: GAME_URL}} />
      </View>
    );
  }
}