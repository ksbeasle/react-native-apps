// Must import gesture handler first
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './Home'
import Tickets from './Tickets'
import Purchase from './Purchase'
import Contact from './Contact'

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark-content" />
      {/* <Home username='Kahlil'/> */}
      <NavigationContainer>
        <Stack.Navigator
        initialRouteName='Home'
        headerMode='screen' // android    'float' for iOS
        >
          <Stack.Screen
          name='Home'
          options={{
            headerShown: false
          }}>
            {(props) => <Home {...props} username='Bahlil'/>}
          </Stack.Screen>
          <Stack.Screen
          name='Tickets'
          component={Tickets}
          options={{
            headerTitleAlign: 'center'
          }}>

          </Stack.Screen>

          <Stack.Screen
          name='Contact'
          component={Contact}
          options={{
            headerTitleAlign: 'center',
            headerTitle: 'Contact Us'
          }}>

          </Stack.Screen>

          <Stack.Screen
          name='Purchase'
          component={Purchase}
          options={{
            headerTitleAlign: 'center',
            headerTitle: 'Purchase'
          }}>

          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </>
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
