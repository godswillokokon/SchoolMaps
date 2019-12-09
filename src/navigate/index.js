import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { HomeScreen } from '../screens/home';
import { LoginScreen } from '../screens/login';
import { MapsScreen } from '../screens/maps';

const HomeNavigator = createStackNavigator({
  Home: HomeScreen,
  Login: LoginScreen,
  Maps: MapsScreen,
}, {
  headerMode: 'none',
});

export const AppNavigator = createAppContainer(HomeNavigator);