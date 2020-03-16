import React, {Component} from 'react';
import {StyleSheet, View, ImageBackground} from 'react-native';
import { Container, Button, Text,  Icon } from 'native-base';
import Spinner from 'react-native-loading-spinner-overlay';
export default class LoginPageScreen extends Component {  
  constructor(props) {
    super(props);
    this.state = {
        spinner: true
    }
  }
  static navigationOptions = {  
       title:'',
  };  

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        spinner: false
      });
    }, 2000);
  }
  render() {  
  return ( 
            <Container>
            <View style={styles.container}>
            <Spinner
                visible={this.state.spinner}
                textContent={'Loading...'}
                textStyle={styles.spinnerTextStyle}
                color='#FFF'
            />
            <ImageBackground source={require('../../assets/img/shopping.jpg')} style={{width: '100%', height: '100%',opacity: 1}}>
            <View style={styles.container}>
               <View style={{flex:1,justifyContent:'space-between', alignContent:'center', marginTop:100, backgroundColor:'transparent'}}>
                 <Text style={styles.welcometext}>Logo Here</Text>
               </View>
               <View style={{flexDirection:'row', justifyContent:'space-between', alignContent:'center'}}>  
               <View style={{flex:1}}>
                   <Button style={styles.buttonContainer} onPress={() => this.props.navigation.navigate('Login')}>
                     <Text style={{fontSize:15}}>Login</Text>
                    </Button>
               </View>
               <View  style={{flex:1}}>
                   <Button style={styles.buttonContainerRegister} onPress={() => this.props.navigation.navigate('Register')}>
                       <Text style={{color:'#000', fontSize:15}}>Register</Text>
                    </Button>
               </View>
               </View>  
           </View>
           </ImageBackground>
           </View>
           </Container>
    )  
} 
} 


const styles = StyleSheet.create({
  spinnerTextStyle: {
       color: '#FFF'
   },
   instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  },
  containerImg: {
    backgroundColor:'red',
    opacity: 0.6
  },
  drawerContainer: {
    flex: 1,
    flexDirection: 'column',
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
    backgroundColor: 'rgba( 0, 0, 0, 0.0 )',
    
  },
  
  buttonContainer: {
    height:45,
    backgroundColor: "#F72F81",
    justifyContent: 'center',
    alignItems: 'center'
  },


  buttonContainerRegister: {
    height:45,
    justifyContent: 'center',
    backgroundColor: "#FFF",
    alignItems: 'center',
    backgroundColor: "#eeebe2",
    
  },

 
  welcometext: {
    fontSize: 24,
    color:'#FFF'
  },
  OrText: {
  	fontSize: 16
  },
  
});
 