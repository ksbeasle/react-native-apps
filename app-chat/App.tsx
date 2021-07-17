import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import PersonalInfo from './components/PersonalInfo';
import Chat from './components/Chat';
import Styles from './components/Styles';

export default function App() {

  const [username, setUsername] = useState("");
  const [image, setImage] = useState("")

  const onPersonalInfoClose = (name: string, image: string) => {
    setUsername(name)
    setImage(image)
  }

  let activeComponent = username != "" ? ( 
  <Chat username={username} image={image} /> )
  : (
    <PersonalInfo onClosed={onPersonalInfoClose} />
  )
  

  return (
    <SafeAreaView style={styles.container}>
      {activeComponent}
      {/* <PersonalInfo/> */}
      {/* <Text>Open up App.tsx to start working on your app!</Text> */}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
