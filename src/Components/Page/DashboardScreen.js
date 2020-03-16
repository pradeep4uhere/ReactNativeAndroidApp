import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableHighlight,
  Image,
  Alert,
  ImageBackground
} from 'react-native';
import { Container, Header, Content, Button, Text, Left, Body, Right, Icon, Title, Form, Item,   Label } from 'native-base';
import AppIntroSlider from 'react-native-app-intro-slider';
const slides = [
  {
    key: 'somethun',
    title: 'Title 1',
    text: 'Description.\nSay something cool',
    image: require('../../assets/img/67502.jpg'),
    backgroundColor: '#59b2ab',
  },
  {
    key: 'somethun-dos',
    title: 'Title 2',
    text: 'Other cool stuff',
    image: require('../../assets/img/shopping.jpg'),
    backgroundColor: '#febe29',
  },
  {
    key: 'somethun1',
    title: 'Rocket guy',
    text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
    image: require('../../assets/img/crystal_background.jpg'),
    backgroundColor: '#22bcb5',
  },
  {
    key: 'somethun2',
    title: 'Title 1',
    text: 'Description.\nSay something cool',
    image: require('../../assets/img/67502.jpg'),
    backgroundColor: '#59b2ab',
  },
  {
    key: 'somethun-dos2',
    title: 'Title 2',
    text: 'Other cool stuff',
    image: require('../../assets/img/shopping.jpg'),
    backgroundColor: '#febe29',
  },
];
export default class DashboardScreen extends Component {  

  constructor(props) {
    super(props);
    this.state = {
      showRealApp: false
    }
  }


  on_Done_all_slides = () => {
    this.setState({ show_Main_App: true });
    this.props.navigation.navigate('AllCategory');
  };

  on_Skip_slides = () => {
    this.setState({ show_Main_App: true });
    this.props.navigation.navigate('AllCategory');
  };
  
   _renderItem = (item) => {
    return (
      <View style={styles.slide}>
        <Text style={styles.title}>{item.title}</Text>
        <Image source={item.image} />
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  }


  _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    this.setState({ showRealApp: true });
  }
  static navigationOptions = {  
       title:'Intro Page',
  };  
  render() {  
   if (this.state.showRealApp) {
            return   
            <ImageBackground source={require('../../assets/img/shopping.jpg')} style={{width: '100%', height: '100%',opacity: 1}}>
            <View style={styles.container}>
               <View style={{flex:1,justifyContent:'space-between', alignContent:'center', marginTop:100, backgroundColor:'transparent'}}>
                 <Text style={styles.welcometext}>Appname Here</Text>
               </View>
               <View style={{flexDirection:'row', justifyContent:'space-between', alignContent:'center'}}>  
               <View style={{flex:1}}>
                   <Button style={styles.buttonContainer}>
                     <Text style={{fontSize:15}}>Login</Text>
                    </Button>
               </View>
               <View  style={{flex:1}}>
                   <Button style={styles.buttonContainerRegister}><Text style={{color:'#000', fontSize:15}}>Register</Text></Button>
               </View>
               </View>  
           </View>
           </ImageBackground>
          } else {
            return  <AppIntroSlider
                    slides={slides}
                    onDone={this.on_Done_all_slides}
                    showSkipButton={true}
                    onSkip={this.on_Skip_slides}
                  />
          }
  }  
}  


const styles = StyleSheet.create({
  mainContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  image: {
    width: 320,
    height: 320,
  },
  text: {
    color: 'rgba(255, 255, 255, 0.8)',
    backgroundColor: 'transparent',
    textAlign: 'center',
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 22,
    color: 'white',
    backgroundColor: 'transparent',
    textAlign: 'center',
    marginBottom: 16,
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
 