import React from 'react';
import HomeScreen from './HomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SettingsScreen from './SettingsScreen';

const {Navigator, Screen} = createBottomTabNavigator();

const HomeTabScreen = () => {

  return (
    <Navigator screenOptions={{tabBarHideOnKeyboard: true,}}>
      <Screen name='HomeScreen' component={HomeScreen}/>
      <Screen name='SettingsScreen' component={SettingsScreen}/>
    </Navigator>
  );
}


export default HomeTabScreen;
