import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Home } from './app/views/Home'
import { Contact } from './app/views/Contact'
import { StackNavigator } from 'react-navigation'

const Routes = StackNavigator({
  HomeRT: {
    screen: Home
  },
  ContactRT: {
    screen: Contact
  },
},
  {
    initialRouteName: 'HomeRT'
  }
)

export default function App() {
  return (
    // <Home />
    <Routes />
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
