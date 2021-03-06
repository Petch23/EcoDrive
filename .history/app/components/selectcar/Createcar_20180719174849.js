import React, { Component } from 'react';
import { View, Button ,Text,FlatList,TouchableHighlight} from 'react-native';

import { Actions } from 'react-native-router-flux';
import { ListItem,List ,Picker} from 'native-base';
import firebaseService from '../../enviroments/firebase';

export class CreateCar extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      series: undefined,
      seriecar:[],
      details:[],
      
      cardata:[],
      checkcar:[],
      cardetail:[]
    };
  }
  onValueChange(value) {
    this.setState({
      series: value
    });
  }
  componentWillMount(){
    this.props.carlist()
    
   
    
  }
  componentDidUpdate(){
  
  }
  componentWillReceiveProps(nextProps){
    const make = this.props.select
    const model = nextProps.modelselect
    // console.log(make)
    // console.log(model)
    if(model != null && make != null   ){
    firebaseService.database().ref(`CarList/${make}/${model}`).on('value',function(snapshot){
      const seriecars = snapshot.val();
      this.setState({ seriecar: seriecars })
}.bind(this), function(error) { console.log(error); });
    }

    const uid = nextProps.user.uid;
    firebaseService.database().ref(`user/${uid}`).once('value',function(snapshot){ 
      snapshot.forEach(function(childSnapshot) {
        childSnapshot.forEach(function(childchildSnapshot){
            const childData = Object.values(childchildSnapshot.val())[1];
            this.setState({checkcar:[...this.state.checkcar,childData]})
          console.log(JSON.stringify(this.state.checkcar));
        }.bind(this))
      }.bind(this))
    }.bind(this), function(error) { console.log(error); }); //

  }
  
  CarDetail () {
    const make = this.props.select
    const model = this.props.modelselect
    const series = this.state.series
    if(model != null && make != null &&series!= null  ){
    firebaseService.database().ref(`CarList/${make}/${model}/${series}`).once('value',function(snapshot){
      const detail = snapshot.val();
      this.setState({ details: [detail] })
      this.setState({ cardetail: detail})
    }.bind(this), function(error) { console.log(error); });
  }
  }

  AddData(){
    const uid = this.props.user.uid;
    const car = Object.values(this.state.details)[0];
    const checky = this.state.checkcar
    const model = this.state.cardetail.Model;
    console.log(checky.includes(model))
  
  
    
    
  if(checky.includes(model) === false) {
    firebaseService.database().ref(`user/${uid}`).push({
      car
    }) .catch((error)=>{
    console.log(error);
  });
      }else{
        console.log('555')
      }
  firebaseService.database().ref(`user/${uid}`).on('value',function(snapshot){
    const cardat = snapshot.val();
    this.setState({ cardata: [cardat] })
  }.bind(this), function(error) { console.log(error); });
}



  

  

  render() {
    // console.log(typeof this.state.seriecar);
    // const make = this.props.select
    // const model = this.props.modelselect
    // this.props.Cardetail()
    // const make = this.props.select
    // this.props.MakeCar(make)
   
    return (
      
      <View style={{}}>
       
        {/* <Text>5555</Text> */}
        {/* <List dataArray={this.state.seriecar} 
            renderRow={(item) =>{
              return(
              <ListItem>
                <Text>{Object.entries(item)[0]}</Text>
                <Text>{Object.values(item)[1]}</Text>
              </ListItem>
              )
            }
            }>
          </List> */}
          {/* <List dataArray={this.state.details} 
            renderRow={(item) =>{
              return(
              <View>
                <Text>Model: {item.Model}</Text>
                <Text>Speed: {item.Speed}</Text>
              </View>
              )
            }
            }>
          </List> */}

          {/* <List>
          {
            Object.keys(this.state.details).map((item, i) => (
            <ListItem
            key={i}
            Model={item}
            Speed={item}
            />
             ))
          }
          </List> */}
          <Text>{JSON.stringify(Object.values(this.state.cardetail)[1])}</Text>
          <Text>{JSON.stringify(Object.values(this.state.cardata))}</Text>
      {/* <Text>{JSON.stringify(this.state.seriecar)}</Text>
      <Text>{this.state.series}</Text> */}
      {/* <Text>{this.props.select}</Text>
      <Text>{this.props.modelselect}</Text> */}
            <Picker
              mode="dropdown"
              placeholder="Select One"
              placeholderStyle={{ color: "#2874F0" }}
              note={false}
              selectedValue={this.props.select}
              onValueChange={this.props.onValueChange.bind(this)}
            >
                {Object.keys(this.props.cardata).map((item, index) => {
                  return (< Picker.Item label={item} value={item} key={index} />);    
            })}   
            </Picker>
            <Picker
              mode="dropdown"
              placeholder="Select One"
              placeholderStyle={{ color: "#2874F0" }}
              note={false}
              selectedValue={this.props.modelselect} // change to props
              onValueChange={this.props.Modelchange.bind(this)} // change to props
            >
              {Object.keys(this.props.model).map((item, index) => {
              return (< Picker.Item label={item} value={item} key={index} />);
            })} 
            </Picker>

             <Picker
              mode="dropdown"
              placeholder="Select One"
              placeholderStyle={{ color: "#2874F0" }}
              note={false}
              selectedValue={this.state.series}
              onValueChange={this.onValueChange.bind(this)}
            >
              {this.state.seriecar.map((item, index) => {
              return (< Picker.Item label={Object.values(item)[1]} value={index} key={index} />);
              })} 
            </Picker>
            <TouchableHighlight>
              <Button title="Go" onPress={()=>this.CarDetail() }/>
            </TouchableHighlight>
            <View>
            <List dataArray={this.state.details} 
            renderRow={(item) =>{
              return(
              <View>
                <Text>Model: {item.Model}</Text>
                <Text>Speed: {item.Speed}</Text>
              </View>
              )
            }
            }>
          </List>
            </View>
            <View>
              <Button title="Add" onPress={()=>this.AddData()}/>
            </View>
            
            
            
      </View>
      
    );
  }
}