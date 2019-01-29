import React, { Component } from 'react';
import { StatusBar }        from 'react-native';
import CookieManager        from 'react-native-cookies';
import SplashScreen         from 'react-native-splash-screen';
import { WebView }          from 'react-native-webview';
import styled               from 'styled-components/native';

import Error from './Error';

const GAME_URL = 'http://react-rpg.com?nativeApp=true';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: false
    };

    this.hideSplash = this.hideSplash.bind(this);
    this.showError = this.showError.bind(this);
    this.handleLoad = this.handleLoad.bind(this);
  }

  componentWillMount() {
    // clear the cookies on mount to refresh the webview
    CookieManager.clearAll().then().catch(console.error);
  }

  handleLoad(e) {
    const { progress, title } = e.nativeEvent;
    // webview failed to load
    if(title === 'Webpage not available') {
      this.setState({ error: true });
    }
    // webview finished loading
    if(progress === 1) {
      this.hideSplash();
    }
  }

  hideSplash() {
    // show splash screen for 0.5 sec after webview load
    setTimeout(() => SplashScreen.hide(), 500);
  }

  showError() {
    this.hideSplash();
    this.setState({ error: true });
  }

  render() {
    const { error } = this.state;

    return (
      <Background>

        <StatusBar hidden={true} />

        {
          error ?
            <Error />
            :
            <WebView
              source={{uri: GAME_URL}}
              onError={this.showError}
              onLoadProgress={this.handleLoad} />
        }

      </Background>
    );
  }
}

const Background = styled.View`
  display: flex;
  flex: 1;

  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #0f0f0f;
`
