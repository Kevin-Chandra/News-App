import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '@ui/home/Home';
import ArticleDetails from '@ui/article_details/ArticleDetails';
import SearchArticle from '@ui/search_article/SearchArticle';
import { Navigation } from 'src/typings/Navigations';

const RootStack = createStackNavigator<Navigation.RootNavigatorParamList>();

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="Home" component={Home} />
        <RootStack.Screen name="ArticleDetails" component={ArticleDetails} />
        <RootStack.Screen name="ArticleSearch" component={SearchArticle} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
