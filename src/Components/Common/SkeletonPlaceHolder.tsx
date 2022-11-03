import {FlatList, StyleSheet, Text, View} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import React from 'react';
import { Metrics } from '../../Theme';

// Create Skeleton for Loader purpose
const SkeletonPlaceHolder = () => {
  return (
    <SkeletonPlaceholder borderRadius={4}>
      <SkeletonPlaceholder.Item flexDirection="row" alignItems="center">
        <SkeletonPlaceholder.Item marginLeft={20}>
          <SkeletonPlaceholder.Item
            width={Metrics.screenWidth * 0.9}
            height={20}
          />
          <SkeletonPlaceholder.Item width={80} height={20} marginTop={5} />
          <SkeletonPlaceholder.Item width={80} height={20} marginTop={5} />
          <SkeletonPlaceholder.Item
            width={80}
            marginTop={5}
            height={20}
            alignItems="flex-end"
            position="absolute"
            right={0}
            bottom={5}
          />
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  );
};

const SkeletonPlaceHolderTitle = () => {
  return (
    <SkeletonPlaceholder borderRadius={4}>
      <SkeletonPlaceholder.Item
        marginLeft={20}
        width={120}
        height={20}
        marginBottom={15}
      />
    </SkeletonPlaceholder>
  );
};

// View for Loader
const SekeltonLoadingView = () => {
  return (
    <View style={{marginTop: Metrics.doubleBaseMargin}}>
      <View style={{marginVertical: Metrics.baseMargin + 5}}>
        <SkeletonPlaceHolderTitle />
      </View>

      <View style={{marginVertical: Metrics.baseMargin}}>
        <SkeletonPlaceHolderTitle />
      </View>
      <View>
        <FlatList
          data={[...Array(10).keys()]}
          renderItem={() => (
            <View style={{marginTop: Metrics.doubleBaseMargin}}>
              <SkeletonPlaceHolder />
            </View>
          )}
        />
      </View>
    </View>
  );
}

export default SekeltonLoadingView;

const styles = StyleSheet.create({});
