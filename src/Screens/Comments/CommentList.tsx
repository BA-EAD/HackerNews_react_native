import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AppText } from '../../Components/Common'
import { Colors, Metrics } from '../../Theme';
import { pathOr } from 'ramda';
import { useNavigation } from '@react-navigation/native';
import { CommentItem } from '../../Components/Item';
import { useDispatch, useSelector } from 'react-redux';
import { getCommentItems } from '../../Actions';
import { Newsstory } from '../../types';
import { ROUTE } from '../../Navigation';
import { BackArrow } from '../../SVGImage';

const CommentList = (props: any) => {
  const stateData: any = useSelector(state => state);
  const navigate = useNavigation();
  const dispatch = useDispatch();
  const data = pathOr([], ['route', 'params', 'kids'], props);

  React.useEffect(() => {
    dispatch(getCommentItems(data));
  }, [])

  return (
    <View style={styles.screenContainer}>
      <View style={{flexDirection: 'row'}}>
        <AppText
          width={Metrics.screenWidth}
          data={'Comments'}
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
      <View>
        <FlatList
          data={stateData.NewsIdsSlice.commentsItems as Array<Newsstory>}
          showsVerticalScrollIndicator={false}
          renderItem={({item, index}) => (
            <Pressable
              onPress={() =>
                navigate.navigate(
                  ROUTE.NewsFeed as never,
                  {
                    news: item,
                  } as never,
                )
              }>
              <CommentItem commentItem={item} />
            </Pressable>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
};

export default React.memo(CommentList)

const styles = StyleSheet.create({
  backBtn: {
    padding: Metrics.smallMargin,
    width: 120,
    margin: Metrics.baseMargin,
  },
  screenContainer: {
    backgroundColor: Colors.white,
    flex: 1,
  },
});