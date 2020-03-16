import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableHighlight,
  Image,
  Alert,
  ImageBackground,
  ToastAndroid
} from 'react-native';
import { Container, Header, Content, Button, Text, Left, Body, Right, Icon, Title, Form, Item, Input, Label} from 'native-base';
import IconV from 'react-native-vector-icons/FontAwesome5';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// a component that calls the imperative ToastAndroid API
const Toast = (props) => {
  if (props.visible) {
    ToastAndroid.showWithGravityAndOffset(
      props.message,
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50,
    );
    return null;
  }
  return null;
};




export default class Login extends Component {

  static navigationOptions = {  
    title:'Login',
  }; 


	constructor(props) {
    super(props);
    this.state = {
      email   : '',
      password: '',
      visible: false,
      message: '',
      loginResponse: {email:'pradeep@gmail.com','password':'pradeep'}
    }
   
  }


  hideToast = () => {
    this.setState({
      visible: false,
    });
  };

  onClickListener = (viewId) => {
    var loginResponse= this.state.loginResponse;
    var email  = this.state.email;
    var pass   = this.state.password;
    if(loginResponse.email===email && loginResponse.password===pass){
      this.props.navigation.navigate('AllCategory')
      this.setState({visible:true});
      this.setState({message:"Suucess, You are logged In"});
    }else{
      this.setState({visible:true});
      this.setState({message:"Error!! Invalid Login Credentials"});
      //Alert.alert("Error!!", "Invalid Login Credentials");
    }
  }
render() {
  const {message} = this.state;
return (
<Container>
<Header style={{backgroundColor:'#F72F81'}}>
<Left>
<Button transparent onPress={() => this.props.navigation.navigate('AllCategory')}>
	<Icon name='arrow-back' />
</Button>
</Left>
<Body>
    <Title>Login</Title>
</Body>
<Right>
	<Button transparent onPress={() => this.props.navigation.navigate('LoginPage')}>
		<Text>Cancle</Text>
	</Button>
</Right>
</Header>
 <View style={styles.container}>
		<View>
 			<Text style={styles.welcometext}>Member Login</Text>
		 </View> 
        <View style={styles.inputContainer}>
          <Item floatingLabel>
			    <Label>Email</Label>
          <Input id="email" 
            name ="email"
            onChangeText={(text) => this.setState({email: text})}
           />
			</Item>
        </View>
        
        <View style={styles.inputContainer}>
             <Item floatingLabel>
				     <Label>Password</Label>
             <Input id="password"  password={true} onChangeText={(text) => this.setState({password: text})}/>
			 </Item>
        </View>
        <TouchableHighlight style={styles.buttonForgotContainer} onPress={() => this.props.navigation.navigate('ForgotPassword')}>
            <Text style={styles.forgotText}>Forgot your password?</Text>
        </TouchableHighlight>

        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.onClickListener('login')}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableHighlight>
        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.props.navigation.navigate('Register')}>
          <Text style={styles.loginText}>Singup</Text>
        </TouchableHighlight>
      </View>
<View  >

</View>
  <Toast visible={this.state.visible} message={message} />
</Container>
);
}
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#FFF'
    
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
    marginBottom:10,
    marginTop:30,
    width:300,
  },
  
  buttonForgotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:5,
  },



  
  loginButton: {
    backgroundColor: "#F72F81",
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
  	marginBottom: 10,
  	fontSize: 20,
  }
  
});
 