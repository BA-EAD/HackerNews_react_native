import {Pressable, StyleSheet, View} from 'react-native';
import React from 'react'
import {Colors, Metrics} from '../../Theme';
import {AppText} from '../../Components/Common';
import {useNavigation} from '@react-navigation/native';
import WebView from 'react-native-webview';
import {pathOr, propOr} from 'ramda';
import {Newsstory} from '../../types';
import { BackArrow } from '../../SVGImage';

const NewsScreen = (props: any) => {
  const navigate = useNavigation();
  const data = pathOr({} as Newsstory, ['route', 'params', 'news'], props);
  console.log(data as Newsstory);
  console.log((data as Newsstory).url);
  
  return (
    <View style={styles.screenContainer}>
      <View style={{flexDirection: 'row'}}>
        <AppText
          width={Metrics.screenWidth}
          data={data.by}
          textAlign={'center'}
          paddingTop={Metrics.baseMargin}
          color={Colors.black}
          fontSize={20}
          otherStyle={{position: 'absolute'}}
        />
        <Pressable style={styles.backBtn} onPress={() => navigate.goBack()}>
          <BackArrow />
        </Pressable>
      </View>
      <View style={styles.flex}>
        {(data as Newsstory).url ? (
          <WebView
            source={{uri: (data as Newsstory).url ?? ''}}
            startInLoadingState={true}
          />
        ) : (
          <WebView
            originWhitelist={['*']}
            textZoom={100}
            source={{html: (data as Newsstory).text ?? ''}}
          />
        )}
      </View>
    </View>
  );
}

export default NewsScreen

const styles = StyleSheet.create({
  backBtn: {
    padding: Metrics.smallMargin,
    width: 120,
    margin: Metrics.baseMargin,
  },
  screenContainer: {
    flex: 1,
    backgroundColor: Colors.white,
  },
});