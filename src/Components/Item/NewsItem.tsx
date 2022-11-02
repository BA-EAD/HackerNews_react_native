import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react'
import {Colors, Metrics} from '../../Theme';
import {AppText} from '../Common';
import {Newsstory} from '../../types';
import { getFormatTime } from '../../Services/Utils';
import { TimeSvg } from '../../SVGImage';

type NewsItemProps = {
  newsItem: Newsstory;
  seeComment(): void; 
};

const NewsItem = (props: NewsItemProps) => {
  const {newsItem = {} as Newsstory, seeComment = () => {}} = props;

  return (
    <View style={styles.newsFeed}>
      <View style={{flex: 1}}>
        <AppText
          data={newsItem.title ?? 'Testing'}
          fontSize={16}
          color={Colors.black}
          numberofLine={2}
          paddingBottom={5}
        />
        <AppText
          data={`${newsItem.score ?? '0'} point by ${newsItem.by ?? 'User'}`}
          color={Colors.grey}
          fontSize={13}
          paddingBottom={5}
        />
        <View style={styles.timeSection}>
          <TimeSvg />
          <AppText
            data={getFormatTime(newsItem.time)}
            color={Colors.grey}
            fontSize={13}
            paddingLeft={Metrics.smallMargin}
          />
        </View>
      </View>
      <Pressable onPress={seeComment} style={styles.commentSection}>
        <AppText
          data={`${newsItem.descendants ?? '0'} Comments`}
          textAlign={'right'}
        />
      </Pressable>
    </View>
  );
};

export default React.memo(NewsItem);

const styles = StyleSheet.create({
  newsFeed: {
    marginHorizontal: Metrics.baseMargin,
    marginVertical: Metrics.smallMargin,
    backgroundColor: Colors.secondaryColor,
    borderRadius: 10,
    padding: Metrics.baseMargin,
    flexDirection: 'row',
  },
  commentSection: {
    alignSelf: 'flex-end',
    position: 'absolute',
    right: 0,
    bottom: 10,
  },
  timeSection: {flexDirection: 'row', alignItems: 'center'},
});