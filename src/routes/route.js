import React from "react";
import { View, Text, Button } from "react-native";
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from "../Components/home/home"
const MainNavigator = createStackNavigator({
    Home: {screen: Home},
},
{
initialRouteName: "Home",
headerMode: "none",
swipeEnabled: true
});
const MainRoute = createAppContainer(MainNavigator);
export default MainRoute;
