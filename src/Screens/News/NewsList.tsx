import {useNavigation} from '@react-navigation/native';
import * as React from 'react';
import {
  ActivityIndicator,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useSelector } from 'react-redux';
import {getHackerNews, getLoadMoreItem} from '../../Actions';
import {AppText} from '../../Components/Common';
import {NewsItem} from '../../Components/Item';
import { ROUTE } from '../../Navigation';
import { useTypedDispatch } from '../../Redux/typedHooks';
import {Colors, Fonts, Metrics} from '../../Theme';
import {Newsstory} from '../../types';



const NewsList = () => {
  const stateData: any = useSelector(state => state);
  const navigate = useNavigation();
  const dispatch = useTypedDispatch();
  const [selectCategory, setCategory] = React.useState(0);

  console.log(stateData.NewsIdsSlice.jobItemsDetail);
  console.log(stateData.NewsIdsSlice.newsItemsDetail);
  
  
  React.useEffect(() => {
    dispatch(getHackerNews(selectCategory));
  }, [selectCategory]);

  const renderFooter = () => {
    return (
      <View
        style={{
          margin: Metrics.baseMargin,
          display: stateData.NewsIdsSlice.isIndicator ? 'flex' : 'none',
        }}>
        <ActivityIndicator color="red" style={{marginLeft: 8}} />
      </View>
    );
  };

  return (
    <View style={styles.screenContainer}>
      <View style={styles.margin}>
        <AppText
          data={'Hacker News'}
          fontSize={25}
          textAlign={'left'}
          color={Colors.black}
          otherStyle={{marginVertical: Metrics.doubleBaseMargin}}
        />
      </View>

      <View style={{flexDirection: 'row'}}>
        <FlatList
          data={['Story', 'Job']}
          horizontal={true}
          renderItem={({item, index}) => (
            <Pressable
              onPress={() => setCategory(index)}
              style={{
                margin: Metrics.baseMargin,
                borderBottomWidth: selectCategory === index ? 1 : 0,
                paddingVertical: Metrics.smallMargin,
                paddingHorizontal: Metrics.smallMargin,
                borderColor: Colors.primartColor,
                borderRadius: 5,
              }}>
              <AppText
                data={item}
                key={index}
                color={selectCategory === index ? Colors.black : Colors.grey}
                fontSize={Fonts.medium + 3}
              />
            </Pressable>
          )}
        />
      </View>

      <FlatList
        data={
          selectCategory === 0
            ? (stateData.NewsIdsSlice.newsItemsDetail as Array<Newsstory>)
            : (stateData.NewsIdsSlice.jobItemsDetail as Array<Newsstory>)
        }
        showsVerticalScrollIndicator={false}
        renderItem={({item, index}) => (
          <Pressable
            key={index}
            onPress={() =>
              navigate.navigate(
                ROUTE.NewsFeed as never,
                {
                  news: item,
                } as never,
              )
            }>
            <NewsItem
              newsItem={item}
              seeComment={() => {
                navigate.navigate(
                  ROUTE.CommentFeed as never,
                  {kids: item.kids} as never,
                );
              }}
            />
          </Pressable>
        )}
        keyExtractor={(item, index) => index.toString()}
        onEndReached={() => {
          dispatch(getLoadMoreItem(selectCategory));
        }}
        ListFooterComponent={renderFooter}
      />
    </View>
  );
};

export default React.memo(NewsList);

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  margin: {margin: Metrics.baseMargin},
});
