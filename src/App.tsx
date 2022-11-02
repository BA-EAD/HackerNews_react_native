/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import * as React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import {Provider} from 'react-redux';
import {store} from './Redux/store';
import {Colors} from './Theme';
import {NavigationContainer} from '@react-navigation/native';
import {AppNavigator} from './Navigation';
import {AppScreenLoader, AppText} from './Components/Common';

const AppContainer = (props: any) => {
  const {isAppError} = props;
  console.log('isAppError', isAppError);
  
  return (
    <React.Fragment>
      {isAppError ? (
        <View style={{flex: 1}}>
          <NavigationContainer>
            <AppNavigator />
          </NavigationContainer>
        </View>
      ) : (
        <View>
          <AppText data={'Oops... Internet is Gone'} />
        </View>
      )}
    </React.Fragment>
  );
}

const App = () => {
  const [connected, toggleNetwork] = React.useState(true);
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.white : Colors.white,
    flex: 1,
  };

  const handleConnectivityChange = async () => {
    const checkConnectivity = await NetInfo.fetch();
    const {isConnected} = checkConnectivity;
    toggleNetwork(isConnected === null ? false : isConnected);
  };

  React.useEffect(() => {
    NetInfo.addEventListener(() => {
      handleConnectivityChange();
    });
  }, [connected]);

  return (
    <Provider store={store}>
      <SafeAreaView style={backgroundStyle}>
        <AppScreenLoader />
        <AppContainer isAppError={connected} />
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
