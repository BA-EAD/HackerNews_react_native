import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NewsList, NewsScreen} from '../Screens/News';
import initApiConfig from '../Services/API/api.config';
import {CommentsList} from '../Screens/Comments';
import {ROUTE} from '.';

const Stack = createNativeStackNavigator();

// All Route are manage here
const AppNavigator = () => {
  // Api Calling initalize by 'Axios'
  initApiConfig();

  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={ROUTE.News}>
      <Stack.Screen name={ROUTE.News} component={NewsList} />
      <Stack.Screen name={ROUTE.NewsFeed} component={NewsScreen} />
      <Stack.Screen name={ROUTE.CommentFeed} component={CommentsList} />
    </Stack.Navigator>
  );
}


export default AppNavigator;