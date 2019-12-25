import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import List from './src/screens/List';
import ImageScreen from './src/screens/ImageScreen';
import CounterScreen from './src/screens/CounterScreen';
import ColorScreen from './src/screens/ColorScreen';
import SquareScreen from './src/screens/SquareScreen';

class DetailsScreen extends React.Component {
  render() {
    return (
    <View>App.js</View>
    );
  }
}

const RootStack = createStackNavigator({
  Home: HomeScreen,
  List: List,
  ImageScreen: ImageScreen,
  Counter: CounterScreen,
  AddColor: ColorScreen,
  SquareScreen: SquareScreen,
});

export default createAppContainer(RootStack);