import React, { Component } from 'react';
import { View, Button ,Text,FlatList} from 'react-native';

import { Actions } from 'react-native-router-flux';
import { ListItem } from 'native-base';

export class CreateCar extends React.Component {
  render() {
    return (
      <View style={{}}>
        
        <Text>5555</Text>
      <FlatList
        data={this.props.cardata.Honda.Accord}
        renderItem={({ item })=>(
          <ListItem
            roundAvatar
            Make={`${item.Model}`}
          />
        )}
        keyExtractor={(item) => item.Model}
      />
      <Text>55555</Text>
      </View>
    );
  }
}