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
import { Container, Header, Content, Button, Text, Left, Body, Right, Icon, Title, Form, Item, Input, Label } from 'native-base';
export default class Login extends Component {
	constructor(props) {
    super(props);
    this.state = {
      email   : '',
      password: '',
    }
  }

  onClickListener = (viewId) => {
    Alert.alert("Alert", "Button pressed "+viewId);
  }
render() {
return (
<Container>
<Header style={{backgroundColor:'#F72F81'}}>
<Left>
<Button transparent onPress={() => this.props.navigation.navigate('Home')}>
	<Icon name='arrow-back' />
</Button>
</Left>
<Body>
    <Title>Forgot Password</Title>
</Body>
<Right>
	<Button transparent onPress={() => this.props.navigation.navigate('Login')}>
		<Text>Cancle</Text>
	</Button>
</Right>
</Header>
 <View style={styles.container}>
		<View>
 			<Text style={styles.welcometext}>Recover Your Password</Text>
		 </View> 
        <View style={styles.inputContainer}>
          <Item floatingLabel>
			<Label>Enter Your Email Address</Label>
			<Input />
			</Item>
        </View>
        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.onClickListener('login')}>
          <Text style={styles.loginText}>Submit</Text>
        </TouchableHighlight>
      </View>
<View  >

</View>

</Container>
);
}
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  inputContainer: {
      borderBottomColor: '#fff',
      borderRadius:5,
      borderBottomWidth: 1,
      width:300,
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
    marginBottom:250,
    marginTop:50,
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
  	fontSize: 12
  },
  OrText: {
  	fontSize: 16
  },
  welcometext:{
  	marginTop:50,
  	marginBottom:20,
  	fontSize: 20,
  }
  
});
 