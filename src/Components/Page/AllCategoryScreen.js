import React, {Component} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { View,StyleSheet,Image, ImageBackground,SafeAreaView, ScrollView,TouchableHighlight,Platform,TouchableOpacity } from 'react-native';
import { Container, Header, Content, Button, Text, Left, Body, Right, Icon, Title, Form, Item, Input, Label } from 'native-base';
import { SearchBar } from 'react-native-elements';
export default class AllCategoryScreen extends Component {  
  static navigationOptions = {  
    title:'Home',
    drawerIcon:(tintColor) => (
        <FontAwesome5 style={{fontSize:24}} name="home"/> 
    )
};  
  constructor(props) {
    super(props);
        this.state = {
          search: '',
          searchBox:false,
          categoryJson : [[{"id":1,"title":"Category-1","description":"Description goes herer","colorCode":"#FDF5E6"},{"id":2,"title":"Category-2","description":"Description goes herer","colorCode":"#66CDAA"},{"id":3,"title":"Category-3","description":"Description goes herer","colorCode":"#A52A2A"}],[{"id":4,"title":"Category-4","description":"Description goes herer","colorCode":"#FFA07A"},{"id":5,"title":"Category-5","description":"Description goes herer","colorCode":"#66CDAA"},{"id":6,"title":"Category-6","description":"Description goes herer","colorCode":"#32CD32"}],[{"id":7,"title":"Category-7","description":"Description goes herer","colorCode":"#FFA07A"},{"id":8,"title":"Category-8","description":"Description goes herer","colorCode":"#A52A2A"},{"id":9,"title":"Category-9","description":"Description goes herer","colorCode":"#8B008B"}],[{"id":10,"title":"Category-10","description":"Description goes herer","colorCode":"#66CDAA"},{"id":11,"title":"Category-11","description":"Description goes herer","colorCode":"#66CDAA"},{"id":12,"title":"Category-12","description":"Description goes herer","colorCode":"#FFE4C4"}],[{"id":13,"title":"Category-13","description":"Description goes herer","colorCode":"#FFA07A"},{"id":14,"title":"Category-14","description":"Description goes herer","colorCode":"#F08080"},{"id":15,"title":"Category-15","description":"Description goes herer","colorCode":"#A52A2A"}],[{"id":16,"title":"Category-16","description":"Description goes herer","colorCode":"#FFA07A"},{"id":17,"title":"Category-17","description":"Description goes herer","colorCode":"#8B008B"},{"id":18,"title":"Category-18","description":"Description goes herer","colorCode":"#32CD32"}],[{"id":19,"title":"Category-19","description":"Description goes herer","colorCode":"#F08080"},{"id":20,"title":"Category-20","description":"Description goes herer","colorCode":"#FDF5E6"},{"id":21,"title":"Category-21","description":"Description goes herer","colorCode":"#8B008B"}],[{"id":22,"title":"Category-22","description":"Description goes herer","colorCode":"#A52A2A"},{"id":23,"title":"Category-23","description":"Description goes herer","colorCode":"#FFA500"},{"id":24,"title":"Category-24","description":"Description goes herer","colorCode":"#FFA500"}],[{"id":25,"title":"Category-25","description":"Description goes herer","colorCode":"#A52A2A"},{"id":26,"title":"Category-26","description":"Description goes herer","colorCode":"#FDF5E6"},{"id":27,"title":"Category-27","description":"Description goes herer","colorCode":"#66CDAA"}],[{"id":28,"title":"Category-28","description":"Description goes herer","colorCode":"#A52A2A"},{"id":29,"title":"Category-29","description":"Description goes herer","colorCode":"#FFE4C4"},{"id":30,"title":"Category-30","description":"Description goes herer","colorCode":"#FDF5E6"}],[{"id":31,"title":"Category-31","description":"Description goes herer","colorCode":"#8B008B"},{"id":32,"title":"Category-32","description":"Description goes herer","colorCode":"#FFA07A"},{"id":33,"title":"Category-33","description":"Description goes herer","colorCode":"#F08080"}],[{"id":34,"title":"Category-34","description":"Description goes herer","colorCode":"#FFFACD"},{"id":35,"title":"Category-35","description":"Description goes herer","colorCode":"#FFE4C4"},{"id":36,"title":"Category-36","description":"Description goes herer","colorCode":"#FFA500"}],[{"id":37,"title":"Category-37","description":"Description goes herer","colorCode":"#FFA500"},{"id":38,"title":"Category-38","description":"Description goes herer","colorCode":"#FFA07A"},{"id":39,"title":"Category-39","description":"Description goes herer","colorCode":"#FFA07A"}],[{"id":40,"title":"Category-40","description":"Description goes herer","colorCode":"#FFFACD"},{"id":41,"title":"Category-41","description":"Description goes herer","colorCode":"#F08080"},{"id":42,"title":"Category-42","description":"Description goes herer","colorCode":"#66CDAA"}],[{"id":43,"title":"Category-43","description":"Description goes herer","colorCode":"#FFE4C4"},{"id":44,"title":"Category-44","description":"Description goes herer","colorCode":"#FFA07A"},{"id":45,"title":"Category-45","description":"Description goes herer","colorCode":"#8B008B"}],[{"id":46,"title":"Category-46","description":"Description goes herer","colorCode":"#A52A2A"},{"id":47,"title":"Category-47","description":"Description goes herer","colorCode":"#66CDAA"},{"id":48,"title":"Category-48","description":"Description goes herer","colorCode":"#FFE4C4"}],[{"id":49,"title":"Category-49","description":"Description goes herer","colorCode":"#A52A2A"}]],
        }
    this.onDOBPress = this.onDOBPress.bind(this);
    this.onDOBDatePicked =  this.onDOBDatePicked.bind();
    this.onJourneyDatePress = this.onJourneyDatePress.bind();
    this.onJourneyDatePicked = this.onJourneyDatePicked.bind();
    

  }

  updateHeaderSearch(){
    if(this.state.searchBox){
      this.setState({searchBox:false});
    }else{
      this.setState({searchBox:true});
    }
  }

  updateSearch = search => {
    this.setState({ search });
  };
  /**
   * DOB textbox click listener
   */
  onDOBPress = () => {
    let dobDate = this.state.dobDate;

    if(!dobDate || dobDate == null){
      dobDate = new Date();
      this.setState({
        dobDate: dobDate
      });
    }

    //To open the dialog
    this.refs.dobDialog.open({
      date: dobDate,
      maxDate: new Date() //To restirct future date
    });

  }

  /**
   * Call back for dob date picked event
   *
   */
  onDOBDatePicked = (date) => {
    this.setState({
      dobDate: date,
      dobText: moment(date).format('DD-MMM-YYYY')
    });
  }



  /**
   * Journey date textbox click listener
   */
  onJourneyDatePress = () => {
    let journeyDate = this.state.journeyDate;

    if(!journeyDate || journeyDate == null){
      journeyDate = new Date();
      this.setState({
        journeyDate: journeyDate
      });
    }

    //To open the dialog
    this.refs.journeyDialog.open({
      date: journeyDate,
      minDate: new Date() //To restirct past date
    });

  }

  /**
   * Call back for journey date picked event
   *
   */
  onJourneyDatePicked = (date) => {
    this.setState({
      journeyDate: date,
      journeyText: moment(date).format('DD MMM, YYYY')
    });
  }

  getItem = (idea) => {
    console.log(idea);
    const viewItem = idea.map(myList => {
                <View style={{height: 150, backgroundColor: 'tomato', width:'33%', alignSelf:'flex-start', justifyContent:'center'}} >
                    <Text style={{ alignSelf:'center'}}>{myList.title}</Text>
                    <Text style={{ alignSelf:'center', fontSize:10}}>{myList.description}</Text>
                </View>
    })
  }

  render() {  
      const { search } = this.state;
      const { searchBox }= this.state;
      const {categoryJson} = this.state;
      const categoryTile = this.state.categoryJson.map(idea => {
                    return  <View style={{
                            flex: 1,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'stretch',
                            borderBottomWidth:1,
                            marginTop:1,
                            borderBottomColor:'#CCC'
                            }}> 
                             {idea.map(myList => 
                               <View  style={{
                                        height: 150, 
                                        backgroundColor:myList.colorCode, 
                                        width:'33%', 
                                        alignSelf:'flex-start', 
                                        justifyContent:'center'}} 
                                        
                                >
                                   <TouchableOpacity   key={myList.id} onPress={() => this.props.navigation.navigate('CategoryDetails',{id:myList.id})}>
                                        <Text style={{ alignSelf:'center',color:'#333'}} onPress={() => this.props.navigation.navigate('CategoryDetails',{id:myList.id})}>{myList.title}</Text>
                                        <Text style={{ alignSelf:'center', fontSize:10}} onPress={() => this.props.navigation.navigate('CategoryDetails',{id:myList.id})}>{myList.description}</Text>
                                    </TouchableOpacity>
                                        
                               </View>
                            )}
                        </View>
        })

    
      return (  
        <Container>
          {(searchBox==true)? (
          <SearchBar
            placeholder="Type Here..."
            onChangeText={this.updateSearch}
            value={search}
            containerStyle={{backgroundColor:'#FFF', padding:1,marginRight:1}}
            inputContainerStyle= {{backgroundColor:'#FFF'}}
            onCancel = {this.updateHeaderSearch}
            lightTheme={true}
          />):(
            <Header style={{backgroundColor:'#F72F81'}}>
              <Left>
              <Icon style={{color:'#FFF'}} name="menu" onPress={() => this.props.navigation.openDrawer()}  />       
              </Left>
              <Body>
                <Text style={{color:'#FFF'}}>All Category</Text>  
                
              </Body>
              <Right>
              <FontAwesome5 style={{color:'#FFF', fontSize:15, marginRight:20}} name="search" onPress={() => this.updateHeaderSearch()}/>       
              <FontAwesome5 style={{color:'#FFF', fontSize:15, marginRight:10}} name="user" onPress={() => this.props.navigation.navigate('Login')}  />       
              </Right>
          </Header>
          )}
        <Body>
        <ScrollView>
        {categoryTile}
      
     
        
        
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