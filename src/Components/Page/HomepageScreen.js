import React, {Component} from 'react';
import { View,StyleSheet,Image, ImageBackground,SafeAreaView, ScrollView, TouchableHighlight } from 'react-native';
import { Container, Header, Content, Button, Text, Left, Body, Right, Icon, Title, Form, Item, Input, Label } from 'native-base';
export default class HomepageScreen extends Component {
constructor(props) {
        super(props);
        this.state = {
        };
}
render() {
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        alignContent:'center',
      },
      overlay: {
        //backgroundColor:'tomato'
    },
    welcometext:{
        fontSize:25,
        color:'#000',
        marginTop:15,
        fontFamily:'Verdana'
    },
  });
return (
<Container>
<TouchableHighlight  onPress={() => this.props.navigation.navigate('Dashboard')}>
  {/* <ImageBackground source={{uri: 'https://i.pinimg.com/originals/f5/af/38/f5af38611cd1bda1f68876a13bb6436e.jpg'}} style={{width: '100%', height: '100%'}} > */}
   <ImageBackground source={require('../../assets/img/back.jpg')} style={{width: '100%', height: '100%'}} >
      <View style={styles.container}>
        <Image
          style={{width: 240, height: 128}}
          source={require('../../assets/img/rsz_lucene-net-icon-512x256.png')}
        />
        <Text style={styles.welcometext}>Welcome</Text>
      </View>
      <View style={{flex:0.3}}></View>
      </ImageBackground>
      </TouchableHighlight>
      </Container>

);
}
}
