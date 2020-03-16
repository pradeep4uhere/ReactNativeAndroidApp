import React, {Component} from 'react';
import IconV from 'react-native-vector-icons/FontAwesome5';
// import * as FontAwesome from 'react-icons/lib/fa'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { View,StyleSheet,Image, ImageBackground,SafeAreaView, ScrollView,TouchableHighlight,Platform,TouchableOpacity } from 'react-native';
import { Container, Header, Content, Button, Text, Left, Body, Right, Icon, Title, Form, Item, Input, Label } from 'native-base';
import { DatePickerDialog } from 'react-native-datepicker-dialog'
import { Navigation } from 'react-navigation'; 
export default class AllCatelogListScreen extends Component {  
  static navigationOptions = {  
    title:'All Catelog List',
};  
  constructor(props) {
    super(props);
    const { navigation } = this.props;  
    const id = navigation.getParam('id');  
    this.state = {
          catelogJson : [{"id":1,"title":"Catelog-1","description":"Description goes herer","colorCode":"#FFA500","img":"https:\/\/st2.depositphotos.com\/4403291\/11278\/v\/950\/depositphotos_112788282-stock-illustration-catalogue-cover-design.jpg"},{"id":2,"title":"Catelog-2","description":"Description goes herer","colorCode":"#66CDAA","img":"https:\/\/www.musthavemenus.com\/blog\/wp-content\/uploads\/2010\/05\/familystylemenu1.jpg"},{"id":3,"title":"Catelog-3","description":"Description goes herer","colorCode":"#F08080","img":"https:\/\/st2.depositphotos.com\/4403291\/11278\/v\/950\/depositphotos_112788282-stock-illustration-catalogue-cover-design.jpg"},{"id":4,"title":"Catelog-4","description":"Description goes herer","colorCode":"#FDF5E6","img":"https:\/\/marketplace.canva.com\/EADapAISchY\/1\/0\/309w\/canva-teal-minimal-simple-modern-cafe-menu-KtYf4htRpqQ.jpg"},{"id":5,"title":"Catelog-5","description":"Description goes herer","colorCode":"#66CDAA","img":"https:\/\/marketplace.canva.com\/EADapAISchY\/1\/0\/309w\/canva-teal-minimal-simple-modern-cafe-menu-KtYf4htRpqQ.jpg"},{"id":6,"title":"Catelog-6","description":"Description goes herer","colorCode":"#FFE4C4","img":"https:\/\/marketplace.canva.com\/EADapAISchY\/1\/0\/309w\/canva-teal-minimal-simple-modern-cafe-menu-KtYf4htRpqQ.jpg"},{"id":7,"title":"Catelog-7","description":"Description goes herer","colorCode":"#A52A2A","img":"https:\/\/lh3.googleusercontent.com\/proxy\/IaF3k6Xaqx3S6a5s9rhfxteXqpq1i-UXKI2MjLeg2uflZZkTcoNE63VsjXbx7LsENnNgBWwKn_haFAXH6071LokvfPNiq4xpbA2X8q1E8fShT4kl4M02y5LOyHrSqRNiKJ79h_1fx62tmTLk"},{"id":8,"title":"Catelog-8","description":"Description goes herer","colorCode":"#66CDAA","img":"https:\/\/www.musthavemenus.com\/blog\/wp-content\/uploads\/2010\/05\/familystylemenu1.jpg"},{"id":9,"title":"Catelog-9","description":"Description goes herer","colorCode":"#FFA07A","img":"https:\/\/previews.123rf.com\/images\/lmv\/lmv1502\/lmv150200008\/36359499-restaurant-menu-design.jpg"}],
          id:id
    }
    //alert(this.state.id);

  }


  render() {  
      const {categoryJson} = this.state;
      const categoryTile = this.state.catelogJson.map(myList => {
                    return  <View key={myList.id} style={{height:300,width:400, justifyContent:'center', marginBottom:10}}  >
                                    <Image source={{uri: myList.img}} style={{width: '100%', height: '100%'}}/>
                                    {/* <TouchableOpacity  onPress={() => this.props.navigation.navigate('CategoryDetails')}>
                                        <Image source={{uri: myList.img}}/>
                                        <Text style={{ alignSelf:'center',color:'#333'}}>{myList.title}</Text>
                                        <Text style={{ alignSelf:'center', fontSize:10}}>{myList.description}</Text>
                                    </TouchableOpacity> */}
                               </View>
            })
      return (  
        <Container>
        <Header style={{backgroundColor:'#F72F81'}}>
          <Left>
          <FontAwesome5 style={{color:'#FFF', fontSize:24}} name="arrow-left" onPress={() => this.props.navigation.navigate('AllCategory')}/>       
          </Left>
          <Body>
            <Text style={{color:'#FFF'}}>All Catelog List ({this.state.catelogJson.length})</Text>  
          </Body>
          <Right>
          
          <Icon style={{color:'#FFF'}} name="home" onPress={() => this.props.navigation.navigate('Dashboard')}  />       
          </Right>
        </Header>
        <Body>
        <ScrollView>
        <View style={{
                        flex: 1,
                        flexDirection: 'column',
                        marginTop:1,
                        }}> 
        {categoryTile}
        </View>
        
    </ScrollView> 
          </Body>
        </Container>
      );  
  }  
}  
const styles = StyleSheet.create({
  container: {
      flex: 1,
      marginTop: 1,
    },
    datePickerBox:{
      marginTop: 9,
      borderColor: '#ABABAB',
      borderWidth: 0.5,
      padding: 0,
      borderTopLeftRadius: 4,
      borderTopRightRadius: 4,
      borderBottomLeftRadius: 4,
      borderBottomRightRadius: 4,
      height: 38,
      justifyContent:'center'
    },
    datePickerText: {
      fontSize: 14,
      marginLeft: 5,
      borderWidth: 0,
      color: '#121212',
    },
    scrollView: {
      backgroundColor: '#222',
      marginHorizontal: 1,
    },
    textTitle:{
      fontSize:17,
      color:'#FFF',
      fontFamily:'Raleway-Bold'
    },

  destinationItem:{
    backgroundColor:'#FFF', 
    flexDirection:'row',
    justifyContent:'space-around',
    marginBottom:5,
    borderBottomWidth:0.5,
    borderBottomColor:'#222'
  },
  destinationItemImage:{
    height:100, width:150
  },
  ItemButton:{
    backgroundColor:'#fff',
    height:180,
    width:200,
    padding:1
  },


  ItemButtonText:{
    fontSize:14,
    color:'#FFF',
    marginLeft:'20%'
  },
  ItemButtonBox:{
    backgroundColor:'#980000'
  },
  eventTitle:{
    fontWeight:'bold',
    fontSize:17,
    color:'#337ab7'
  },
  eventPlace:{
    fontSize:15, color:'tomato', fontWeight:'bold'
  },
  eventPrice:{
    fontSize:15, color:'#222', fontWeight:'bold'
  },
  eventPriceValue:{
    fontSize:16, 
    color:'#222', 
    fontWeight:'bold'
  },
  rightBox:{
   justifyContent:'space-between',
   flex: 1,
   flexDirection:'column',
   margin:10
  }

});