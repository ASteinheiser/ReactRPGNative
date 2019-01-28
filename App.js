import React       from 'react';
import { WebView } from 'react-native';

export default function App(props) {
  return (
    <WebView source={{uri: 'http://react-rpg.com'}} />
  );
}