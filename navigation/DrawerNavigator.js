import React from 'react';
import { StyleSheet, Platform , Dimensions} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';


import Main from "../screens/Main";
import Register from "../screens/Register";
import MenuOptions from "./MenuOptions";


const WIDTH = Dimensions.get('window').width;

// const TabClients = createMaterialTopTabNavigator(
//   {
//     TODOS: { screen: Clients },
//     RECIENTES: {screen: Accounting},
//     ANTIGUOS: {screen: Accounting},
//   },
//   {
//     tabBarPosition: 'top',
//     swipeEnabled: true,
//     animationEnabled: true,
//     tabBarOptions: {
//       activeTintColor: '#333',
//       inactiveTintColor: '#d3d3d3',
//       style: {
//         backgroundColor: '#ffffff',
//         overflow:'hidden',
//       },
//       labelStyle: {
//         textAlign: 'center',
//       },
//       indicatorStyle: {
//         borderBottomColor: '#7EE393',
//         borderBottomWidth: 2,
//       },
//     },
//   }
// );
//
//
// const TabAccounting = createMaterialTopTabNavigator(
//   {
//     INGRESOS: { screen: Accounting},
//     GASTOS: {screen: Accounting},
//   },
//   {
//     tabBarPosition: 'top',
//     swipeEnabled: true,
//     animationEnabled: true,
//     tabBarOptions: {
//       activeTintColor: '#333',
//       inactiveTintColor: '#d3d3d3',
//       style: {
//         backgroundColor: '#ffffff',
//         overflow:'hidden',
//       },
//       labelStyle: {
//         textAlign: 'center',
//       },
//       indicatorStyle: {
//         borderBottomColor: '#7EE393',
//         borderBottomWidth: 2,
//       },
//     },
//   }
// );
const RootStack = createStackNavigator(
  {
    Main: {
      screen: Main,
      navigationOptions: ({navigation}) => ({
          title:'Inicio',

        })
    }


  },

);



const DrawerConfig = {
  drawerWidth: WIDTH*0.83,
  contentComponent: ({ navigation }) => {
    return(<MenuOptions navigation={navigation}/>)
  }
}

const DrawerNavigator = createDrawerNavigator(
  {
    Main: {
      screen:Main,
    },
    Register: {
      screen: Register,
      navigationOptions: ({navigation}) => ({
          title:'Contabilidad',
        })
    },
  },

  DrawerConfig
);

const styles = StyleSheet.create({
  avatar_red:{
    backgroundColor:'#F75C3B',
  },

  avatar_green: {
    backgroundColor:'#78e88d',
  },
})

//const AppContainer = createAppContainer(RootStack);
const AppContainer = createAppContainer(DrawerNavigator);
export default AppContainer;
