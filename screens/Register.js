import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Register extends React.Component{
  render(){
    return (
      <View style={styles.container}>
        <Text>This is screen for register</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
