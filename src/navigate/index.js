import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { HomeScreen } from '../screens/home';
import { LoginScreen } from '../screens/login';
import { MapsScreen } from '../screens/maps';
import { HighlightsScreen } from '../screens/highlights';
import { ProScreen } from '../screens/aboutPro';
import { MeScreen } from '../screens/aboutMe';

const HomeNavigator = createStackNavigator({
  Home: HomeScreen,
  Login: LoginScreen,
  Maps: MapsScreen,
  Highlights: HighlightsScreen,
  Pro: ProScreen,
  Me: MeScreen,
}, {
  headerMode: 'none',
});

export const AppNavigator = createAppContainer(HomeNavigator);