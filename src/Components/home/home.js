import React, {Component} from 'react';
import {StyleSheet, View,Alert, Image,Dimensions,TouchableOpacity,TouchableHighlight} from 'react-native';
import { Container, Content, Header, Button, Text,  Body, Icon, Left,Right,ScrollView} from 'native-base';
import AllCategoryScreen from '../Page/AllCategoryScreen';
import AllCatelogListScreen from '../Page/AllCatelogListScreen';
import DashboardScreen from '../Page/DashboardScreen';
import LoginPageScreen from '../Page/LoginPageScreen';
import HomepageScreen from '../Page/HomepageScreen';
import ContactUsScreen  from '../Page/ContactUsScreen';
import LoginScreen  from '../Login/LoginScreen';
import RegisterScreen from '../Login/RegisterScreen';
import HelpScreen from '../Page/HelpScreen';
import TermsAndConditionsScreen from '../Page/TermsAndConditionsScreen';
import PrivacyPolicyScreen  from '../Page/PrivacyPolicyScreen';
import {    createDrawerNavigator, DrawerItems} from 'react-navigation-drawer'; 
import { createSwitchNavigator,   createAppContainer  } from 'react-navigation'; 
const CustomeDrawerContentComponent = (props) =>(
  <Container>
    <Header style={{height:50,backgroundColor:'#FFF'}} >
      <Body style={styles.drawerContainer}>
        <View><Text style={styles.drawerContainerwelcometext}>Menu</Text></View>
      </Body>
    </Header>
    <Content>
    <DrawerItems {...props}/>
    </Content>
   
    <View style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'stretch',
        flexWrap: 'wrap-reverse',
        borderTopWidth:1,
        borderTopColor:'#CCC',
        marginBottom:10
      }}>
    <TouchableHighlight underlayColor={'rgba(0,0,0,0.2)'} onPress={() => this.props.navigation.navigate('Home')}>
        <View style={{justifyContent:'center',alignItems:'center',marginTop:15}}>
            <Text style={{fontSize:12}}>© Copyright 2020 All rights reserved </Text>
        </View>
    </TouchableHighlight>
    </View>
    </Container>
)

class Hidden extends React.Component {
  render() {
    return null;
  }
}
const AppDrawerNavigator = createDrawerNavigator(
 {  
     Home                 : {  screen: HomepageScreen,      
                               navigationOptions: {
                                        drawerLabel: <Hidden/>,
                               }, 
     },                        
    'Dashboard'           : {  screen: DashboardScreen,
                               navigationOptions: {
                                  drawerLabel: <Hidden/>,
                               }, 
                            },
    'LoginPage'           : {  screen: LoginPageScreen,
                                  navigationOptions: {
                                    drawerLabel: <Hidden/>,
                                }, 
                            },          
    'AllCategory'         : {  screen: AllCategoryScreen },
    'Contact Us'          : {  screen: ContactUsScreen     },
    'Login'               : {  screen: LoginScreen,
                               navigationOptions: {
                                        drawerLabel: <Hidden/>,
                               },      
                            },
    'Register'            : {  screen: RegisterScreen,
                                navigationOptions: {
                                  drawerLabel: <Hidden/>,
                                }, 
                            },
    'Terms & Conditions'  : {  screen: TermsAndConditionsScreen     },
    'Privacy Policy'      : {  screen: PrivacyPolicyScreen     },
    // 'Faq'                 : {  screen: FAQScreen     },
    'CategoryDetails'     : {  screen: AllCatelogListScreen, 
                               navigationOptions: {
                                      drawerLabel: <Hidden/>,
                               }, 
                           },
    'Help'                : {  screen: HelpScreen     },
  
  },
  {
    drawerType:'slide',
    drawerPosition:'left',
    drawerBackgroundColor:'black',
    initialRouteName: 'Home',
    contentComponent: CustomeDrawerContentComponent,
    drawerBackgroundColor: 'transparent',
    drawerOpenRoute:'DrawerOpen',
    drawerCloseRoute:'DrawerClose',
    drawerToggleRoute:'DrawerToggle',
    contentOptions:{
      activeTintColor:'tomato'
    }
  },{
    contentComponent: props => <NonTeachingMenu {...props} />,
  },);  




const AppSwitchNavigator = createSwitchNavigator({  
  Dashboard: { screen: AppDrawerNavigator },  

});  

  
const AppContainer = createAppContainer(AppSwitchNavigator);  

export default class Login extends Component {

	constructor(props) {
    super(props);
    this.state = {
    }
  }

  onClickListener = (viewId) => {
    Alert.alert("Alert", "Button pressed "+viewId);
  }
render() {
  const styles = StyleSheet.create({
    login: {
        flex: 1, 
        height: 50, 
        backgroundColor:'#FFF' , 
        justifyContent: "center", 
        alignItems: "center",
    },
    register: {
      flex: 1, 
      height: 50, 
      backgroundColor:'#FFF' , 
      justifyContent: "center", 
      alignItems: "center",
  },
    
  });
return (
  <Container>
  <AppContainer/>  
  <View style={{
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'stretch',
        flexWrap: 'wrap-reverse',
        borderTop:'solid 1',
        borderTopColor:'#222',
        backgroundColor:'#ccc'

      }}>
  {/* <View style={styles.login} ><Text style={styles.text}  onPress={() => this.props.navigation.navigate('Homepage')}><Icon name="home"/></Text></View>
  <View style={styles.login} ><Text style={styles.text}  onPress={() => this.props.navigation.navigate('CartPage')}><Icon name="cart"/></Text></View>
  <View style={styles.register} ><Text style={styles.text} onPress={() => this.props.navigation.navigate('Profile')}><Icon name="person"/></Text></View> */}
  </View>
  </Container>
);
}
}


const styles = StyleSheet.create({

  drawerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
   
  },
  drawerContainerwelcometext:{
  	margin: 10,
    fontSize: 18,
    color:'#222'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  inputContainer: {
      borderBottomColor: '#fff',
      borderRadius:5,
      borderBottomWidth: 1,
      width:320,
      height:55,
      marginBottom:10,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:10,
    marginTop:30,
    width:300,
    borderRadius:5,
  },

   buttonSignUpContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:10,
    marginTop:10,
    width:300,
    borderRadius:5,
  },

  
  buttonForgotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:5,
    fontSize:10
  },
   buttonRegisterContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:5,
    width:300,
    borderRadius:5,
  },


  
  loginButton: {
    backgroundColor: "#ff0000",
  },
  loginText: {
    color: 'white',
  },
  forgotText: {
  	fontSize: 10
  },
  OrText: {
  	fontSize: 16
  },
  welcometext:{
  	marginBottom: 10,
  	fontSize: 20,
  }
  
});
 