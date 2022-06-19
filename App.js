import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeTabScreen from './src/screens/HomeTabScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailScreen from './src/screens/DetailScreen';
import { StatusBar } from 'react-native';

const App = () => {
  

const {Navigator, Screen} = createNativeStackNavigator();

  return (
     <NavigationContainer>
      <StatusBar backgroundColor={'orange'}/>
      <Navigator screenOptions={{headerShown: false, animation: 'flip'}}>
        <Screen name="HomeTab" component={HomeTabScreen} />
        <Screen name="DetailScreen" component={DetailScreen} />
      </Navigator>
    </NavigationContainer>
  );
}


export default App;
