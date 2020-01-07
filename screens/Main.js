import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity  } from 'react-native';

export default class Main extends React.Component{
  render(){
    return (
      <View style={styles.container}>
        <Text>This is the Main screen</Text>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Register')}><Text>Registrarme</Text></TouchableOpacity>
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
