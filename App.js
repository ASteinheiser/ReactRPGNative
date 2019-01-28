import React               from 'react';
import { StatusBar, View } from 'react-native';
import { WebView }         from 'react-native-webview';

export default function App(props) {
  return (
    <View style={{height: '100%'}}>
      <StatusBar hidden />

      <WebView source={{uri: 'http://react-rpg.com'}} />
    </View>
  );
}