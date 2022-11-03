import { Platform, StyleSheet, Text, View } from 'react-native'
import * as React from 'react'
import { Colors, Fonts, Metrics } from '../../Theme'
import { AppText } from '../Common'
import { Newsstory } from '../../types'
import { getFormatTime } from '../../Services/Utils'

type CommentItemProps = {
  commentItem: Newsstory;
}

const CommentItem = (props: CommentItemProps) => {
  const {commentItem = {} as Newsstory} = props;
  console.log(commentItem);
  
  return (
    <View
      style={[
        styles.commentSection,
        {
          display: commentItem.deleted
            ? 'none'
            : commentItem.dead
            ? 'none'
            : 'flex',
        },
      ]}>
      <View>
        <AppText
          data={commentItem.by}
          color={Colors.black}
          fontSize={Fonts.latge}
          fontWeight={Platform.OS === 'android' ? 'bold' : '500'}
        />
        <AppText
          data={commentItem.text ?? ''}
          numberofLine={2}
          color={Colors.grey}
          paddingTop={Metrics.smallMargin}
        />
      </View>
      <AppText data={getFormatTime(commentItem.time)} textAlign={'right'} />
    </View>
  );
}

export default React.memo(CommentItem);

const styles = StyleSheet.create({
  commentSection: {
    margin: Metrics.baseMargin,
    backgroundColor: Colors.secondaryColor,
    padding: Metrics.baseMargin,
    borderRadius: 10,
  },
});