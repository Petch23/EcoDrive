import React, { Component } from 'react';
import { View ,TouchableHighlight,StyleSheet,ListView ,Button,Text , TouchableOpacity} from 'react-native';
import { ListItem,List ,Picker,Footer, FooterTab,Container} from 'native-base'
import { Actions } from 'react-native-router-flux';
import firebaseService from '../../enviroments/firebase';
export class EditCar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     carselected: [],
     
     
    };
     
    
  }

  componentWillMount(){
   const uid = this.props.user.uid;
   this.props.MyCarlist(uid);
  this.props.EditMyCar(uid);
  
  }
  
  
  
  onValueChange(value) {
    this.setState({
      carselected: value
    });
  }
  removeCar(car){
    console.log(JSON.stringify(car))
    console.log('55')
    // const uid = this.props.user.uid;
    // firebaseService.database().ref(`user/${uid}`).once("value",function(snapshot) {
    //   snapshot.forEach(function(childSnapshot) {
         
    //           const yourcar = childSnapshot.val();
             
    //           console.log(yourcar)
              
           
    //     });
    // }, function(error) { console.log(error); });
  }

  render() {
    // console.log(this.props.mycar)
    // console.log(this.state.carselected)
   console.log(Object.values(this.props.editcar)[1])

    return (
      
      <View style={styles.mainviewStyle}>
        {/* <Text>{JSON.stringify(this.props.mycar)}</Text> */}
        {/* <View>
            <List dataArray={this.props.mycar} 
            renderRow={(item,index) =>{
              return(
                <TouchableHighlight >
              <ListItem>
                <View >
                <Text>Make: {item.Make}</Text>
                <Text>Model: {item.Model}</Text>
                <Text>Speed:{item.Speed} </Text>
                <Text>Fueltype: {item.FuelType.FuelType}</Text>
                </View>
                <View style={{marginLeft:100}}> 
                  <View>
                    <Button title='Remove' onPress={() =>this.removeCar(item)} key={index} />
                    <Button title='Edit'/>
                  </View>
                </View>
              </ListItem>
              
              </TouchableHighlight>
              
              )
            }
            } >
          </List>
            </View> */}

             {/* <View>
            <List dataArray={this.props.editcar} 
            renderRow={(item,index) =>{
              console.log(item)
              return(
                <TouchableHighlight >
              <ListItem>
                <View >
                <Text>Make: {item.Make}</Text>
                <Text>Model: {item.Model}</Text>
                <Text>Speed:{item.Speed} </Text>
                <Text>Fueltype: {item.FuelType}</Text>
                </View>
                <View style={{marginLeft:100}}> 
                  <View>
                    <Button title='Remove' onPress={() =>this.removeCar(item)} key={index} />
                    <Button title='Edit'/>
                  </View>
                </View>
              </ListItem>
              
              </TouchableHighlight>
              
              )
            }
            } >
          </List>
            </View> */}
            </View>
            );
            
}
}

const styles = StyleSheet.create({

  mainviewStyle: {
    flex: 1,
    flexDirection: 'column',
  },
 
 
});
  
  