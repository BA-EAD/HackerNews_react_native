import { Button, NativeModules, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppText from './AppText';
import { Colors, Fonts } from '../../Theme';

export class ErrorBountry extends React.Component<any, any> {
  state = {
    hasError: false,
  };
  static getDerivedStateFromError(error) {
    return {hasError: true};
  }

  componentDidCatch(error, errorInfo) {
    // deal with errorInfo if needed
  }

  render() {
    if (this.state.hasError) {
      console.log('hasError', "myview");
      return (
        <SafeAreaView style={{flex: 1, justifyContent:'center'}}>
          <AppText
            data={'!Oops... Something went Wrong'}
            color={Colors.black}
            fontSize={Fonts.latge}
            textAlign={'center'}
          />
          <Button
            title="Back to Home Screen"
            onPress={() => {
                NativeModules.DevSettings.reload();
            }}
          />
        </SafeAreaView>
      );
    } 
    return this.props.children;
  }
}

export default ErrorBountry

const styles = StyleSheet.create({})