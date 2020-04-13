import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { styles } from './styles/styles';

export default class Feed extends Component {
  render() {
    return (
      <View style={styles.center}>
        <Text style={styles.title}>Navigation Drawer (Feed Component)</Text>
        <Button
          title='Go to feed Item'
          onPress={() => {
            this.props.navigation.navigate('Details', {
              titleName: 'Wenas tardes',
            });
          }}
        />
      </View>
    );
  }
}
