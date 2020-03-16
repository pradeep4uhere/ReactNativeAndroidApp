import React from "react";
import { View, Text, Button, Dimensions } from "react-native";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import RightSideBar from "../sidebar/rightsidebar";
import Login from "../Components/login/login"
const WIDTH = Dimensions.get('window').width;
const RightDrawer = createDrawerNavigator(
{
Login: { screen: Login }
},
{
    initialRouteName: "Login",
    drawerWidth:WIDTH*0.80,
    drawerPosition:'right',
    contentOptions: {
        activeTintColor: "#e91e63"
    },
contentComponent: props => <RightSideBar {...props} />,
    drawerOpenRoute: 'RightSideMenu',
    drawerCloseRoute: 'RightSideMenuClose',
    drawerToggleRoute: 'RightSideMenuToggle',
}
);
export default RightDrawer;
