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
import { CheckBox, Input } from 'react-native-elements';
export default class Login extends Component {
	constructor(props) {
    super(props);
    this.state = {
      email   : '',
      password: '',
      checked:'',
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
<Button transparent onPress={() => this.props.navigation.navigate('AllCategory')}>
	<Icon name='arrow-back' />
</Button>
</Left>
<Body>
    <Title>Register</Title>
</Body>
<Right>
	<Button transparent onPress={() => this.props.navigation.navigate('Login')}>
		<Text>Login</Text>
	</Button>
</Right>
</Header>
 <View style={styles.container}>
		<View>
 			<Text style={styles.welcometext}>Sign Up</Text>
		 </View> 
        <View style={styles.inputContainer}>
          <Item floatingLabel>
			<Label>First Name</Label>
			<Input />
			</Item>
        </View>
        <View style={styles.inputContainer}>
          <Item floatingLabel>
			<Label>Last Name</Label>
			<Input />
			</Item>
        </View>
        <View style={styles.inputContainer}>
          <Item floatingLabel>
			<Label>Email Address</Label>
			<Input />
			</Item>
        </View>
        
        <View style={styles.inputContainer}>
             <Item floatingLabel>
				<Label>Password</Label>
			 <Input />
			 </Item>
        </View>
        <View style={styles.inputContainer}>
             <Item floatingLabel>
				<Label>Confirm Password</Label>
			 <Input />
			 </Item>
        </View>
       	<CheckBox title='I Agree Terms & Cont and Privacy Policy ?' 
       		style={styles.forgotText} 
       		checked={this.state.checked}
			onPress={() => this.setState({checked: !this.state.checked})}
		/>
        <TouchableHighlight style={[styles.buttonSignUpContainer, styles.loginButton]} id="signup" onPress={() => this.onClickListener('login')}>
          <Text style={styles.loginText}>Sign Up</Text>
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
    backgroundColor: "#F72F81",
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
 