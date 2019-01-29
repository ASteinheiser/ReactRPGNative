import React, { Component } from 'react';
import { StatusBar, View }  from 'react-native';
import CookieManager        from 'react-native-cookies';
import SplashScreen         from 'react-native-splash-screen';
import { WebView }          from 'react-native-webview';

const GAME_URL = 'http://react-rpg.com?nativeApp=true';

export default class App extends Component {

  componentWillMount() {
    // clear the cookies on mount to refresh the webview
    CookieManager.clearAll().then(console.log).catch(console.error);
  }

  handleLoad(e) {
    const { progress } = e.nativeEvent;

    if(progress === 1) {
      // show splash screen for 0.5 sec after webview load
      setTimeout(() => SplashScreen.hide(), 500);
    }
  }

  render() {
    return (
      <View style={{height: '100%'}}>

        <StatusBar hidden={true} />

        <WebView
          source={{uri: GAME_URL}}
          onLoadProgress={this.handleLoad.bind(this)} />

      </View>
    );
  }
}