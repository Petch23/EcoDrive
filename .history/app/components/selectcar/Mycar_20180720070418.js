import React, { Component } from 'react';
import { View, Button ,Text} from 'react-native';

import { Actions } from 'react-native-router-flux';

export class MyCar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     
    };
    const uid = this.props.user.uid
    this.props.MyCarlist(uid);
  }



  render() {
    return (
      <View style={{}}>
        <Text>MyCar</Text>
      </View>
    );
  }
}