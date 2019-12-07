import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { HomeScreen } from '../screens/home';
import { MapScreen } from '../screens/map';

const HomeNavigator = createStackNavigator({
  Home: HomeScreen,
  Map: MapScreen,
}, {
  headerMode: 'none',
});

export const AppNavigator = createAppContainer(HomeNavigator);